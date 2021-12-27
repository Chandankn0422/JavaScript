/* function wish(){
    console.log("good morning")
}
wish();

function wish(){
    console.log("good night")
}
wish();  
 */


// over riding

let wish=()=>{
    console.log("gm")
}
wish();

wish=()=>{
    console.log("gn")
}
wish();

//dont use let 2 times in fat arrow
