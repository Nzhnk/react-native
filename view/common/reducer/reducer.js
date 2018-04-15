import { changeSelectedTab } from './actionTypes.js';

const defaultState = {
	selected: state.home.selected
}

export default ( state = defaultState, action ) => {
	console.log(state)
	if( action.type === changeSelectedTab ){
		return Object.assign( {}, state, {
			selected: action.value
		} )
	}
	return state;
};