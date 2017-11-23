abstract class Car{

    public description : string;
     public getDescription():string{
         return this.description;
     }
     public abstract cost(): number;
}

class ModelS extends Car{
     public description = "Model S";


     public cost(): number{
         return 73000;
     }
    }

     class ModelX extends Car {
         public description ="Model X";

         public cost(): number{
              return  77000;
         
            }
        }
     
         abstract class  CarOption extends Car{

             decoraterdCar :Car;
              public abstract getDescription():string
              public abstract cost():number;
         }
         
        class EnhancedAutoPilot extends CarOption {

            constructor ( car:  Car ){
                super();
                this.decoraterdCar = car;

            }
            public getDescription(): string {
                

                return this.decoraterdCar.getDescription() + ', Enhanced AutoPilot';
            }
            public cost(): number {
              return this.decoraterdCar.cost() + 5000;
            }

            
        }      
        class ReafacingSeats extends CarOption {
            
                        constructor ( car:  Car ){
                            super();
                            this.decoraterdCar = car;
            
                        } 
                        public getDescription(): string {
                            
            
                            return this.decoraterdCar.getDescription() + ',Rear Facing seats';
                        }
                        public cost(): number {
                          return this.decoraterdCar.cost() + 40000;
                        }       
                    }
                    let mytesla  = new ModelS();
                    mytesla = new ReafacingSeats(mytesla);


                    console.log(mytesla.cost);
                    console.log(mytesla.getDescription);