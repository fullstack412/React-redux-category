import { call, takeEvery, put } from 'redux-saga/effects';
import { sortBy } from 'lodash';

import { actions as categoryActions } from '../category';
import { loadCategoryItems } from '../../services';

export function* loadImagesSaga(action) {
	// Set state as busy
	yield put({ type: categoryActions.setBusy });

	const response = yield call(loadCategoryItems);
	console.log(response);

	// Release busy state
	yield put({ type: categoryActions.unsetBusy });
}

export default function* watchCategorySaga() {
	yield takeEvery(categoryActions.loadData, loadDataSaga);
}