export const fetchData = async (url, options) => {
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	} catch (err) {
		return err;
	}
};
