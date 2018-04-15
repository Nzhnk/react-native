import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Citys extends Component {
	static navigationOptions = {
		title: '城市选择',
		headerStyle: {
		  backgroundColor: '#dd403b'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
		  fontWeight: 'normal',
		}
	};
	render() {
		return (
			<View>
				<Text>城市选择</Text>
			</View>
		);
	}
}

export default Citys;