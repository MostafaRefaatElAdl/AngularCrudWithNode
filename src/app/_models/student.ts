export class Student {
    constructor(private id:number, private name:string, private age:number){}

    get Id(){
        return this.id;
    }

    set Id(id:number){
        this.id=id;
    }

    get Name(){
        return this.name;
    }

    set Name(name:string){
        this.name=name;
    }

    get Age(){
        return this.age;
    }

    set Age(age:number){
        this.age=age;
    }
}
