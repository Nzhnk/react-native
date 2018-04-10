import { HOT_MOVIE } from './actionTypes.js';

export const hotMovieAction = (hotMovieList) => ({
	type: HOT_MOVIE,
	hotMovieList
})