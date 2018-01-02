import React from 'react';
import ReactDOM from 'react-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

import { Nav } from './_components/Nav';
import { Home } from './_components/Home';
import { Recipes } from './_components/Recipes';
import { Submit } from './_components/Submit';

const appHistory = createBrowserHistory();

ReactDOM.render(
	<Router>
		<div className="App">
			<Nav /> 

			<Route exact path="/" component={Home} />
			<Route path="/recipes" component={Recipes} />
			<Route path="/submit" component={Submit} history={appHistory} />
		</div>
	</Router>,
	document.getElementById('root'));