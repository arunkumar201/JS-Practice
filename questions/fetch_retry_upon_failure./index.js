const btn = document.getElementById("btn");
const dataDiv = document.getElementById("data");

const btn_fetch = document.getElementById("btn_fetch");
const dataDiv_fetch = document.getElementById("data_fetch");

const RETRY_COUNT = 3;
const API_URL = "https://jsonplaceholder.typicode.com/todos/12";
const API_TIMEOUT = 1000;

// Wait function
function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

class BetterFetch {
	options = {};
	maxRetries = RETRY_COUNT;
	api_timeout = 1000;
	constructor(options, maxRetries, api_timeout) {
		this.options = options;
		this.maxRetries = maxRetries || RETRY_COUNT;
		this.api_timeout = api_timeout || API_TIMEOUT;
	}
	async betterFetch(url, options, maxRetries, api_timeout) {
		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			btn.innerHTML = "Fetch with Retry";
			btn.disabled = false;
			const data = await response.json();
			return data;
		} catch (error) {
			if (maxRetries > 0) {
				btn.innerHTML = `request Failed!,Retrying ${maxRetries} more time...`;
				// disable the button
				btn.disabled = true;

				console.log(`request Failed!,Retrying ${maxRetries} more time...`);
				await wait(2000);

				return await this.betterFetch(
					url,
					options,
					maxRetries - 1,
					api_timeout
				);
			} else {
				btn.disabled = false;
				btn.innerHTML = "Fetch with Retry";
				dataDiv.innerHTML = `MAX_RETRIES_EXCEEDED ,Please Try Again! `;
				throw new Error(`MAX_RETRIES_EXCEEDED with Error ${error}`);
			}
		}
	}
	async fetch_without_retry(url, options, maxRetries, api_timeout) {
		try {
			const response = await fetch(url, options);
			const data = await response.json();
			dataDiv.innerHTML = `title: ${data.title ?? "No Found"}`;
			return data;
		} catch (error) {
			dataDiv.innerHTML = `request Failed!,Please Try Again! `;
			throw new Error(error);
		}
	}
}

const betterFetch = new BetterFetch();

btn.addEventListener("click", () => {
	dataDiv.innerHTML = "";
	betterFetch
		.betterFetch(API_URL, {}, RETRY_COUNT, API_TIMEOUT)
		.then((data) => {
			console.log(data);
			dataDiv.innerHTML = `title: ${data.title ?? "Not Found"}`;
		})
		.catch((error) => {
			console.log(error);
		});
});

btn_fetch.addEventListener("click", () => {
	dataDiv_fetch.innerHTML = "";
	betterFetch
		.fetch_without_retry(API_URL, {}, RETRY_COUNT, API_TIMEOUT)
		.then((data) => {
			console.log(data);
			dataDiv_fetch.innerHTML = `title: ${data.title ?? "Not Found"}`;
		})
		.catch((error) => {
			console.log(error);
		});
});
