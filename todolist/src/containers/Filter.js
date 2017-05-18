import React from 'react';
import Select from '../components/select';
import {
	bindActionCreators
} from 'redux';
import {
	connect
} from 'react-redux';
import * as Actions from '../actions';

class Filter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const selectArr = ['ALL', 'COMPLETED', 'UNCOMPLETED'];
		console.log(this.props, 'select')
		const props = this.props
		return (
			<div>
				{selectArr.map((item, index) => (
					<Select key={index} {...props} value={item}/>
				))}
			</div>
		);
	}
}

Filter.propTypes = {
	actions: React.PropTypes.object,
	filter: React.PropTypes.string
}


function mapStateToProps(state) { // eslint-disable-line no-unused-vars
	/* Populated by react-webpack-redux:reducer */
	const props = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Filter);