import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config'
import { render } from './utils';
import { getStore } from '../store';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import routes from '../Routes';
import request from '../../middlewares/remoteData'

const app = express();
app.use(express.static('public'));

// http://120.24.4.23:9091/api/c/banners/get/all
app.use('/c', proxy('http://120.24.4.23:9091', {
  proxyReqPathResolver: function (req) {
	  console.log(req.url)
    return '/api/c' + req.url;
  }
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function (req, res,next) {
	let params = {
		// domain: host
		domain: 'zl123'
	  }
	request.req2('domains/get/shopId', 'get', params, (error, data) => {
		if (error) return next(error);
	
		if (data.code === 0) {
		  res.cookie('shopId', JSON.stringify(data.data), {maxAge: 60 * 60 * 24 * 1 * 1000, httpOnly: false});
		//   const url = req.originalUrl;
		//   const path = req.path;
		//   const deviceAgent = req.headers['user-agent'].toLowerCase();
		//   const accept = req.get('accept') || '';
		//   const isPageReq = !(req.xhr || accept.indexOf('application/json') > -1);
		//   const isMobileReq = /mobile/.test(deviceAgent) && path !== '/m' && path.indexOf('/m/') === -1;
		//   if (isPageReq && isMobileReq) {
		// 	return res.redirect('/m' + url);
		//   }
		}
	  })
	const store = getStore(req);
	// 根据路由的路径，来往store里面加数据
	const matchedRoutes = matchRoutes(routes, req.path);
	// 让matchRoutes里面所有的组件，对应的loadData方法执行一次
	const promises = [];

	matchedRoutes.forEach(item => {
		if (item.route.loadData) {
			const promise = new Promise((resolve, reject) => {
				item.route.loadData(store).then(resolve).catch(resolve);
			})
			promises.push(promise);
		}
	})

	Promise.all(promises).then(() => {
		const context = {css: []};
		const html = render(store, routes, req, context);

		if (context.action === 'REPLACE') {
			res.redirect(301, context.url)
		}else if (context.NOT_FOUND) {
			res.status(404);
			res.send(html);
		}else {
			res.send(html);
		}
	})
});

var server = app.listen(3010);