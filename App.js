import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './store/';
// import styles from './styles/App.js';
import Home from './view/home/View.js';
import Detail from './view/detail/View.js';

const RouteApp = StackNavigator({
	Home: { screen: Home },
	Detail: { screen: Detail }
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