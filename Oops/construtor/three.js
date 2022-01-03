class Bank{
    min_bal =500;
    max_bal =50000;
    constructor(id, name, amount){
        this.acc_id =id;
        this.acc_name =name;
        this.acc_amount = amount;

    }
    open_acc(){
        console.log("account open sucessfully")
    }
    close_acc(){
    }
    amount_wd(){
        return this.acc_amount - 500
    }
    amount_debit(){
        return this.acc_amount + 4000
    }
}
c1= new Bank(101,"chandan", 456123);
c2 = new Bank(102, "wade", 65423);
console.log(c1)
console.log(c2.amount_debit())
