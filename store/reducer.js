import { combineReducers } from 'redux';
import { reducer as home } from '../view/home/'; // home文件下有index.js

const reducer = combineReducers({
	home
});

export default reducer;