import React from 'react';
import AddTodo from './addtodo';
import TodoList from './todolist';

export default class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AddTodo />
				<TodoList />
			</div>
		);
	}
}