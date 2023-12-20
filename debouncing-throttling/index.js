const searchInput = document.querySelector("#searchInput");
const defaultText = document.querySelector(".default");
const debounceText = document.querySelector(".debounce");
const throttleText = document.querySelector(".throttle");

function fetchSuggestions(query) {
	defaultText.textContent = query;
	//api call to fetch fetchSuggestions
	console.log(`Fetching suggestions for: ${query}`);
}

const debounceFun = (cb, delay = 400) => {
	let timer;
	return (...args) => {
		if (timer) {
			clearInterval(timer);
		}
		timer = setTimeout(() => cb(...args), delay);
	};
};
const throttleFun = (cb, delay = 400) => {
	let lastTrigger = 0;

	return (...args) => {
		let now = new Date().getTime();
		if (now - lastTrigger < delay) return;
		lastTrigger = now;
		cb(...args);
	};
};

const debouncedFetchSuggestions = (e) => {
	const input = e.target.value;
	fetchSuggestions(input);
	//debounce way to call  an api or update suggestions
	debouncedUpdateSuggestions(input);
	throttledUpdateSuggestions(input);
};

const debouncedUpdateSuggestions = debounceFun((text) => {
	debounceText.textContent = text;
}, 400);

const throttledUpdateSuggestions = throttleFun((text) => {
	throttleText.textContent = text;
}, 400);

searchInput.addEventListener("input", debouncedFetchSuggestions);
