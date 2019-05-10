import { createAction, handleActions } from 'redux-actions';

export const actions = {
	loadData: 'category/LOAD_DATA',
	selectItem: 'category/SELECT_ITEM',
	setBusy: 'category/SET_BUSY',
	unsetBusy: 'category/UNSET_BUSY',
	setData: 'category/SET_DATA'
};

export const loadData = createAction(actions.loadData);
export const selectItem = createAction(actions.selectItem);
export const setBusy = createAction(actions.setBusy);
export const unsetBusy = createAction(actions.unsetBusy);
export const setData = createAction(actions.setData);

const defaultState = {
	items: [],
	isBusy: false,
};

export default handleActions({
	[actions.setBusy]: state => ({ ...state, isBusy: true }),
	[actions.unsetBusy]: state => ({ ...state, isBusy: false }),
	[actions.setData]: (state, action) => ({ ...state, items: action.payload })
}, defaultState);
