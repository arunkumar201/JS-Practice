const num1=[1,2,3,4];
const num2=[23,32,3,4,3];
const res=[...num2,...num1];
console.log(res);

let arr1=[2,3,4,43];
let newarr=arr1;
newarr.push(123);
newarr.push(445);
console.log(newarr);


let a = [1, 2, 3, 3, 2, 3, 4];
console.log(...a)
let b = [21, 22, 23, 24, 25, 26, 27, 28, 29];
let c = [...a, ...b];
console.log(c)

let x =[...c]
console.log(x);
const foo = {
  english: 'hello',
  french: 'bonjour',
  japanese: 'konnichiwa'
};
let z = {...foo}
console.log(z)


let nameList = {
    french: 'bonjour',
    japanese: 'konnichiwa',
    India: 'hindi',
    English: 'english',
    age: '21'
};
let stuName = {
    name: 'A',
    french: 'bonjour',
    japanese: 'konnichiwa',
    Class: 'A',
    English: 'english',
}

let results = { ...nameList, ...stuName };
console.log(results)






function calcVolume(width, height, depth) {
  return width * height * depth;
};

//Basic Way to call the function with parameters
let ans1 = calcVolume(12, 10, 10);
console.log(ans1)
//ANother way to call the function passed to the spread object;

let cube = [12, 10, 10]
calcVolume.apply(null,cube)
let ans2 = calcVolume(...cube);
console.log(ans2)
let s1 = "ArunKumar";
const Sans = [...s1];
console.log(...Sans,...s1)

const add = (a, b, c) => {
     return a + b + c;
    
}
let passArguments = [1, 2, 3];
console.log(add(1, 2, 3))
console.log(add.apply(null, passArguments));
console.log(add.apply(null, passArguments))
console.log(add(...passArguments))


const obj1 = [12, 2, 32, 3, 34, 4]
let obj2 = [...obj1]
console.log(obj2);
console.log({ ...obj1 });
const obj = { key1: 'value1' };
const array = [...obj]; // TypeError: obj is not iterable