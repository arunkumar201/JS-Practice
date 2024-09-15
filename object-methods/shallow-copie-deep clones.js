/**
 * Shallow copie vs Deep Clone
 * 
 */


// Shallow copy
/**
 * Shallow copy creates a new object or array, but it's only references the top level 
 * properties of the original object or array.if the original object or array has nested objects or arrays,
 * it will also create references to these nested objects or arrays.
 * it means modifying the copied object or array will also affect the original object or array.
 * in short 
 *   -   Shallow copy only copies the top-level properties and all  nested objects or arrays are referenced.
 *   - modification in nested objects or arrays will also reflect in the original object or array.
  */

let obj1={ a: 1, b: { c: 2, d: 3 }, x: [1, 2, 3, 4, 5], created: new Date() };

let shallowCopyObj1={ ...obj1 };

console.log("original obj1", obj1);
console.log("shallow copy obj1", shallowCopyObj1);
//let's do some modification
shallowCopyObj1.a=10;
console.log("after modification shallow copy obj1", shallowCopyObj1); //output: { a: 10, b: 20 }
console.log("original obj1 after modification", obj1); // output: { a: 10, b: { c: 2, d: 3 } }

//if we want change nested values in the shallow then it willl affect the original object
shallowCopyObj1.b.c=30;
console.log("after modification shallow copy obj1.b.c", shallowCopyObj1.b.c); //output: 30
console.log("original obj1.b.c after modification", obj1.b.c); // output: 30

//so in conclusion - shallow copy is not a deep copy and it's not recommended to use it for large objects.
// - changes made to nested objects in the shallow copy will also affect the original object.

//Comman methods for creatng shallow copy
//1. Object.assign()
//2.Spread operator (...)
//3. Array methods like slice() and concat()

// eg. using Object.assign()
let shallowCopyObj2=Object.assign({}, obj1);
console.log("shallow copy obj2 using Object.assign()", shallowCopyObj2);
shallowCopyObj2.b.d="we made changes in nested propagaty"
console.log("shallow copy obj2 after modification", shallowCopyObj2);
console.log("original obj1 after modification", obj1); // output: { a: 10, b: { c: 30, d: "we made changes in nested propagaty" } }

//pros 
// - faster , less memory usage or lightweighted
// usually used for simple objects or small data structures.
// - cons
// - changes made to nested objects in the shallow copy will also affect the original object.
// - not suitable for large objects.

//Deep copy
/**
 * Creates a completely independent copy of the original object or array.
 * Nested objects or arrays are also recursively cloned.
 * Modifying the clone does not affect the original.
 * Methods for creating deep copy
 *   - JSON.parse(JSON.stringify(obj))
 *   - Using libraries like lodash or deep-copy [cloneDeep()]
 */
//eg.
let deepCopyObj=JSON.parse(JSON.stringify(obj1));
console.log("deep copy obj", deepCopyObj);
deepCopyObj.b.d="we made changes in nested propagaty"
console.log("deep copy obj after modification", deepCopyObj);
console.log("original obj1 after modification", obj1); // output: { a: 10, b: { c: 2, d: 3 } }

//Pros
// - completely independent copy of the original object or array.
// - changes made to nested objects in the deep copy will not affect the original object.
// - suitable for large objects.

//cons
// - slower, more memory usage or heavyweight

//custom deepCopy function
function deepCopy(obj) {

	if (typeof obj!=="object"||obj===null) {
		return obj;
	}
	if (obj instanceof Date) {
		return new Date(obj);
	}
	const newObj=Array.isArray(obj)? []:{};

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key]=deepCopy(obj[key]);
		}
	}
	return newObj;
}

let deepCopyObj2=deepCopy(obj1);
console.log("deep copy obj2 using custom deepCopy function", deepCopyObj2);

//Important points
/*
- Shallow copy copies the top-level properties, while deep copy recursively copies all levels, 
including nested objects.
- Shallow copy modifies the original object or array, while deep copy creates a completely independent copy.
- Shallow copy is faster and lighter, but it can affect nested objects or arrays.
- Deep copy is slower and heavier, but it does not affect nested objects or arrays.
- Use JSON.parse(JSON.stringify()) for simple objects, 
or use libraries like Lodash's _.cloneDeep() for more complex scenarios.
- JSON.parse(JSON.stringify()) does not handle functions, dates, undefined values, or circular references properly.
*/
