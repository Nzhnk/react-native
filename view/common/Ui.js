import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableWithoutFeedback, Flatlist } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../styles/common.js';

class CommonCmpt extends Component {
	render() {
		const { width } = Dimensions.get( 'window' );
		const rightArrow = require( '../../resource/images/right_arrow.png' );
		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.hotPosi}>
					<View style={styles.hotFilm}>
						<View><Text style={styles.hotTitle}>正在热映</Text></View>
						<View style={styles.hotAll}>
							<Text style={styles.hotAllCont}
							onPress={() => {this.props.navigate( 'List' )}} >全部(48)</Text>
							<Image style={styles.hotImage} source={rightArrow}/>
						</View>
					</View>
					<View style={styles.hotFilmBox}>
						<ScrollView
						  horizontal={true}
						  showsHorizontalScrollIndicator={false}
						>
							<TouchableWithoutFeedback
							  onPress={() => {this.props.navigate( 'Detail' )}}
							>
								<View style={styles.hotFilmItem}>
									<Image style={{width:width*0.2435,height:width*0.2435*1.4,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
									<Text style={styles.hotFilmText} numberOfLines={1} ellipsizeMode='tail'>环太平洋:雷霆再起</Text>
									<View style={styles.hotFilmBuy}>
										<Text style={styles.hotFilmBuyCont}>购票</Text>
									</View>
								</View>
							</TouchableWithoutFeedback>
						</ScrollView>
					</View>
				</View>
				<View style={{marginTop:10}}>
					<View style={styles.hotFilm}>
						<View><Text style={styles.hotTitle}>即将上映</Text></View>
						<View style={styles.hotAll}>
							<Text style={styles.hotAllCont}>全部(48)</Text>
							<Image style={styles.hotImage} source={rightArrow}/>
						</View>
					</View>
					<View style={{
					  width:'100%',
					  backgroundColor: '#fff'
					}}>
						<View style={{flexDirection:'row',flexWrap:'wrap'}}>
							<View style={{marginLeft: 16, marginRight:16}}>
								<Image style={{width:width*0.2435,height:width*0.2435*1.4,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
								<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:8,marginBottom:8}}>头号玩家</Text>
							</View>
						</View>
						<View style={{flexDirection:'row',height:44,justifyContent:'center',alignItems:'center',borderTopWidth:1,borderTopColor:'#e5e5e5'}}>
							<Text style={{fontSize:14,color:'#f03d38'}}>查看全部</Text><Image style={{width:15.2,height:15.2}} source={require('../../resource/images/right_arrow_red.png')}/>
						</View>
					</View>
				</View>
				<View style={{paddingLeft:10,paddingRight:10,paddingTop:10,marginTop:10,backgroundColor:'#fff'}}>
					<View style={{borderBottomWidth:1,borderBottomColor:'#e5e5e5'}}>
						<Text style={{fontSize: 16,lineHeight:25}}>粉嫩嫩的小贱贱？ 《死侍2》曝特别预告，做个公益也这么骚气</Text>
						<View style={{flexDirection:'row',justifyContent:'space-between'}}>
							<Image style={{width:125,height:93,borderRadius:3}} source={require('../../resource/images/hotMovie.png')}/>
							<Image style={{width:125,height:93,borderRadius:3}} source={require('../../resource/images/hotMovie.png')}/>
							<Image style={{width:125,height:93,borderRadius:3}} source={require('../../resource/images/hotMovie.png')}/>
						</View>
						<View style={{flexDirection:'row',justifyContent:'space-between'}}>
							<Text>猫眼资讯 21分钟前</Text>
							<Text>评论人数</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	}
	changeTab(){
		alert('就是看一下')
	}
}

export default CommonCmpt;