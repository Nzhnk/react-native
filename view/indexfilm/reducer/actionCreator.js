/*import { CHANGE_REFRESHING, CHANGE_LIST } from './actionTypes'*/

/*export const getRefreshingAction = (status) => ({
	type: CHANGE_REFRESHING,
	value: status
})*/

/*export const getChangeListAction = (list, cover) => ({
	type: CHANGE_LIST,
	list: list,
	refreshing: false,
	cover: cover
})*/

const getListDataAction = (cover) => {
	return (dispatch) => {
		let url = "../../../mock/movielist.json"
		fetch(url)
		.then(res => res.json())
		.then((res) => {
			console.log(res)
/*			if (res.ret && res.data) {
				const action = getChangeListAction(res.data.list, cover)
				dispatch(action)
			}*/
		})
	}
}