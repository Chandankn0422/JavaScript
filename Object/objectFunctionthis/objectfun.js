function emp(a,b){
    let emp = {
        id: 101,
        name: "hello",
        loc: "banglore",
        salary: 45000,
        getName: function(){
            return this.name;
        },  
        getcaal: function (){
            document.write(a+b)
        }
    
    }
    
    let result= emp.getName();
    document.write(result)
    emp.getcaal()
}