import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView, StatusBar } from 'react-native';
import styles from '../../styles/cinemalist.js';

class CinemaList extends Component {
	componentWillMount(){
		this.props.getCinemaListData();
	}
	render() {
		const _SH = StatusBar.currentHeight;
		return (
			<View style={styles.container}>
				<View style={{height:_SH, backgroundColor:'#f00'}}></View>
				<View style={styles.header}>
					<View style={styles.addr}>
						<Text style={{color:'#fff'}}>北京</Text><Image style={{width:16,height:16}} source={require('../../resource/images/down_arrow.png')}/>
					</View>
					<Text style={styles.headerTitle}>影院</Text>
					<View style={styles.headerSearch}>
						<Image style={{width:16,height:16}} source={require('../../resource/images/search_white.png')}/>
					</View>
				</View>
				<View style={styles.content}>
					<View style={styles.contentMenu}>
						<View style={styles.subMenu}>
							<Text style={styles.subMenuText}>区域</Text>
							<Image style={styles.subMenuImage} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
						<View style={styles.subMenu}>
							<Text style={styles.subMenuText}>离我最近</Text>
							<Image style={styles.subMenuImage} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
						<View style={styles.subMenu}>
							<Text style={styles.subMenuText}>品牌</Text>
							<Image style={styles.subMenuImage} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
						<View style={styles.subMenuNoRightBorder}>
							<Text style={styles.subMenuText}>特效/服务</Text>
							<Image style={styles.subMenuImage} source={require( '../../resource/images/full_down_arrow.png' )}/>
						</View>
					</View>
					<FlatList style={styles.flatlist}
					  data={this.props.cinemalist}
					  keyExtractor={(item, index) => index.toString()}
					  renderItem={({item}) => (
				  		<View style={styles.cinemaWrap}>
							<View style={styles.cinemaName}>
								<Text>{item.nm}</Text>
								<Text style={styles.sellPrice}> {item.sellPrice}</Text>
								<Text>元起</Text>
							</View>
							<Text numberOfLines={1} ellipsizeMode='tail'>{item.addr}</Text>
							<View style={styles.actBox}>
								<FlatList
								  horizontal={true}
								  data={item.labels}
								  keyExtractor={(i:item, index) => index.toString()}
								  renderItem={({item})=><Text style={[{color:item.color,borderColor:item.color}, styles.quit]}>{item.name}</Text>}
								/>
							</View>
							<View style={styles.incentiveBox}>
								<Text style={styles.incentive}>惠</Text>
								<Text style={styles.incentiveCont}>{item.promotion.platformActivityTag}</Text>
							</View>
							{
								(()=>{
									if( item.promotion.cardPromotionTag ){
										return (
											<View style={styles.cardBox}>
												<Text style={styles.card}>卡</Text>
												<Text style={styles.cardCont}>
													{item.promotion.cardPromotionTag}
												</Text>
											</View>
										);
									}
								})()
							}
						</View>
					  )}
					/>
				</View>
			</View>
		);
	}
}

export default CinemaList;