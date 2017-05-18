import React from 'react';
import {
	bindActionCreators
} from 'redux';
import {
	connect
} from 'react-redux';
import * as Actions from '../actions';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props)
		const {
			todo,
			actions,
			filter
		} = this.props
			//应该用form包起来，把子组件抽离出来，现在看起来太乱了
		return (
			<div>
				<ul>
					{todo.filter((item) => {
						console.log('filter', filter)
						if(filter === 'ALL') {
							return item;
						} else if(filter === 'COMPLETED') {
							return item.completed;
						} else {
							return !item.completed
						}
					}).map((item) => {
						const check = item.completed ? {checked: true} : {};
						return (
						<li key={item.id}>
							<input type="checkbox" {...check} onClick={() => actions.toggleTodo(item.id)}/>
							<span>{item.text}</span>
							<button onClick={() => actions.removeTodo(item.id)}>删除</button>
						</li>
						)					
					})}
				</ul>
			</div>
		);
	}
}

TodoList.propTypes = {
	todo: React.PropTypes.array,
	actions: React.PropTypes.object,
	filter: React.PropTypes.string
}


function mapStateToProps(state) { // eslint-disable-line no-unused-vars
	/* Populated by react-webpack-redux:reducer */
	const props = {
		todo: state.todo,
		filter: state.filter
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
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);