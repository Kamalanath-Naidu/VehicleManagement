export class Vehicle {
    id! :number;
    make!: String;
    model!: String;
    year! :String;
    vin!: String;
    constructor(id :number, make: String, model: String, year :String, vin: String){
        this.id=id;
        this.make=make;
        this.model=model;
        this.year=year;
        this.vin=vin;
    }
}

