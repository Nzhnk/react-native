import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class MovieDetails extends Component {
	static navigationOptions = {
		title: '电影详情',
		headerStyle: {
		  backgroundColor: '#dd403b'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
		  fontWeight: 'normal',
		},
		headerRight: (<Image style={{width:16,height:16}} source={require('../../resource/images/right_arrow_red.png')}/>)
	};

	render() {
		return (
			<View>
				<Text>电影详情</Text>
			</View>
		);
	}
}

export default MovieDetails;