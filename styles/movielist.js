import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {flex:1},
	hot: {height:125,flexDirection:'row',backgroundColor:'#fff',alignItems:'center'},
	hotImage: {height:93,width:65,borderRadius:3,marginLeft:20,marginRight:11},
	hotInfo: {flex:1,height:'100%',borderBottomWidth:1,borderBottomColor:'#e8e8e8',flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
	hotName: {fontSize:16,fontWeight:'bold'},
	hotGrade: {flexDirection:'row',marginTop:3,marginBottom:3},
	hotScore: {fontSize:14,color:'#555'},
	hotSc: {fontSize:14,color:'#ffb400',fontWeight:'bold'},
	hotStart: {fontSize:14,color:'#555',lineHeight:24},
	hotShowInfo: {fontSize:14,color:'#555',lineHeight:24},
	hotTicketBox: {marginLeft:30,marginRight:10},
	hotTicket: {backgroundColor:'#f03d38',width:52,height:26,lineHeight:26,textAlign:'center',borderRadius:13,fontSize:12,color:'#fff'}
});

export default styles;