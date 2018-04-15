import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StatusBar } from 'react-native';

class Mine extends Component {
	render() {
		const _SH = StatusBar.currentHeight;
		return (
			<View style={{flex:1}}>
				<View style={{height:_SH, backgroundColor:'#f00'}}></View>
				<ScrollView style={{flex:1,backgroundColor:'#f5f5f5'}}>
					<View style={{height:110,backgroundColor:'#dd403b',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
						<View style={{flexDirection:'row',height:110,alignItems:'center',paddingLeft:15}}>
							<Image style={{width:65,height:65}} source={require( '../../resource/images/head_image.png' )} />
							<Text style={{fontSize:16,color:'#fff',marginLeft:15}}>立即登录</Text>
						</View>
						<Image style={{width:20,height:20,marginRight:10}} source={require( '../../resource/images/right_arrow_white.png' )} />
					</View>
					<View style={{height:76,borderBottomWidth:1,borderBottomColor:'#e5e5e5',borderTopWidth:1,borderTopColor:'#e5e5e5',backgroundColor:'#fff',flexDirection:'row',alignItems:'center',marginBottom:15}}>
						<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around',borderRightWidth:1,borderRightColor:'#e5e5e5'}}>
							<Image style={{width:20,height:20}} source={require( '../../resource/images/want_to_see.png' )} />
							<Text style={{color:'#333',fontSize:12}}>想看</Text>
						</View>
						<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around',borderRightWidth:1,borderRightColor:'#e5e5e5'}}>
							<Image style={{width:20,height:20}} source={require( '../../resource/images/seen.png' )} />
							<Text style={{color:'#333',fontSize:12}}>看过</Text>
						</View>
						<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around',borderRightWidth:1,borderRightColor:'#e5e5e5'}}>
							<Image style={{width:20,height:20}} source={require( '../../resource/images/film_review.png' )} />
							<Text style={{color:'#333',fontSize:12}}>影评</Text>
						</View>
						<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around'}}>
							<Image style={{width:20,height:20}} source={require( '../../resource/images/topic.png' )} />
							<Text style={{color:'#333',fontSize:12}}>话题</Text>
						</View>
					</View>
					<View style={{backgroundColor:'#fff',height:110,borderBottomWidth:1,borderBottomColor:'#e5e5e5',borderTopWidth:1,borderTopColor:'#e5e5e5',marginBottom:15}}>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>我的订单</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Text style={{color:'#999',fontSize:12}}>全部</Text>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
						<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
							<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around'}}>
								<Image style={{width:20,height:20}} source={require( '../../resource/images/unspent.png' )} />
								<Text style={{color:'#333',fontSize:12}}>未消费</Text>
							</View>
							<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around'}}>
								<Image style={{width:20,height:20}} source={require( '../../resource/images/pending_payment.png' )} />
								<Text style={{color:'#333',fontSize:12}}>待付款</Text>
							</View>
							<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around'}}>
								<Image style={{width:20,height:20}} source={require( '../../resource/images/to_be_evaluated.png' )} />
								<Text style={{color:'#333',fontSize:12}}>待评价</Text>
							</View>
							<View style={{width:'25%',height:48,alignItems:'center',justifyContent:'space-around'}}>
								<Image style={{width:20,height:20}} source={require( '../../resource/images/refund.png' )} />
								<Text style={{color:'#333',fontSize:12}}>退款</Text>
							</View>
						</View>
					</View>
					<View style={{backgroundColor:'#fff',borderTopWidth:1,borderTopColor:'#e5e5e5',marginBottom:15}}>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>我的消息</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>我的收藏</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>我的中心</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>我的成就</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
					</View>
					<View style={{backgroundColor:'#fff',borderTopWidth:1,borderTopColor:'#e5e5e5',marginBottom:15}}>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>我的钱包</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>余额</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Text style={{color:'#999',fontSize:12}}>0.00元</Text>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>优惠券</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>商城</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
					</View>
					<View style={{backgroundColor:'#fff',borderTopWidth:1,borderTopColor:'#e5e5e5',marginBottom:45}}>
						<View style={{height:45,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:15,paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{color:'#222',fontSize:14}}>设置</Text>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )} />
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
};

export default Mine;