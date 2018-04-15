import React, { Component } from 'react';
import { View, Text } from 'react-native';

class List extends Component {
	static navigationOptions = {
		title: '列表',
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
			<View><Text>列表</Text></View>
		);
	}
}

export default List;