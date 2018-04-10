import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { View as Index } from '../index/'; // 在index文件夹下有index.js
import { View as Movie } from '../movie/';
import { View as CinemaList } from '../cinemalist/';
import { View as Perform } from '../perform/';
import { View as Mine } from '../mine/';


class Home extends Component {
	static navigationOptions = {
		headerStyle: {
			height: 0,
		}
	}
	render() {
		const homeIcon = require( '../../resource/images/home.png' );
		const home_actIcon = require( '../../resource/images/home_act.png' );
		const movieIcon = require( '../../resource/images/movie.png' );
		const movie_actIcon = require( '../../resource/images/movie_act.png' );
		const cinameIcon = require( '../../resource/images/ciname.png' );
		const ciname_actIcon = require( '../../resource/images/ciname_act.png' );
		const performIcon = require( '../../resource/images/perform.png' );
		const perform_actIcon = require( '../../resource/images/perform_act.png' );
		const mineIcon = require( '../../resource/images/mine.png' );
		const mine_actIcon = require( '../../resource/images/mine_act.png' );
		return (
			<View style={{flex:1}}>
			<TabNavigator>
				<TabNavigator.Item
				  selected={this.props.selectedTab === 'index'}
				  renderIcon={() => <Image source={ homeIcon } />}
				  renderSelectedIcon={() => <Image source={ home_actIcon } />}
				  onPress={() => this.props.changeSelectTab('index')}
				  badgeText=""
				  title="首页"
				  selectedTitleStyle={{color:"#d24645"}}
				>
					<Index navigate={this.props.navigation.navigate}/>
				</TabNavigator.Item>
				<TabNavigator.Item
				  selected={this.props.selectedTab === 'movie'}
				  renderIcon={() => <Image source={ movieIcon } />}
				  renderSelectedIcon={() => <Image source={ movie_actIcon } />}
				  onPress={() => this.props.changeSelectTab('movie')}
				  title="电影"
				  selectedTitleStyle={{color:"#d24645"}}
				>
					<Movie navigate={this.props.navigation.navigate}/>
				</TabNavigator.Item>
				<TabNavigator.Item
				  selected={this.props.selectedTab === 'cinema'}
				  renderIcon={() => <Image source={ cinameIcon } />}
				  renderSelectedIcon={() => <Image source={ ciname_actIcon } />}
				  onPress={() => this.props.changeSelectTab('cinema')}
				  title="影院"
				  selectedTitleStyle={{color:"#d24645"}}
				>
					<CinemaList />
				</TabNavigator.Item>
				<TabNavigator.Item
				  selected={this.props.selectedTab === 'perform'}
				  renderIcon={() => <Image source={ performIcon } />}
				  renderSelectedIcon={() => <Image source={ perform_actIcon } />}
				  onPress={() => this.props.changeSelectTab('perform')}
				  title="演出"
				  selectedTitleStyle={{color:"#d24645"}}
				>
					<Perform />
				</TabNavigator.Item>
				<TabNavigator.Item
				  selected={this.props.selectedTab === 'mine'}
				  renderIcon={() => <Image source={ mineIcon } />}
				  renderSelectedIcon={() => <Image source={ mine_actIcon } />}
				  onPress={() => this.props.changeSelectTab('mine')}
				  title="我的"
				  selectedTitleStyle={{color:"#d24645"}}
				>
					<Mine />
				</TabNavigator.Item>
			</TabNavigator>
			</View>
		);
	}
};

export default Home;
