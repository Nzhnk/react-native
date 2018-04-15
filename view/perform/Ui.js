import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, StatusBar } from 'react-native';

class Perform extends Component {
	render() {
		const { width } = Dimensions.get( 'window' );
		const _SH = StatusBar.currentHeight;
		return (
			<View style={{flex:1,backgroundColor:'#f5f5f5'}}>
				<View style={{height:_SH, backgroundColor:'#f00'}}></View>
				<View style={{height:50,backgroundColor:'#dd403b',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:10,paddingRight:10}}>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Text style={{color:'#fff'}}>北京</Text><Image style={{width:16,height:16}} source={require('../../resource/images/down_arrow.png')}/>
					</View>
					<Text style={{fontSize:16,color:'#fff'}}>演出</Text>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Image style={{width:16,height:16}} source={require('../../resource/images/search_white.png')}/>
					</View>
				</View>
				<ScrollView style={{flex:1}}>
					<View style={{flexDirection:'row',height:195,backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingLeft:12,paddingRight:12,flexWrap:'wrap',justifyContent:'space-between'}}>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
						<View style={{width:'20%',justifyContent:'center',alignItems:'center',marginBottom:15}}>
							<Image style={{width:48,height:48,marginTop:8,marginBottom:10}} source={require( '../../resource/images/concert.png' )} />
							<Text style={{fontSize:12,textAlign:'center'}}>演唱会</Text>
						</View>
					</View>
					<View style={{height:100,alignItems:'center',justifyContent:'center'}}>
						<Image style={{width:width * 0.9425}} source={require( '../../resource/images/go.png' )} />
					</View>
					<View style={{backgroundColor:'#fff',marginBottom:15}}>
						<Text style={{textAlign:'center',fontWeight:'bold',height:48,lineHeight:48,fontSize:16}}>- 发现精彩 -</Text>
						<View style={{paddingLeft:15,paddingRight:14}}>
							<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
								<Image style={{width: width*0.46,height:width*0.46*0.6,borderRadius:3}} source={require( '../../resource/images/hotMovie.png' )}/>
								<Image style={{width: width*0.46,height:width*0.46*0.6,borderRadius:3}} source={require( '../../resource/images/hotMovie.png' )}/>
							</View>
							<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
								<View style={{width:width*0.3,height:width*0.3*1.138,backgroundColor:'#f7f7f7',borderRadius:3,alignItems:'center',justifyContent:'center'}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>张碧晨</Text>
									<Text style={{width:width*0.14,height:width*0.14*0.3,color:'#f9a952',fontSize:12,borderWidth:1,borderColor:'#f9a952',lineHeight:width*0.14*0.3,textAlign:'center',borderRadius:3,marginBottom:18,marginTop:8}}>凉凉·极光</Text>
									<Image style={{width:width*0.14,height:width*0.14,borderRadius:width*0.14}} source={require( '../../resource/images/hotMovie.png' )}/>
								</View>
								<View style={{width:width*0.3,height:width*0.3*1.138,backgroundColor:'#f7f7f7',borderRadius:3,alignItems:'center',justifyContent:'center'}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>张碧晨</Text>
									<Text style={{width:width*0.14,height:width*0.14*0.3,color:'#f9a952',fontSize:12,borderWidth:1,borderColor:'#f9a952',lineHeight:width*0.14*0.3,textAlign:'center',borderRadius:3,marginBottom:18,marginTop:8}}>凉凉·极光</Text>
									<Image style={{width:width*0.14,height:width*0.14,borderRadius:width*0.14}} source={require( '../../resource/images/hotMovie.png' )}/>
								</View>
								<View style={{width:width*0.3,height:width*0.3*1.138,backgroundColor:'#f7f7f7',borderRadius:3,alignItems:'center',justifyContent:'center'}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>张碧晨</Text>
									<Text style={{width:width*0.14,height:width*0.14*0.3,color:'#f9a952',fontSize:12,borderWidth:1,borderColor:'#f9a952',lineHeight:width*0.14*0.3,textAlign:'center',borderRadius:3,marginBottom:18,marginTop:8}}>凉凉·极光</Text>
									<Image style={{width:width*0.14,height:width*0.14,borderRadius:width*0.14}} source={require( '../../resource/images/hotMovie.png' )}/>
								</View>
							</View>
						</View>
					</View>
					<View style={{backgroundColor:'#fff',marginBottom:15}}>
						<Text style={{textAlign:'center',fontWeight:'bold',height:48,lineHeight:48,fontSize:16}}>- 热门场馆 -</Text>
						<View style={{paddingLeft:15,paddingRight:14}}>
							<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
								<View style={{width:width*0.4546,height:width*0.4546*1.15,backgroundColor:'#f7f7f7',paddingLeft:10,paddingRight:10,paddingTop:10}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>北京地质礼堂剧场</Text>
									<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10,marginTop:5}}>
										<Text style={{fontSize:12,color:'#666'}}>更多3场在线演出</Text>
										<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )}/>
									</View>
									<View style={{flexDirection:'row',justifyContent:'space-between'}}>
										<View>
											<Image style={{width:width*0.19,height:width*0.19*1.42,borderRadius:3}} source={require( '../../resource/images/hotMovie.png' )}/>
											<Text style={{width:width*0.19,fontSize:12,color:'#666',marginTop:3}} numberOfLines={2} ellipsizeMode='tail'>标题标题标题标题标题标题标题</Text>
										</View>
										<View>
											<Image style={{width:width*0.19,height:width*0.19*1.42,borderRadius:3}} source={require( '../../resource/images/hotMovie.png' )}/>
											<Text style={{width:width*0.19,fontSize:12,color:'#666',marginTop:3}} numberOfLines={2} ellipsizeMode='tail'>标题标题标题标题标题标题标题</Text>
										</View>
									</View>
								</View>
								<View style={{width:width*0.4546,height:width*0.4546*1.15,backgroundColor:'#f7f7f7',paddingLeft:10,paddingRight:10,paddingTop:10}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>北京地质礼堂剧场</Text>
									<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10,marginTop:5}}>
										<Text style={{fontSize:12,color:'#666'}}>更多3场在线演出</Text>
										<Image style={{width:16,height:16}} source={require( '../../resource/images/right_arrow.png' )}/>
									</View>
									<View style={{flexDirection:'row',justifyContent:'space-between'}}>
										<View>
											<Image style={{width:width*0.19,height:width*0.19*1.42,borderRadius:3}} source={require( '../../resource/images/hotMovie.png' )}/>
											<Text style={{width:width*0.19,fontSize:12,color:'#666',marginTop:3}} numberOfLines={2} ellipsizeMode='tail'>标题标题标题标题标题标题标题</Text>
										</View>
										<View>
											<Image style={{width:width*0.19,height:width*0.19*1.42,borderRadius:3}} source={require( '../../resource/images/hotMovie.png' )}/>
											<Text style={{width:width*0.19,fontSize:12,color:'#666',marginTop:3}} numberOfLines={2} ellipsizeMode='tail'>标题标题标题标题标题标题标题</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style={{backgroundColor:'#fff'}}>
						<Text style={{textAlign:'center',fontWeight:'bold',height:48,lineHeight:48,fontSize:16}}>- 为你推荐 -</Text>
						<View style={{flexDirection:'row',height:45,borderBottomColor:'#e5e5e5',borderBottomWidth:1,borderTopColor:'#e5e5e5',borderTopWidth:1}}>
							<Text style={{width:'25%',height:45,textAlign:'center',lineHeight:45,color:'#f03d38'}}>当前热门</Text>
							<Text style={{width:'25%',height:45,textAlign:'center',lineHeight:45}}>最新上架</Text>
							<Text style={{width:'25%',height:45,textAlign:'center',lineHeight:45}}>折扣演出</Text>
							<Text style={{width:'25%',height:45,textAlign:'center',lineHeight:45}}>全部时间</Text>
						</View>
						<View>
							<View style={{height:125,flexDirection:'row',paddingLeft:15,alignItems:'center'}}>
								<Image style={{width:width*0.16,height:width*0.16*1.42,borderRadius:3,marginRight:10}} source={require( '../../resource/images/hotMovie.png' )}/>
								<View style={{height:width*0.16*1.42,justifyContent:'space-between'}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>[北京] 《星球奇境》宇宙特展</Text>
									<Text style={{fontSize:12,color:'#666'}}>2018-04-28 至 2018-06-18</Text>
									<Text style={{fontSize:12,color:'#666'}}>颐提港</Text>
									<View style={{flexDirection:'row',alignItems:'center'}}>
										<Text style={{fontSize:14,color:'#e5423d'}}>68-238元</Text>
										<Text style={{width:45,height:20,borderWidth:1,fontSize:12,textAlign:'center',lineHeight:20,color:'#fa9a08',borderColor:'#fa9a08',borderRadius:3,marginLeft:5}}>售票中</Text>
									</View>
								</View>
							</View>
							<View style={{height:125,flexDirection:'row',paddingLeft:15,alignItems:'center'}}>
								<Image style={{width:width*0.16,height:width*0.16*1.42,borderRadius:3,marginRight:10}} source={require( '../../resource/images/hotMovie.png' )}/>
								<View style={{height:width*0.16*1.42,justifyContent:'space-between'}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>[北京] 《星球奇境》宇宙特展</Text>
									<Text style={{fontSize:12,color:'#666'}}>2018-04-28 至 2018-06-18</Text>
									<Text style={{fontSize:12,color:'#666'}}>颐提港</Text>
									<View style={{flexDirection:'row',alignItems:'center'}}>
										<Text style={{fontSize:14,color:'#e5423d'}}>68-238元</Text>
										<Text style={{width:45,height:20,borderWidth:1,fontSize:12,textAlign:'center',lineHeight:20,color:'#fa9a08',borderColor:'#fa9a08',borderRadius:3,marginLeft:5}}>售票中</Text>
									</View>
								</View>
							</View>
							<View style={{height:125,flexDirection:'row',paddingLeft:15,alignItems:'center'}}>
								<Image style={{width:width*0.16,height:width*0.16*1.42,borderRadius:3,marginRight:10}} source={require( '../../resource/images/hotMovie.png' )}/>
								<View style={{height:width*0.16*1.42,justifyContent:'space-between'}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>[北京] 《星球奇境》宇宙特展</Text>
									<Text style={{fontSize:12,color:'#666'}}>2018-04-28 至 2018-06-18</Text>
									<Text style={{fontSize:12,color:'#666'}}>颐提港</Text>
									<View style={{flexDirection:'row',alignItems:'center'}}>
										<Text style={{fontSize:14,color:'#e5423d'}}>68-238元</Text>
										<Text style={{width:45,height:20,borderWidth:1,fontSize:12,textAlign:'center',lineHeight:20,color:'#fa9a08',borderColor:'#fa9a08',borderRadius:3,marginLeft:5}}>售票中</Text>
									</View>
								</View>
							</View>
							<View style={{height:125,flexDirection:'row',paddingLeft:15,alignItems:'center'}}>
								<Image style={{width:width*0.16,height:width*0.16*1.42,borderRadius:3,marginRight:10}} source={require( '../../resource/images/hotMovie.png' )}/>
								<View style={{height:width*0.16*1.42,justifyContent:'space-between'}}>
									<Text style={{fontSize:16,fontWeight:'900'}}>[北京] 《星球奇境》宇宙特展</Text>
									<Text style={{fontSize:12,color:'#666'}}>2018-04-28 至 2018-06-18</Text>
									<Text style={{fontSize:12,color:'#666'}}>颐提港</Text>
									<View style={{flexDirection:'row',alignItems:'center'}}>
										<Text style={{fontSize:14,color:'#e5423d'}}>68-238元</Text>
										<Text style={{width:45,height:20,borderWidth:1,fontSize:12,textAlign:'center',lineHeight:20,color:'#fa9a08',borderColor:'#fa9a08',borderRadius:3,marginLeft:5}}>售票中</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
};

export default Perform;