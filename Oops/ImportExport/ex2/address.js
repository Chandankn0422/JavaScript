class Address{
    constructor(a,b,c){
        this.house=a;
        this.area=b;
        this.city=c;
    }
    getAddress(){
        return this.city
    }
}
module.exports = Address;