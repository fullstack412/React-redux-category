import { createAction, handleActions } from 'redux-actions';

export const actions = {
	loadData: 'category/LOAD_DATA',
	selectItem: 'category/SELECT_ITEM',
	setBusy: 'category/SET_BUSY',
	unsetBusy: 'category/UNSET_BUSY'
};

export const loadData = createAction(actions.loadData);
export const selectItem = createAction(actions.selectItem);
export const setBusy = createAction(actions.setBusy);
export const unsetBusy = createAction(actions.unsetBusy);

const defaultState = {
	items: [],
	isBusy: false,
};

export default handleActions({
	[actions.setBusy]: (state, action) => ({ ...state, isBusy: true }),
	[actions.unsetBusy]: (state, action) => ({ ...state, isBusy: false })
}, defaultState);
