const API_URL='https://jsonplaceholder.typicode.com/posts';

const getApiWithMerging=async (onFetch) => {
	// store cached fetch responses
	const fetchResponseCache={};

	return async (url, params) => {
		// unique cache key 
		const cacheKey=JSON.stringify([url, params]);
		const urlWithParams=`${url}?${new URLSearchParams(params).toString()}`;

		// Check if the response for this request is already cached
		if (!fetchResponseCache[cacheKey]) {
			console.info(`---------------------Fetching data from ${urlWithParams}-------------`)
			// Cache the Promise
			fetchResponseCache[cacheKey]=onFetch(urlWithParams)
				.then((response) => {
					return response.json(); //response is parsed as JSON
				})
				.catch((error) => {
					// If an error occurs, remove the cache entry for this request
					delete fetchResponseCache[cacheKey];
					console.error(`Error fetching data from ${urlWithParams}`, error);
					throw error;
				});
		}
		return fetchResponseCache[cacheKey];
	};
};

// with jsonplaceholder API
const fetchFromApi=async (url) => {
	const response=await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response;
};

(async () => {
	const apiWithMerging=await getApiWithMerging(fetchFromApi);
	try {
		const data1=await apiWithMerging(`${API_URL}/1`, {});
		console.log(data1);
		const data2=await apiWithMerging(`${API_URL}/2`, {});
		console.log(data2);
		console.time('time taken')
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/1`, {}))
		console.log(await apiWithMerging(`${API_URL}/1`, {}))
		console.log(await apiWithMerging(`${API_URL}/1`, {}))
		console.log(await apiWithMerging(`${API_URL}/2`, {}))
		console.log(await apiWithMerging(`${API_URL}/3`, {}))
		console.log(await apiWithMerging(`${API_URL}/3`, {}))
		console.timeEnd('time taken')
	} catch (error) {
		console.error('Error:', error);
	}
})();
