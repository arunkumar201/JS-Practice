### Polyfills in javascript 

-  **Polyfills** are small pieces of code that add modern support for a new feature that is not natively  supported by a browser or environment. They are used to make older browsers or environments compatible with newer code.
-  **Polyfills** are typically used to add modern js feat/funs support , such as ` Promise`, `Array.prototype.includes()`, or `Object.assign()` to older browsers that do not natively support them.

- in Short , A **Polyfills** is a piece of code to provide modern functionality on older browsers that  do not natively support it.

## Final Points
-  **Polyfills** are used to make older browsers compatible with newer code.
-  **Polyfills** are typically used to add modern js feat/funs support for the older browsers.
- There are some JavaScript functions/features that Google Chrome supports but Internet Explorer does not support (like Promises or Object.assign()). In order to ensure that the website doesn't break in IE, a developer could write a piece of polyfill code that simulates the missing functionality that IE does not support.
- 
## Benefits og Polyfills

- Polyfills enable you to write modern JavaScript code that works consistently across different browsers, ensuring a consistent user experience.

##  Drawbacks of Polyfills
- Some polyfills can introduce performance overhead, especially for complex features.

##   How to use Polyfills
-   You can use polyfills by including them in your project, either by including a polyfill library (core/js) or by writing your own polyfills.
 - Github link - [core js](https://github.com/zloirock/core-js)
 -   You can also use a bundler like Webpack or Rollup to include polyfills in.

## Examples  of Polyfills
1. Math.trunc(n)  - truncates a number to its integer part or “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.

- in older browsers, this method is not available, so we need to add it using a polyfill.

- eg.
   ```js
   //if trunc fun is not there inside the math 
   if(!Math.trunc){

	Math.trunc=function (number){
	 // Math.ceil and Math.floor exist even in ancient JavaScript engines
		return number < 0 ? Math.ceil(number) : Math.floor(number);
	}
   }
   ```

2. Array.prototype.includes() -  method is used to determine whether an array or a string contains a specified element or substring.

- older browsers like Internet Explorer(IE) do not support this method. To ensure compatibility, we can use a polyfill to provide the includes() functionality.

```js
//if includes fun is not there inside the array
if(!Array.prototype.includes){
	if(!Array.prototype.includes){
   //or use Object.defineProperty
   Array.prototype.includes = function(search){
    return !!~this.indexOf(search);
    }
   }
}
// if indexOf is  not there inside the array then needs to create 
// pollyfill as indexOf not supported before IE9. 
```
#### Source - [stack-overflow](https://stackoverflow.com/questions/53308396/how-to-polyfill-array-prototype-includes-for-ie8)

 - filter 
 - reduce 
 - promises 
 - map 
