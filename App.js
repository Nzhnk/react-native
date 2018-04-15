import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './store/';

import Home from './view/home/View.js';
import Detail from './view/detail/View.js';
import Citys from './view/addr/View.js';
import Search from './view/search/View.js';
import List from './view/list/View.js';

const RouteApp = StackNavigator({
	Home: { screen: Home, navigationOptions:{ header: null } },
	Detail: { screen: Detail },
	Citys: { screen: Citys },
	Search: { screen: Search, navigationOptions:{ header: null }  },
	List: { screen: List }
});

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<RouteApp />
			</Provider>
		);
	}
}

export default App;