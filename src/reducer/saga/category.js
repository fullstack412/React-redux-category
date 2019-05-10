import { call, takeEvery, put } from 'redux-saga/effects';

import { actions as categoryActions } from '../category';
import { loadCategoryItems } from '../../services';

export function* loadDataSaga(action) {
	// Set state as busy
	yield put({ type: categoryActions.setBusy });

	const response = yield call(loadCategoryItems);

	yield put({ type: categoryActions.setData, payload: response.data });

	// Release busy state
	yield put({ type: categoryActions.unsetBusy });
}

export default function* watchCategorySaga() {
	yield takeEvery(categoryActions.loadData, loadDataSaga);
}