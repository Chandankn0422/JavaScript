class Component{
    constructor(bca, njv){
        this.bca = bca                    //d
        this.abc= njv                     // e
    }

    render(){
        console.log("executed")
    }
}
class App extends Component{
    constructor( a, b, c, d, e){
        super(d, e );
        this.id = a;
        this.name = b;
        this.sal = c;
        
    }
} 
let c1 =new App(101, "chandan", 50000, "gfds", "jkl");
console.log(c1);