export class Department {
    constructor(public id:number, public name:string,public location:string){}

    get Id(){
        return this.id;
    }

    set Id(Id:number){
        this.id=Id;
    }

    get Name(){
        return this.name;
    }

    set Name(Name:string){
        this.name=Name;
    }
    get Location(){
        return this.location;
    }

    set Location(Location:string){
        this.location=Location;
    }
}
