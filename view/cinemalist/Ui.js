import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';

class CinemaList extends Component {
	componentWillMount(){
		this.props.getCinemaListData();
	}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff'}}>
				<View style={{height:50,backgroundColor:'#dd403b',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:10,paddingRight:10}}>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Text style={{color:'#fff'}}>北京</Text><Image style={{width:16,height:16}} source={require('../../resource/images/down_arrow.png')}/>
					</View>
					<Text style={{fontSize:16,color:'#fff'}}>影院</Text>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Image style={{width:16,height:16}} source={require('../../resource/images/search_white.png')}/>
					</View>
				</View>
				<View style={{flex:1}}>
					<View style={{height:40,borderBottomWidth:1,borderBottomColor:'#d8d8d8',flexDirection:'row',alignItems:'center'}}>
						<View style={{width:'25%',height:30,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#d8d8d8'}}>
							<Text style={{flex:1,textAlign:'center',fontSize:12,color:'#666'}}>区域</Text>
							<Image style={{width:16,height:16,marginRight:5}} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
						<View style={{width:'25%',height:30,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#d8d8d8'}}>
							<Text style={{flex:1,textAlign:'center',fontSize:12,color:'#666'}}>离我最近</Text>
							<Image style={{width:16,height:16,marginRight:5}} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
						<View style={{width:'25%',height:30,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#d8d8d8'}}>
							<Text style={{flex:1,textAlign:'center',fontSize:12,color:'#666'}}>品牌</Text>
							<Image style={{width:16,height:16,marginRight:5}} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
						<View style={{width:'25%',height:30,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
							<Text style={{flex:1,textAlign:'center',fontSize:12,color:'#666'}}>特效/服务</Text>
							<Image style={{width:16,height:16,marginRight:5}} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
					</View>
					<FlatList style={{flex:1,paddingLeft:10,paddingRight:10}}
					  data={this.props.cinemalist.chaoyang}
					  keyExtractor={(item, index) => index}
					  renderItem={({item}) => (
				  		<View style={{height:150,borderBottomWidth:1,borderBottomColor:'#d8d8d8',justifyContent:'space-around',paddingTop:10,paddingBottom:10}}>
						<View style={{flexDirection:'row'}}>
							<Text>{item.nm}</Text>
							<Text> {item.sellPrice}</Text>
							<Text>元起</Text>
						</View>
						<Text>{item.addr}</Text>
						<View style={{flexDirection:'row'}}>
							<Text style={{color:'#589caf',fontSize:10,borderColor:'#589caf',borderWidth:1,borderRadius:3,width:16,height:16,textAlign:'center',lineHeight:16,marginRight:5}}>退</Text>
							<Text style={{color:'#589caf',fontSize:10,borderColor:'#589caf',borderWidth:1,borderRadius:3,width:30,height:16,textAlign:'center',lineHeight:16,marginRight:5}}>改签</Text>
							<Text style={{color:'#fe9900',fontSize:10,borderColor:'#fe9900',borderWidth:1,borderRadius:3,width:30,height:16,textAlign:'center',lineHeight:16,marginRight:5}}>小吃</Text>
							<Text style={{color:'#fe9900',fontSize:10,borderColor:'#fe9900',borderWidth:1,borderRadius:3,width:40,height:16,textAlign:'center',lineHeight:16}}>折扣卡</Text>
						</View>
						<View style={{flexDirection:'row', alignItems:'center'}}>
							<Text style={{color:'#fff',fontSize:10,backgroundColor:'#fe9900',borderRadius:3,width:16,height:16,textAlign:'center',lineHeight:16,marginRight:5}}>惠</Text>
							<Text style={{color:'#999'}}>{item.brd}</Text>
						</View>
						<View style={{flexDirection:'row', alignItems:'center'}}>
							<Text style={{color:'#fff',fontSize:10,backgroundColor:'#a97ae0',borderRadius:3,width:16,height:16,textAlign:'center',lineHeight:16,marginRight:5}}>卡</Text>
							<Text style={{color:'#999'}}>{item.dis || item.area}</Text>
						</View>
					</View>
					  )}
					/>

				</View>
			</View>
		);
	}
}

export default CinemaList;