import { connect } from 'react-redux';
import Movie from './Ui.js';
import { hotMovieAction } from './reducer/actionCreator'

const mapState = (state) => ({
	hotMovieList: state.movielist.hotMovieList
})

const mapDispatch = (dispatch) => ({
	getHotMovieData() {
		const url = 'http://www.ailoman.com/movielist';
		fetch(url)
		.then(res => res.json())
		.then((res) => {
			const action = hotMovieAction(res)
			dispatch(action)
		})
	}
})

export default connect( mapState, mapDispatch )( Movie );