import { combineReducers } from 'redux';
import { reducer as home } from '../view/home/'; // home文件下有index.js
import { reducer as movielist } from '../view/movie/';
import { reducer as cinemalist } from '../view/cinemalist/';

const reducer = combineReducers({
	home,
	movielist,
	cinemalist
});

export default reducer;