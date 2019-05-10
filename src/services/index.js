import { API_URL } from '../config';

export function loadCategoryItems() {

	return fetch(API_URL)
		.then(res => res.json());
}
