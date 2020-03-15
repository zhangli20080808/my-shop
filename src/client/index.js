import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';
import { getClientStore } from '../store';
import { Provider } from 'react-redux';

const store = getClientStore();

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					{renderRoutes(routes)}
	    	</div>
			</BrowserRouter>
		</Provider>
	)
}

ReactDom.hydrate(<App />, document.getElementById('root'))

// react-router-config 是一个帮助我们配置静态路由的小助手。
// 其源码就是一个高阶函数 利用一个map函数生成静态路由
// import React from "react";
// import Switch from "react-router/Switch";
// import Route from "react-router/Route";
// const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
// routes ? (
//     <Switch {...switchProps}>
//         {routes.map((route, i) => ( 
//         <Route
//           key={route.key || i}
//           path={route.path}
//           exact={route.exact}
//           strict={route.strict}
//           render={props => (
//             <route.component {...props} {...extraProps} route={route} />
//           )}
//         />
//       ))}
//     </Switch>
//   ) : null;
//  export default renderRoutes;