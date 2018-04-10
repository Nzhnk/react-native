import { CINEMA_LIST } from './actionTypes.js';

export const cinemaListAction = ( cinemalist ) => ({
	type: CINEMA_LIST,
	cinemalist
});