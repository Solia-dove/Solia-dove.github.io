class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
      }
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
      }
}
let myClock = new ExtendedClock({template:'h:m:s'}, 2000);
   myClock.start();
   myClock.stop();

   /**
    *  we want to use an object as an argument of the constructor function. we give it name "options". remember: options is an object.
then we want to take some properties of this object as variables for our methods render() and start(). so we need to write them in properties of newly created object: options.template as this.template and options.precision as this.precision.
this.precision = options.precision
but what if options does not have precision? so we need to declare default value 1000:
let {precision= 1000} = options;
this.precision = precision;
    * 
    */

class Computer {
    constructor(ram,cpu,storage){
        this._ram=ram;
        this._cpu=cpu;
        this._storage=storage;
    }

    runProgram(program){
 console.log("running " +program);
    }
}

class Laptop extends Computer{
    constructor(ram,cpu,storage,battery){
        super(ram,cpu,storage);
        this._battery=battery;
    }
    carryAround(){
        console.log("carrying laptop: cpu " + this.cpu +" ram: "+this.ram+" storage:  "+this.storage+" battery: "+this.battery)
    }
   

}