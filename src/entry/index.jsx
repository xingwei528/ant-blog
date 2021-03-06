import '../common/lib';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link ,IndexRoute } from 'react-router';

import App from '../component/App';
import About from '../component/About';
import AboutMe from '../component/about/me';
import Blog from '../component/Blog';
import BlogAdd from '../component/blog/add';
import BlogAdd2 from '../component/blog/add2';


//router 第二种写法
const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { 
    	path: 'about', 
    	component: About,
    	childRoutes :[
    		{
    			path:'me',
    			component: AboutMe
    		}
    	]
   	},
    {
      path: 'blog',
      component:Blog,
      childRoutes :[
        {
          path:'add',
          component: BlogAdd
        },
        {
          path:'add2',
          component: BlogAdd2
        }
      ]
    },
    { 
    	path: '*',
    	component: App 
    }
  ]
};

render(<Router history={hashHistory} routes={routes} />,
	document.getElementById('react-content'));


//router 第一种写法
//
//import Home from '../component/Home';
//import AboutHome from '../component/about/index';
//
// render((
// 	<Router history={hashHistory}>
//     	<Route path="/" component={App}>
//         <IndexRoute component={Home} />
// 	      <Route path="about" component={About}>
// 	      	<IndexRoute component={AboutHome} />
// 	      	<Route path="me" component={AboutMe} />
// 	      </Route>
// 	      <Route path="*" component={App} />
// 	    </Route>
//   	</Router>
// ), document.getElementById('react-content'));