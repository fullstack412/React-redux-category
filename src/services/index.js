import { API_URL } from '../config';

export function loadCategoryItems() {

	return fetch(API_URL)
		.then(res => {
			return res.json();
		});
}
