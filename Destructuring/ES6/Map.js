let mp = new Map([
  [1, 22, 221],
  [122, 212, 1112, 221],
]);
console.log(mp);
console.log(mp instanceof Map);
console.log(mp instanceof Object);
let obj = { name: "Arun", age: 123 };
console.log(obj instanceof Map);
console.log(obj instanceof Object);

//Create a Map 

let user=new Map(); //Empty Map
 user.set('name','Arun');
 user.set('Age 🥭',20);
console.log(user)

// creating a map 
var fruits = new Map();
fruits.set('🍎', "Apple");
fruits.set('🍋', "Mango");
fruits; //{"🍎" => "Apple", "🍋" => "Mango"}
//total number of entries in the Map
console.log(fruits.size)


let books = new Map();  
    books.set('John', 'author');  
    books.set('Harry', 'publisher');  
    books.set('Mary', 'subscriber');  
    books.set('James', 'Distributor');  
    
    console.log(books.get("James"))
    books.set("James","CEO Of A Company");
    console.log(books.get("James"));
    console.log(books.size)
    console.log(books.delete("John"));
    console.log(books);
    
books.set("Arun",'Developer');
console.log(books.get("Arun"))
console.log(books.has("Arun"));


for(let i of books.values()){
   console.log(i);
}
for(let i of books.entries()){
console.log(`
             key:${i[0]}
             Value:${i[1]}
             `
             );
}