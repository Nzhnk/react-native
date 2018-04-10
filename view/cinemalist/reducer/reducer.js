import { CINEMA_LIST } from './actionTypes'

const defaultState = {
	cinemalist: {}
}

export default ( state = defaultState, action ) => {
	if( action.type === CINEMA_LIST ){
		const newState = {
			cinemalist: action.cinemalist
		}
		return newState;
	}
	return state
};