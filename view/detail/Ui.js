import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

class MovieDetails extends Component {
	static navigationOptions = {
		title: '电影详情',
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
			<View style={{flex:1}}>
				<Text>电影详情</Text>
				<ScrollView style={{flex:1}}></ScrollView>
				<Text>特惠购票</Text>
			</View>
		);
	}
}

export default MovieDetails;