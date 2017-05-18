import {
	ADD_TODO,
	TOGGLE_TODO,
	REMOVE_TODO
} from '../actionTypes.js';

export default function todo(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			{
				return [{
						text: action.text,
						id: action.id,
						completed: false,
					},
					...state,
				]
			}
		case TOGGLE_TODO:
			{
				return state.map((item) => {
					if (item.id === action.id) {
						return {
							...item,
							completed: !item.completed,
						}
					} else {
						return item;
					}
				})
			}
		case REMOVE_TODO:
			{
				return state.filter((item) => {
					return item.id !== action.id
				})
			}
		default:
			{
				return state;
			}
	}
}