import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, Image, TouchableWithoutFeedback,StatusBar } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from '../../styles/movielist.js';

class Movie extends Component {
	componentWillMount(){
		this.props.getHotMovieData();
	}
	render() {
		const { width } = Dimensions.get( 'window' );
		const underlineWidth = width * 0.5;
		const _SH = StatusBar.currentHeight;
		return (
			<View style={styles.container}>
				<View style={{height:_SH, backgroundColor:'#f00'}}></View>
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
					  data={this.props.hotMovieList.hot}
					  keyExtractor={(item, index) => index.toString()}
					  renderItem={({item}) => (
						<View style={styles.hot} key={item.id}>
							<TouchableWithoutFeedback onPress={() => {this.props.navigate( 'Detail' )}}>
								<Image style={styles.hotImage} source={{uri:item.img}}/>
							</TouchableWithoutFeedback>
							<View style={styles.hotInfo}>
								<View style={{flex:1}}>
									<Text style={styles.hotName}>{item.nm}</Text>
									<View style={styles.hotGrade}>
										<Text style={styles.hotScore}>猫眼评分</Text>
										<Text style={styles.hotSc}> {item.sc}</Text>
									</View>
									<Text style={styles.hotStart} numberOfLines={1} ellipsizeMode='tail'>主演：{item.star}</Text>
									<Text style={styles.hotShowInfo}>{item.showInfo}</Text>
								</View>
								<View style={styles.hotTicketBox}>
									<Text style={styles.hotTicket}>购票</Text>
								</View>
							</View>
						</View>
					  )}
					/>
					<FlatList
					  tabLabel="即将上映"
					  data={this.props.hotMovieList.coming}
					  keyExtractor={(item, index) => index.toString()}
					  renderItem={({item}) => (
						<View style={{height:125,flexDirection:'row',backgroundColor:'#fff',alignItems:'center'}} key={item.id}>
							<Image style={{height:93,width:65,borderRadius:3,marginLeft:20,marginRight:11}} source={{uri:item.img}}/>
							<View style={{flex:1,height:'100%',borderBottomWidth:1,borderBottomColor:'#e8e8e8',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
								<View style={{flex:1}}>
									<Text style={{fontSize:16,fontWeight:'bold'}}>{item.nm}</Text>
									<View style={{flexDirection:'row',marginTop:3,marginBottom:3}}><Text style={{fontSize:14,color:'#555'}}>{item.wish}人想看</Text></View>
									<Text style={{fontSize:14,color:'#555',lineHeight:24}} numberOfLines={1} ellipsizeMode='tail'>主演：{item.star}</Text>
									<Text style={{fontSize:14,color:'#555',lineHeight:24}}>{item.showInfo}</Text>
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