
/*function addNumbers( a: number, b: number){

return a + b;

}

const addNumberArrow = (a: number, b: number): string  => {
  return `${a + b}`;
} 

function multiply (firstNumber : number, secondNumber? :number, base : number = 2) {
   return firstNumber * base;
}*/

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

strider.showHp(); // Muestra los puntos de vida iniciales

healCharacter(strider, 20); // Cura al personaje

strider.showHp(); // Muestra los puntos de vida después de curar

export {};