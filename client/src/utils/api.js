import { HEADERS } from '../constants/headers';
import { METHODS } from '../constants/methos';
import { fetchData } from './fetchData';

export const getData = async url => {
	const data = await fetchData(url, { method: METHODS.GET });
	return data;
};

export const postData = async (url, body = {}) => {
	const data = await fetchData(url, {
		method: METHODS.POST,
		headers: HEADERS
	});
	return data;
};

export const patchData = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: METHODS.PATCH,
			headers: HEADERS,
			body: JSON.stringify(data)
		});
		const result = await response.json();
		return result;
	} catch (err) {
		console.error('Error during patchData:', err);
		throw err;
	}
};
export const deleteData = async url => {
	const data = await fetchData(url, {
		method: METHODS.DELETE
	});
	return data;
};
