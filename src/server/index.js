import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import { render } from "./utils";
import { getStore } from "../store";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "../Routes";

const app = express();
app.use(express.static("public"));

// http://120.24.4.23:9091/api/c/banners/get/all
app.use(
  "/c",
  proxy("http://212.64.7.78:9091", {
    proxyReqPathResolver: function(req) {
      return "/api/c" + req.url;
    }
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", function(req, res, next) {
	
  const store = getStore(req);
  // 根据路由的路径，来往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path);
  // 让matchRoutes里面所有的组件，对应的loadData方法执行一次
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = { css: [] };
    const html = render(store, routes, req, context);

    if (context.action === "REPLACE") {
      res.redirect(301, context.url);
    } else if (context.NOT_FOUND) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  });
});

app.listen(3010);
