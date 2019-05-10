import { all } from 'redux-saga/effects';

import watchCategorySaga from './category';

export default function* rootSaga() {
	yield all([
		watchCategorySaga()
	]);
}