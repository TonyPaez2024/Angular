







class SuperClass {
    public myProperty: string = 'abc123';

    print(){
        console.log('hola Mundo');
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);