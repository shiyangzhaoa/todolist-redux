import React from 'react';
import {
	bindActionCreators
} from 'redux';
import {
	connect
} from 'react-redux';
import * as Actions from '../actions';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			text: ''
		}
		console.log(this.props);
	}

	handleKeyPress(e) {
		const {
			actions
		} = this.props;
		const value = e.target.value;
		const keyCode = e.charCode;
		if (keyCode === 13) {
			actions.addTodo(value);
			this.setState({
				text: ''
			});
		}
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		})
	}


	render() {
		return (
			<div>
				<input type="text" value={this.state.text} onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
			</div>
		);
	}
}
AddTodo.propTypes = {
	todo: React.PropTypes.array,
	actions: React.PropTypes.object
}


function mapStateToProps(state) { // eslint-disable-line no-unused-vars
	/* Populated by react-webpack-redux:reducer */
	const props = {
		todo: state.todo
	};
	return props;
}

function mapDispatchToProps(dispatch) {
	/* Populated by react-webpack-redux:action */
	const actionMap = {
		actions: bindActionCreators(Actions, dispatch)
	};
	return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);