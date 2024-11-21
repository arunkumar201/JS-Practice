enum PromiseState {
	PENDING = "pending",
	FULFILLED = "fulfilled",
	REJECTED = "rejected",
}
type TPromiseFulfillFunction<T> = (value: T) => void;
type TPromiseRejectFunction<K> = (reason: K) => void;
type TPromiseExecutorFunction<T, K> = (
	resolve: TPromiseFulfillFunction<T>,
	rejected: TPromiseRejectFunction<K>
) => void;

type TPromiseThenCallback<T> = (value: T | undefined) => void;
type TPromiseCatchCallback<K> = (reason: K | undefined) => void;
type TPromiseFinallyCallback = () => void;

class MyPromise<T, K> {
	private _state: PromiseState = PromiseState.PENDING;
	private _successCallbackHandlers: TPromiseFulfillFunction<T>[] = [];
	private _errorCallbackHandlers: TPromiseRejectFunction<K>[] = [];
	private _finallyCallbackHandler: TPromiseFinallyCallback | undefined =
		undefined;

	private _value: T | undefined = undefined;
	private _reason: K | undefined = undefined;

	constructor(executor: TPromiseExecutorFunction<T, K>) {
		executor(
			this._promiseResolveHandler.bind(this),
			this._promiseRejectHandler.bind(this)
		);
	}

	/**
	 * Handles the resolution of the promise.
	 *
	 * This method changes the state of the promise to fulfilled, sets the resolved value,
	 * and executes all registered success callbacks. If a finally callback is registered,
	 * it is also executed.
	 *
	 * @param value - The value with which the promise is resolved.
	 * @returns void
	 */
	private _promiseResolveHandler(value: T) {
		if (this._state === PromiseState.FULFILLED) return;
		this._state = PromiseState.FULFILLED;
		this._value = value;
		this._successCallbackHandlers.forEach((handlerFun) => {
			handlerFun(value);
		});
		if (this._finallyCallbackHandler) this._finallyCallbackHandler();
	}
	public then(handlerFun: TPromiseThenCallback<T>) {
		if (this._state === PromiseState.FULFILLED) {
			handlerFun(this._value!);
		} else {
			this._successCallbackHandlers.push(handlerFun);
		}
		return this;
	}

	public catch(handlerFun: TPromiseCatchCallback<K>) {
		if (this._state === PromiseState.REJECTED) {
			handlerFun(this._reason);
		} else {
			this._errorCallbackHandlers.push(handlerFun);
		}
		return this;
	}
	private _promiseRejectHandler(reason: K) {
		if (this._state === PromiseState.REJECTED) return;
		this._state = PromiseState.REJECTED;
		this._reason = reason;
		this._errorCallbackHandlers.forEach((handlerFun) => {
			handlerFun(reason);
		});
		if (this._finallyCallbackHandler) this._finallyCallbackHandler();
	}
	//implement the finally method
	public finally(handlerFun: TPromiseFinallyCallback) {
		if (this._state !== PromiseState.PENDING) handlerFun();
		this._finallyCallbackHandler = handlerFun;
	}
}

// Example usage
// run cmd- npx tsx promises/my-promise.ts
const myPromise = new MyPromise<string, string>((resolve, reject) => {
	setTimeout(() => {
		reject("Hello, World!");
	}, 1000);
});

myPromise
	.catch((reason) => {
		console.error(reason);
	})
	.then((value) => {
		console.log(value);
	})
	.finally(() => {
		console.log("Finally block executed");
	});
