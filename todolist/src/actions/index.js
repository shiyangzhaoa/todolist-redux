/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import {
	ADD_TODO,
	TOGGLE_TODO,
	REMOVE_TODO,
	SET_FILTER
}
from '../actionTypes.js';

let nextId = 0;

//此处考虑了异步的情况，实际上不需要，直接return就好了；
export const addTodo = (text) => dispatch => {
	dispatch({
		type: ADD_TODO,
		text: text,
		completed: false,
		id: nextId++
	})
}

export const toggleTodo = (id) => dispatch => {
	dispatch({
		type: TOGGLE_TODO,
		id: id,
	})
}

export const removeTodo = (id) => dispatch => {
	dispatch({
		type: REMOVE_TODO,
		id: id
	})
}

export const setFilter = (text) => dispatch => {
	dispatch({
		type: SET_FILTER,
		filter: text
	})
}