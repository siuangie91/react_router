import React from 'react';
import { NavLink } from 'react-router-dom';

export class Submit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleSubmitClick = this.handleSubmitClick.bind(this);
	}

	handleSubmitClick() {
		console.log('button clicked');
		this.props.history.push('/'); // redirect to index
	}

	render() {
		return (
			<div>
				<h2>Submit a Recipe</h2>
				<button onClick={this.handleSubmitClick}>Submit (will redirect to index)</button>
			</div>
		);
	}
}