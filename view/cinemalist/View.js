import { connect } from 'react-redux';
import CinemaList from './Ui.js';
import { cinemaListAction } from './reducer/actionCreator'

const mapState = (state) => {
	return {cinemalist: state.cinemalist.cinemalist}
}

const mapDispatch = (dispatch) => ({
	getCinemaListData() {
		const url = 'http://www.ailoman.com/cinemalist';
		fetch(url)
		.then(res => res.json())
		.then((res) => {
			const action = cinemaListAction(res.cinema)
			dispatch(action)
		})
	}
})
export default connect( mapState, mapDispatch )( CinemaList );