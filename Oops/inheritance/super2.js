class Bank {
    constructor(){
        console.log("gm")
    }
    open_acc(){
        console.log("gn")
    }

}


class Svpur extends Bank{
    constructor(){
        super();
        console.log("helo")
    }
}
let c2 = new Svpur();
c2.open_acc();
