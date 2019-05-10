import { createAction, handleActions } from 'redux-actions';

export const actions = {
	loadData: 'category/LOAD_DATA',
	selectItem: 'category/SELECT_ITEM',
	changeItem: 'category/CHANGE_ITEM',
	setBusy: 'category/SET_BUSY',
	unsetBusy: 'category/UNSET_BUSY',
	setData: 'category/SET_DATA',
	setEditable: 'category/SET_EDITABLE'
};

export const loadData = createAction(actions.loadData);
export const selectItem = createAction(actions.selectItem);
export const setBusy = createAction(actions.setBusy);
export const unsetBusy = createAction(actions.unsetBusy);
export const setData = createAction(actions.setData);
export const changeItem = createAction(actions.changeItem);
export const setEditable = createAction(actions.setEditable);

const defaultState = {
	items: [],
	path: [0],
	isBusy: true,
	editable: false
};

export default handleActions({
	[actions.setBusy]: state => ({ ...state, isBusy: true }),
	[actions.unsetBusy]: state => ({ ...state, isBusy: false }),
	[actions.setData]: (state, action) => ({ ...state, items: [{children: action.payload}] }),
	[actions.selectItem]: (state, action) => {
		const { no, id } = action.payload;

		const cPath = state.path.slice(0, no + 1);
		cPath.push(id);
		return { ...state, path: cPath };
	},
	[actions.changeItem]: (state, action) => {
		const { id, name } = action.payload;
		let items = state.items;
		let path = state.path;

		for (let i = 0; i < path.length; i ++) {
			let found = false;
			for (let j = 0; j < items[path[i]].children.length; j ++) {
				if (items[path[i]].children[j].id === id) {
					items[path[i]].children[j].name = name;
					found = true;
					break;
				}
			}
			if (found) {
				break;
			}
			items = items[path[i]].children;
		}
		return state;
	},
	[actions.setEditable]: (state, action) => ({ ...state, editable: action.payload })
}, defaultState);
