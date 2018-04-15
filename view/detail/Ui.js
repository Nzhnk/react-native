import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

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
		const { width } = Dimensions.get( 'window' );
		return (
			<View style={{flex:1}}>
				<ScrollView style={{flex:1}}>
					<LinearGradient
					  colors={['#131a24', '#353a40','#534e52', '#464449', '#373238', '#0e1319']}>
						<View style={{height:220}}>
							<View style={{flexDirection:'row',marginLeft:width*0.0361,marginTop:3,marginBottom: 24}}>
								<Image style={{width:width*0.2435,height:width*0.2435*1.3878,borderRadius:3,borderColor:'#636268',borderWidth:1}} source={require('../../resource/images/hotMovie.png')}/>
								<View style={{marginLeft:10,justifyContent:'space-around'}}>
									<Text style={{color:'#fff',fontSize:19}}>寻找罗麦</Text>
									<Text style={{fontSize:12,color:'#b4b4b4'}}>Looking for Rohmer</Text>
									<Text style={{fontSize:12,height:18,lineHeight:18,color:'#b4b4b4'}}>剧情 爱情</Text>
									<Text style={{fontSize:12,height:18,lineHeight:18,color:'#b4b4b4'}}>中国大陆 法国 / 83分钟</Text>
									<Text style={{fontSize:12,height:18,lineHeight:18,color:'#b4b4b4'}}>2018-04-13大陆上映</Text>
									<View style={{flexDirection:'row'}}>
										<Text style={{fontSize:14,color:'#faae00'}}>36317</Text><Text style={{fontSize:14,color:'#b4b4b4'}}>人想看</Text>
									</View>
								</View>
							</View>
							<View style={{alignItems:'center'}}>
								<View style={{flexDirection:'row',width:width*0.93,justifyContent:'space-between'}}>
									<View style={{width:width*0.4528,height:width*0.4528*0.2147,backgroundColor:'#2c2f36', alignItems:'center', justifyContent:'center',flexDirection:'row',borderRadius:3}}>
										<Image style={{width:20,height:20,marginRight:5}} source={require('../../resource/images/want_to_see_white.png')} />
										<Text style={{fontSize:14,color:'#fff'}}>想看</Text>
									</View>
									<View style={{width:width*0.4528,height:width*0.4528*0.2147,backgroundColor:'#2c2f36', alignItems:'center', justifyContent:'center',flexDirection:'row',borderRadius:3}}>
										<Image style={{width:20,height:20,marginRight:5}} source={require('../../resource/images/seen_it_white.png')} />
										<Text style={{fontSize:14,color:'#fff'}}>看过</Text>
									</View>
								</View>
							</View>
						</View>
					</LinearGradient>
					<View style={{width,height:width*0.26,backgroundColor:'#fff',paddingLeft:10,paddingRight:10,paddingTop:10,alignItems:'center'}}>
						<Text style={{width:'100%',lineHeight:25, height:70, fontSize:14}}>牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊牛志昊</Text>
						<Image style={{width:16,height:16}} source={require('../../resource/images/down_arrow_gray.png')}/>
					</View>
					<View style={{marginTop:10,height:width*0.518,backgroundColor:'#fff'}}>
						<View style={{flexDirection:'row',paddingLeft:10,paddingRight:15,height:45,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{fontSize:15,fontWeight:'bold'}}>演职人员</Text>
							<View style={{flexDirection:'row',justifyContent:'center',height:45,alignItems:'center'}}>
								<Text>全部</Text>
								<Image source={require('../../resource/images/right_arrow.png')} style={{width:16,height:16}} />
							</View>
						</View>
						<ScrollView style={{paddingLeft:10}}>
							<View style={{width:width*0.1954, marginRight:5}}>
								<Image source={require('../../resource/images/hotMovie.png')} style={{width:'100%',height:width*0.1954*1.3933}} />
								<Text style={{width:'100%',textAlign:'center',fontSize:14,color:'#333',marginTop:10,marginTop:5}}>牛志昊</Text>
								<Text style={{width:'100%',textAlign:'center',fontSize:12,color:'#a0a0a0'}}>导演</Text>
							</View>
						</ScrollView>
					</View>
					<View style={{marginTop:10,height:width*0.386,backgroundColor:'#fff'}}>
						<View style={{flexDirection:'row',paddingLeft:10,paddingRight:15,height:45,justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{fontSize:15,fontWeight:'bold'}}>视频快讯</Text>
							<View style={{flexDirection:'row',justifyContent:'center',height:45,alignItems:'center'}}>
								<Text>全部</Text>
								<Image source={require('../../resource/images/right_arrow.png')} style={{width:16,height:16}} />
							</View>
						</View>
						<ScrollView style={{paddingLeft:10}}>
							<View style={{width:width*0.341, marginRight:5}}>
								<Image source={require('../../resource/images/hotMovie.png')} style={{width:'100%',height:width*0.341*0.666}} />
							</View>
						</ScrollView>
					</View>
					<View style={{marginTop:10,backgroundColor:'#fff',paddingLeft:10,paddingRight:15,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
						<View style={{flexDirection:'row',justifyContent:'space-between',height:45,alignItems:'center'}}>
							<Text style={{fontSize:14,fontWeight:'bold'}}>短评</Text>
							<Text style={{fontSize:14, color:'#fb5350'}}>+ 写短评</Text>
						</View>
						<View style={{flexDirection:'row',flexWrap:'wrap'}}>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>全部</Text>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>6666666</Text>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>好评342234</Text>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>差评2312</Text>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>其他1234</Text>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>全部</Text>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>全部</Text>
							<Text style={{fontSize:14,borderWidth:1,borderColor:'#ccc',borderRadius:14,paddingLeft:10,paddingRight:8,height:28,lineHeight:28,marginRight:15,marginBottom:10}}>全部</Text>
						</View>
					</View>
					<View style={{flexDirection:'row',backgroundColor:'#fff'}}>
						<Image style={{width:width*0.0787,height:width*0.0787,borderRadius:width*0.0787,marginLeft:20,marginRight:10,marginTop:10}} source={require('../../resource/images/hotMovie.png')}/>
						<View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#e5e5e5'}}>
							<View style={{flexDirection:'row',marginTop:10,height:18,alignItems:'center'}}>
								<Text>牛志昊</Text>
								<Text style={{borderColor:'#7fb3da',borderWidth:1,fontSize:12,height:16,lineHeight:16,paddingLeft:4,paddingRight:3,borderRadius:2,color:'#7fb3da',marginLeft:5}}>购票</Text>
							</View>
							<View>
								<Text></Text>
								<Text>评分： 10</Text>
								<Text>都是评论，全是评论，一大堆评论！</Text>
							</View>
							<View style={{flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center',marginBottom:15}}>
								<Text style={{color:'#999'}}>1天前</Text>
								<View style={{flexDirection:'row'}}>
									<View style={{borderColor:'#ccc',borderWidth:1,flexDirection:'row',borderRadius:14,height:28,alignItems:'center',paddingRight:8,paddingLeft:8,marginRight:10}}>
										<Image style={{width:16,height:16}} source={require('../../resource/images/give_the_thumbs_up.png')}/>
										<Text>123</Text>
									</View>
									<View style={{borderColor:'#ccc',borderWidth:1,flexDirection:'row',borderRadius:14,height:28,alignItems:'center',paddingRight:8,paddingLeft:8,marginRight:10}}>
										<Image style={{width:16,height:16}} source={require('../../resource/images/comment_custom.png')}/>
										<Text>123</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style={{flexDirection:'row',backgroundColor:'#fff'}}>
						<Image style={{width:width*0.0787,height:width*0.0787,borderRadius:width*0.0787,marginLeft:20,marginRight:10,marginTop:10}} source={require('../../resource/images/hotMovie.png')}/>
						<View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#e5e5e5'}}>
							<View style={{flexDirection:'row',marginTop:10,height:18,alignItems:'center'}}>
								<Text>牛志昊</Text>
								<Text style={{borderColor:'#7fb3da',borderWidth:1,fontSize:12,height:16,lineHeight:16,paddingLeft:4,paddingRight:3,borderRadius:2,color:'#7fb3da',marginLeft:5}}>购票</Text>
							</View>
							<View>
								<Text></Text>
								<Text>评分： 10</Text>
								<Text>都是评论，全是评论，一大堆评论！</Text>
							</View>
							<View style={{flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center',marginBottom:15}}>
								<Text style={{color:'#999'}}>1天前</Text>
								<View style={{flexDirection:'row'}}>
									<View style={{borderColor:'#ccc',borderWidth:1,flexDirection:'row',borderRadius:14,height:28,alignItems:'center',paddingRight:8,paddingLeft:8,marginRight:10}}>
										<Image style={{width:16,height:16}} source={require('../../resource/images/give_the_thumbs_up.png')}/>
										<Text>123</Text>
									</View>
									<View style={{borderColor:'#ccc',borderWidth:1,flexDirection:'row',borderRadius:14,height:28,alignItems:'center',paddingRight:8,paddingLeft:8,marginRight:10}}>
										<Image style={{width:16,height:16}} source={require('../../resource/images/comment_custom.png')}/>
										<Text>123</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style={{flexDirection:'row',backgroundColor:'#fff'}}>
						<Image style={{width:width*0.0787,height:width*0.0787,borderRadius:width*0.0787,marginLeft:20,marginRight:10,marginTop:10}} source={require('../../resource/images/hotMovie.png')}/>
						<View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#e5e5e5'}}>
							<View style={{flexDirection:'row',marginTop:10,height:18,alignItems:'center'}}>
								<Text>牛志昊</Text>
								<Text style={{borderColor:'#7fb3da',borderWidth:1,fontSize:12,height:16,lineHeight:16,paddingLeft:4,paddingRight:3,borderRadius:2,color:'#7fb3da',marginLeft:5}}>购票</Text>
							</View>
							<View>
								<Text></Text>
								<Text>评分： 10</Text>
								<Text>都是评论，全是评论，一大堆评论！</Text>
							</View>
							<View style={{flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center',marginBottom:15}}>
								<Text style={{color:'#999'}}>1天前</Text>
								<View style={{flexDirection:'row'}}>
									<View style={{borderColor:'#ccc',borderWidth:1,flexDirection:'row',borderRadius:14,height:28,alignItems:'center',paddingRight:8,paddingLeft:8,marginRight:10}}>
										<Image style={{width:16,height:16}} source={require('../../resource/images/give_the_thumbs_up.png')}/>
										<Text>123</Text>
									</View>
									<View style={{borderColor:'#ccc',borderWidth:1,flexDirection:'row',borderRadius:14,height:28,alignItems:'center',paddingRight:8,paddingLeft:8,marginRight:10}}>
										<Image style={{width:16,height:16}} source={require('../../resource/images/comment_custom.png')}/>
										<Text>123</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
				<Text style={{height:50,lineHeight:50,textAlign:'center',backgroundColor:'#dd403b',fontSize:16,color:'#fff',borderTopWidth:1,borderTopColor:'#b6665f'}}>特惠购票</Text>
			</View>
		);
	}
}

export default MovieDetails;