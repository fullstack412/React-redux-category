import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import category from './category';

const config = {
	key: 'root',
	storage
};

const combinedReducer = combineReducers({
	category
});

const appReducer = persistReducer(config, combinedReducer);

export default appReducer;
