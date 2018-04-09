import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	},
	topSearchWrap:{
		position: 'absolute',
		width: '100%',
		height: 24,
		backgroundColor: 'transparent',
		zIndex: 9999,
		flexDirection: 'row',
		paddingLeft: 13,
		paddingRight: 13,
		marginTop: 13
	},
	topAddress: {
		width: 50,
		height: 24,
		borderColor: 'rgba(0,0,0,.3)',
		backgroundColor: 'rgba(0,0,0,.3)',
		borderWidth: 1,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 13,
		flexDirection: 'row'
	},
	topSearch: {
		backgroundColor: '#fff',
		flex: 1,
		borderRadius: 12,
		paddingLeft: 4,
		flexDirection: 'row',
		alignItems: 'center'
	},
	font: {
		fontSize: 40
	},
	img: {
		width: '100%',
		height: '100%'
	},
	content: {
		flex: 1,
		backgroundColor: '#fff',
		position: 'relative'
	},
	swiper: {
		height: 0
	},
	dot: {
		backgroundColor:'rgba(0,0,0,.2)',
		width: '25%',
		height: 40
	},
	movieTab: {
		flexDirection: 'row',
		height: 40,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	movieTabText: {
		width: '25%',
		height: 40,
		textAlign: 'center',
		lineHeight: 40
	},
	movieTabTextAct: {
		width: '25%',
		height: 40,
		textAlign: 'center',
		lineHeight: 40,
		color: '#f00',
		borderBottomColor: '#f00',
		borderBottomWidth: 2
	}
});

export default styles;