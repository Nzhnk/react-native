import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, FlatList, Image } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class Movie extends Component {

	render() {
		const { width } = Dimensions.get( 'window' );
		const underlineWidth = width * 0.5;
		return (
			<View style={{flex:1}}>
				<ScrollableTabView
				  tabBarStyle={{width:'50%'}}
				  tabBarBackgroundColor='#f03d38'
				  tabBarActiveTextColor='#f0b3b2'
				  tabBarUnderlineStyle={{
					  width: underlineWidth * 0.5,
					  borderRadius: 3,
					  backgroundColor: '#fff',
					  marginLeft: underlineWidth * 0.25
				  }}
				  tabBarTextStyle={{
					  fontSize: 12,
					  color:'#fff'
				  }}
				>
					<FlatList
					  tabLabel="正在热映"
					  data={[{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},]}
					  renderItem={({item}) => (
						<View style={{height:125,flexDirection:'row',backgroundColor:'#fff',alignItems:'center'}} key={item.key}>
							<Image style={{height:93,width:65,borderRadius:3,marginLeft:20,marginRight:11}} source={require('../../resource/images/hotMovie.png')}/>
							<View style={{flex:1,height:'100%',borderBottomWidth:1,borderBottomColor:'#e8e8e8',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
								<View style={{flex:1}}>
									<Text style={{fontSize:16,fontWeight:'bold'}}>头号玩家</Text>
									<View style={{flexDirection:'row',marginTop:3,marginBottom:3}}><Text style={{fontSize:14,color:'#555'}}>猫眼评分</Text><Text style={{fontSize:14,color:'#ffb400',fontWeight:'bold'}}> 9.1</Text></View>
									<Text style={{fontSize:14,color:'#555',lineHeight:24}} numberOfLines={1} ellipsizeMode='tail'>主演：牛志昊 牛志昊 牛志昊 牛志昊 牛志昊 牛志昊 牛志昊</Text>
									<Text style={{fontSize:14,color:'#555',lineHeight:24}}>今天198家电影院放映2968场</Text>
								</View>
								<View style={{marginLeft:30,marginRight:10}}>
									<Text style={{backgroundColor:'#f03d38',width:52,height:26,lineHeight:26,textAlign:'center',borderRadius:13,fontSize:12,color:'#fff'}}>购票</Text>
								</View>
							</View>
						</View>
					  )}
					/>
					<FlatList
					  tabLabel="即将上映"
					  data={[{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},]}
					  renderItem={({item}) => (
						<View style={{height:125,flexDirection:'row',backgroundColor:'#fff',alignItems:'center'}} key={item.key}>
							<Image style={{height:93,width:65,borderRadius:3,marginLeft:20,marginRight:11}} source={require('../../resource/images/hotMovie.png')}/>
							<View style={{flex:1,height:'100%',borderBottomWidth:1,borderBottomColor:'#e8e8e8',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
								<View style={{flex:1}}>
									<Text style={{fontSize:16,fontWeight:'bold'}}>头号玩家</Text>
									<View style={{flexDirection:'row',marginTop:3,marginBottom:3}}><Text style={{fontSize:14,color:'#555'}}>12345人想看</Text></View>
									<Text style={{fontSize:14,color:'#555',lineHeight:24}} numberOfLines={1} ellipsizeMode='tail'>主演：牛志昊 牛志昊 牛志昊 牛志昊 牛志昊 牛志昊 牛志昊</Text>
									<Text style={{fontSize:14,color:'#555',lineHeight:24}}>今天198家电影院放映2968场</Text>
								</View>
								<View style={{marginLeft:30,marginRight:10}}>
									<Text style={{backgroundColor:'#3c9ee5',width:52,height:26,lineHeight:26,textAlign:'center',borderRadius:13,fontSize:12,color:'#fff'}}>预售</Text>
								</View>
							</View>
						</View>
					  )}
					/>
				</ScrollableTabView>
			</View>
		);
	}
}

export default Movie;