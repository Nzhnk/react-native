import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import Swiper from 'react-native-swiper';

class CommonCmpt extends Component {
	render() {
		return (
			<ScrollView style={{
			  backgroundColor: '#f5f5f5'
			}}>
				<View style={{marginTop:10}}>
					<View style={{
					  backgroundColor: '#fff',
					  paddingLeft: 10,
					  paddingRight: 15,
					  flexDirection: 'row',
					  justifyContent: 'space-between',
					  height: 40,
					  alignItems: 'center'
					}}>
						<View><Text style={{fontWeight:'bold',fontSize: 14}}>正在热映</Text></View>
						<View style={{
						  flexDirection: 'row',
						  alignItems: 'center'
						}}>
							<Text style={{color:'#9b9b9b',fontSize: 12}}>全部(48)</Text><Image style={{width:16,height:16}} source={require('../../resource/images/right_arrow.png')}/>
						</View>
					</View>
					<View style={{
					  width:'100%',
					  backgroundColor: '#fff'
					}}>
						<ScrollView
						  horizontal={true}
						  showsHorizontalScrollIndicator={false}
						>
							<TouchableWithoutFeedback
							  onPress={() => {this.props.navigate( 'Detail' )}}
							>
								<View style={{marginLeft: 15, marginRight:6}}>
									<Image style={{width:100,height:140,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
									<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:12,marginBottom:12,width:100}} numberOfLines={1} ellipsizeMode='tail'>环太平洋:雷霆再起</Text>
									<View style={{backgroundColor:'#f03d38',height: 25,width:50,borderRadius:12,alignItems:'center',justifyContent:'center',marginBottom:17}}>
										<Text style={{fontWeight:'bold',color:'#fff',fontSize:11}}>购票</Text>
									</View>
								</View>
							</TouchableWithoutFeedback>
							<View style={{marginLeft: 6, marginRight:6}}>
								<Image style={{width:100,height:140,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
							</View>
							<View style={{marginLeft: 6, marginRight:6}}>
								<Image style={{width:100,height:140,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
							</View>
							<View style={{marginLeft: 6, marginRight:6}}>
								<Image style={{width:100,height:140,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
							</View>
							<View style={{marginLeft: 6, marginRight:6}}>
								<Image style={{width:100,height:140,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
							</View>
						</ScrollView>
					</View>
				</View>
				<View style={{marginTop:10}}>
					<View style={{
					  backgroundColor: '#fff',
					  paddingLeft: 10,
					  paddingRight: 15,
					  flexDirection: 'row',
					  justifyContent: 'space-between',
					  height: 40,
					  alignItems: 'center'
					}}>
						<View><Text style={{fontWeight:'bold',fontSize: 16}}>正在热映</Text></View>
						<View style={{
						  flexDirection: 'row',
						  alignItems: 'center'
						}}>
							<Text style={{color:'#9b9b9b',fontSize: 16}}>全部(48)</Text><Image style={{width:16,height:16}} source={require('../../resource/images/right_arrow.png')}/>
						</View>
					</View>
					<View style={{
					  width:'100%',
					  backgroundColor: '#fff'
					}}>
						<View style={{flexDirection:'row',flexWrap:'wrap'}}>
							<View style={{marginLeft: 16, marginRight:16}}>
								<Image style={{width:100,height:135,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
								<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:8,marginBottom:8}}>头号玩家</Text>
							</View>
							<View style={{marginLeft: 16, marginRight:16}}>
								<Image style={{width:100,height:135,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
								<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:8,marginBottom:8}}></Text>
							</View>
							<View style={{marginLeft: 16, marginRight:16}}>
								<Image style={{width:100,height:135,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
								<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:8,marginBottom:8}}></Text>
							</View>
							<View style={{marginLeft: 16, marginRight:16}}>
								<Image style={{width:100,height:135,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
								<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:8,marginBottom:8}}></Text>
							</View>
							<View style={{marginLeft: 16, marginRight:16}}>
								<Image style={{width:100,height:135,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
								<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:8,marginBottom:8}}></Text>
							</View>
							<View style={{marginLeft: 16, marginRight:16}}>
								<Image style={{width:100,height:135,borderRadius:2}} source={require('../../resource/images/hotMovie.png')}/>
								<Text style={{color:'#313131',fontWeight:'bold',fontSize:14,marginTop:8,marginBottom:8}}></Text>
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