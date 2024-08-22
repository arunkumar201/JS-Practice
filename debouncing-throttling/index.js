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

const myDebounce = (cb, delay = 400) => {
	let timeoutId;

	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => cb(...args), delay);
	};
};
const logMessage = (message) => {
	console.log(message);
};

const debouncedLogMessage = debounceFun(logMessage, 500);

debouncedLogMessage("Hello");
debouncedLogMessage("Hello, world!");
debouncedLogMessage("Hello, world! Again!");

/*
export const useDebounce= (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

*/

const myThrottled = (cb, delay = 400) => {
	let lastTime = 0;
	return (...args) => {
		const now = Date.now().getTime();
		if (now - lastTime < delay) return;
		lastTime = now;
		cb(...args);
	};
};

/*

export const useThrottle = (func, delay) => {
	const [lastTime, setLastTime] = useState(0);

  const throttleFun=()=>{
	const now = Date.now().getTime();
	if (now - lastTime < delay) return;
	lastTime = now;
	func(value);
	setLastTime(now);
}
	useEffect(() => {
		 const timer = setInterval(throttleFun, delay);
		 return () => clearInterval(timer);
		}, [value, delay]);

		return throttleFun;
}


*/
