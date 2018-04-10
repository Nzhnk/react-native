import { HOT_MOVIE } from './actionTypes'

const defaultState = {
	hotMovieList: []
}

export default ( state = defaultState, action ) => {
	if( action.type === HOT_MOVIE ){
		const newState = {
			hotMovieList: action.hotMovieList
		}
		return newState;
	}
	return state
};