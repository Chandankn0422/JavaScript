let fruits =["apple","Banana" ,"lemon","Dragonfruit"];
let [a,,,d] = fruits
console.log(a,d)

let new_fruit = [...fruits];          //spread Operator
console.log(new_fruit);