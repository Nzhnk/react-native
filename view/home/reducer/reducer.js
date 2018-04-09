import { changeSelectedTab } from './actionTypes.js';

const defaultState = {
	selected: 'index'
}

export default ( state = defaultState, action ) => {
	if( action.type === changeSelectedTab ){
		return Object.assign( {}, state, {
			selected: action.value
		} )
	}
	return state;
};