/* class cemtral_govt{
    tax = 15
}

class kar_govt extends cemtral_govt{

}
let c1 = new kar_govt();
console.log(c1.tax) */

/* class cemtral_govt{
    tax = 15
}

class kar_govt extends cemtral_govt{
    tax = 16
}
let c1 = new kar_govt();
console.log(c1.tax) */

class central_gov{
    tax = 18
}
class Ap_gov extends central_gov{
    tax = 19
}

let c1 = new Ap_gov();
console.log(c1.tax)

class Mh_gov extends central_gov{

}
let c2 = new Mh_gov();
console.log(c2.tax)
