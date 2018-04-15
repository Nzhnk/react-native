import React, { Component } from 'react';
import { View, Text, TextInput  } from 'react-native';

class Search extends Component {
	render() {
		return (
			<View>
				<View style={{height:68,backgroundColor:'#f00'}}>
					<TextInput style={{width:'90%',borderBottomColor:'transparent',padding:0}}underlineColorAndroid="transparent"/>
				</View>
			</View>
		);
	}
}

export default Search;