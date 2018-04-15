import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	scrollView: {backgroundColor: '#f5f5f5'},
	hotPosi: {marginTop:10},
	hotFilm: {backgroundColor: '#fff',paddingLeft: 10,paddingRight: 15,flexDirection: 'row',justifyContent: 'space-between',height: 40,alignItems: 'center'},
	hotTitle: {fontWeight:'bold',fontSize: 14},
	hotAll: {flexDirection: 'row',alignItems: 'center'},
	hotAllCont: {color:'#9b9b9b',fontSize: 12},
	hotImage: {width:16,height:16},
	hotFilmBox: {width:'100%',backgroundColor: '#fff'},
	hotFilmItem: {marginLeft: 15, marginRight:6},
	hotFilmText: {color:'#313131',fontWeight:'bold',fontSize:14,marginTop:12,marginBottom:12,width:100},
	hotFilmBuy: {backgroundColor:'#f03d38',height: 25,width:50,borderRadius:12,alignItems:'center',justifyContent:'center',marginBottom:17},
	hotFilmBuyCont: {fontWeight:'bold',color:'#fff',fontSize:11}
});

export default styles;