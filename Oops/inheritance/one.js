/* class cemtral_govt{
    tax = 15
}

class kar_govt extends cemtral_govt{

}
let c1 = new kar_govt();
console.log(c1.tax) */

class cemtral_govt{
    tax = 15
}

class kar_govt extends cemtral_govt{
    tax = 16
}
let c1 = new kar_govt();
console.log(c1.tax)
