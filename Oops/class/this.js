class Sbi_bank{
    min_bal= 500;

    open_account(){
        console.log("open")

    }
    get_bal(){
        return this.min_bal + 500
    }
    withdrawl(){
        console.log("draw")

    }
}
let c1=new Sbi_bank();
console.log(c1.min_bal)
let amount = c1.get_bal();
console.log(amount)

