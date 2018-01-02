import React from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends React.Component {
	render() {
		return (
			<section id="layout-top" className="layout">
				<header>RECIPES APP</header>
				<nav>
					<NavLink exact to="/">Recipes Project</NavLink>
					<NavLink to="/recipes">Recipes</NavLink> 
					<NavLink to="/submit">Submit a Recipe</NavLink>
				</nav>
			</section>
		);
	}
}