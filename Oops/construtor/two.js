class Bank{
    min_bal=500;
    acc_name;
    acc_id;
    acc_amount;
    constructor(name,id,amount){
        this.acc_name=name;
        this.acc_id = id;
        this.acc_amount = amount;
        console.log("hello prashanth tinnavara")    
    }
    open_account(){
        console.log(this.acc_id);
        console.log(this.acc_name)
        console.log(this.min_bal - 50);
    }

}
let c1 =new Bank("chandan", 1212, 500000);
c1.open_account();