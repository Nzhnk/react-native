import { connect } from 'react-redux';
import Home from './Ui.js';
import { changeSelectedTabAction } from './reducer/actionCreator.js';

const mapState = ( state ) => ({
	selectedTab: state.home.selected
});

const mapDispatch = ( dispatch ) => ({
	changeSelectTab( type ){
		const action = changeSelectedTabAction( type );
		dispatch( action );
	}
});

export default connect( mapState, mapDispatch )( Home );