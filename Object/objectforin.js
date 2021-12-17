let emp={ id: 101, name: "chandan", loc: "banglore", sal: 45000 };
emp.id=102   //update
delete emp.sal   //delete
console.log(emp)

for(bob in emp){
    console.log(bob)
}