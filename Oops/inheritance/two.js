class central_gov{
    constructor(){
        console.log("parent")
    }
}
/* c1 = new cemtral_govt(); */

class kar_govt extends central_gov{
    constructor(){
        super();
        console.log("child")

    }
}
let c2 = new kar_govt();
