import React from 'react';


const style = {
	mglt: {
		marginLeft: '20px',
		color: '#f8942b'
	},
	active: {
		color: '#ccc',
		textDecoration: 'none'
	}
}


const Select = (props) => {
	console.log('ssss', props)
	const {
		actions
	} = props
	return ( < a style = {
			props.value === props.filter ? style.active : style.mglt
		}
		href = "#"
		onClick = {
			(e) => {
				e.preventDefault();
				actions.setFilter(props.value);
			}
		} > {
			props.value
		} < /a>
	)
}

export default Select;