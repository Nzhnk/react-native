import { connect } from 'react-redux';
import CommonCmpt from './Ui.js';
import { changeSelectedTabAction } from './reducer/actionCreator.js';

const mapState = ( state ) => ({
	selectedTab: state.home.selected
});

const mapDispatch = ( dispatch ) => ({
	changeSelectTab( type ){
		const action = changeSelectedTabAction( type );
		console.log(action)
		dispatch( action );
	}
});

export default connect( mapState, mapDispatch )( CommonCmpt );