const Address = require("./address");
class Sbi extends Address{
    constructor( id, name,address){
        super(102,"hai", "hello");
        this.id=id;
        this.name=name;
        this.address=address
    }

}
let c1=new Sbi(101,"banglore","bangl",new Address(102,"hai", "hello"));

console.log(c1)
let c2=c1.getAddress();
console.log(c2)
