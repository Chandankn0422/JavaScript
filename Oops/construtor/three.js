class Bank{
    min_bal =500;
    max_bal =50000;
    constructor(id, name, amount, withdraw){
        this.acc_id =id;
        this.acc_name =name;
        this.acc_amount = amount;
        this.withdraw = withdraw;

    }
    open_acc(){
        console.log("account open sucessfully")
    }
    close_acc(){
    }
    amount_wd(){ 
        if((this.acc_amount - this.withdraw) >=this.min_bal){
        console.log("transaction sucessfull")}
        else{
            console.log("trasaction failed")
        }
    }
    amount_debit(){
        return this.acc_amount + 4000
    }
}
let c1= new Bank(101,"chandan", 2000, 2000 );
/* let c2 = new Bank(102, "wade", 1000, 2000); */
console.log(c1.amount_wd());
