import React, { Component } from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import TabNavigator from 'react-native-tab-navigator';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import styles from '../../styles/Index.js';

import { View as Film } from '../indexfilm/';
import { View as Teleplay } from '../indexTeleplay/';
import { View as Variety } from '../indexVariety/';
import { View as Book } from '../indexBook/';

class Index extends Component {
	render() {
		const { width } = Dimensions.get( 'window' );
		const underlineWidth = width * 0.25;
		return (
			<View style={ styles.container }>
				<View style={ styles.topSearchWrap }>
					<View style={ styles.topAddress }><Text style={{color: '#fff'}}>北京</Text><Image style={{width:12,height:12}} source={require('../../resource/images/down_arrow.png')}/></View>
					<View style={ styles.topSearch }><Image style={{width:24,height:24}} source={require('../../resource/images/search.png')}/><Text style={{color: '#999'}}>找影视剧、影人、影院、演出、图书</Text></View>
				</View>
				<View style={[ { width: width, height: width * 0.398 }, styles.swiperWrap ] }>
					<Swiper
					  height={ width * 0.398 }
                	  loop={true}
					  horizontal={true}
					  paginationStyle={{bottom: 1}}
					  autoplay={true}
					  autoplayTimeout={3}
					  dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 10, height: 2,borderRadius: 1, marginLeft: 9, marginRight: 9, marginTop: 3, marginBottom: 3,}}/>}
					  activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 2, borderRadius: 1, marginLeft: 9, marginRight: 9, marginTop: 3, marginBottom: 3,}}/>
					  }
					  showsButtons={false}
					>
						<Image
						  source={ require('../../resource/images/hotMovie.png') }
						  style={ styles.img }
						/>
						<Image
						  source={ require('../../resource/images/laterForUs.png') }
						  style={ styles.img }
						/>
						<Image
						  source={ require('../../resource/images/weirdo.png') }
						  style={ styles.img }
						/>
						<Image
						  source={ require('../../resource/images/startline.png') }
						  style={ styles.img }
						/>
						<Image
						  source={ require('../../resource/images/queen.png') }
						  style={ styles.img }
						/>
						<Image
						  source={ require('../../resource/images/maze.png') }
						  style={ styles.img }
						/>
						<Image
						  source={ require('../../resource/images/maoyancinema.png') }
						  style={ styles.img }
						/>
					</Swiper>
				</View>
				<ScrollableTabView
				  tabBarActiveTextColor='#f03d38'
				  tabBarUnderlineStyle={{
				  	width: underlineWidth * 0.5,
				  	borderRadius: 3,
				  	backgroundColor: '#f03d38',
				  	marginLeft: underlineWidth * 0.25
				  }}
				  tabBarTextStyle={{
				  	fontSize: 12
				  }}
				>
					<Film tabLabel='电影' navigate={this.props.navigate}  />
					<Teleplay tabLabel='电视剧'/>
					<Variety tabLabel='综艺'/>
					<Book tabLabel='书籍'/>
				</ScrollableTabView>
			</View>
		);
	}
}

export default Index;