import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {flex:1,backgroundColor:'#fff'},
	header: {height:50,backgroundColor:'#dd403b',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:10,paddingRight:10},
	addr: {flexDirection:'row',alignItems:'center'},
	headerTitle: {fontSize:16,color:'#fff'},
	headerSearch: {flexDirection:'row',alignItems:'center'},
	content: {flex:1},
	contentMenu: {height:40,borderBottomWidth:1,borderBottomColor:'#d8d8d8',flexDirection:'row',alignItems:'center'},
	subMenu: {width:'25%',height:30,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#d8d8d8'},
	subMenuNoRightBorder: {width:'25%',height:30,flexDirection:'row',alignItems:'center',justifyContent:'center'},
	subMenuText: {flex:1,textAlign:'center',fontSize:12,color:'#666'},
	subMenuImage: {width:16,height:16,marginRight:5},
	flatlist: {flex:1,paddingLeft:10,paddingRight:10},
	cinemaWrap: {height:150,borderBottomWidth:1,borderBottomColor:'#d8d8d8',justifyContent:'space-around',paddingTop:10,paddingBottom:10},
	cinemaName: {flexDirection:'row'},
	actBox: {flexDirection:'row'},
	quit: {fontSize:10,borderWidth:1,borderRadius:3,textAlign:'center',marginRight:5,paddingLeft:3,paddingRight:3,paddingBottom:1,paddingTop:2},
	endorse: {color:'#589caf',fontSize:10,borderColor:'#589caf',borderWidth:1,borderRadius:3,width:30,height:16,textAlign:'center',lineHeight:16,marginRight:5},
	snack: {color:'#fe9900',fontSize:10,borderColor:'#fe9900',borderWidth:1,borderRadius:3,width:30,height:16,textAlign:'center',lineHeight:16,marginRight:5},
	discountCard: {color:'#fe9900',fontSize:10,borderColor:'#fe9900',borderWidth:1,borderRadius:3,width:40,height:16,textAlign:'center',lineHeight:16},
	incentiveBox: {flexDirection:'row', alignItems:'center'},
	incentive: {color:'#fff',fontSize:10,backgroundColor:'#fe9900',borderRadius:3,width:16,height:16,textAlign:'center',lineHeight:16,marginRight:5},
	incentiveCont: {color:'#999'},
	cardBox: {flexDirection:'row', alignItems:'center'},
	card: {color:'#fff',fontSize:10,backgroundColor:'#a97ae0',borderRadius:3,width:16,height:16,textAlign:'center',lineHeight:16,marginRight:5},
	cardCont: {color:'#999'},
	sellPrice: {color:'#f00',fontWeight:'bold'}
});

export default styles;