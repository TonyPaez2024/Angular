export class Person {
     constructor(
        public  firstName: string,
        public lastName: string,
         private address: string = 'no address'
        ){}
    }

    // export class Hero extends Person{
    //     constructor (
    //         public alterEgo: string,
    //         public age: number,
    //         public realName: string,
    //     )

    //     {
    //         super(realName, 'New York');
    //     }
    
    // }
    export class Hero {
        // public person: Person;
        constructor (
            public alterEgo: string,
            public age: number,
            public realName: string,
            public Person: Person,
        )

        {
         
        }
    
    }
    const tony = new Person('Tony', 'Stark','new york');

    const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);



