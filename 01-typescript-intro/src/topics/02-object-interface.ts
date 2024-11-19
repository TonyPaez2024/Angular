let skill: string[] = ['bash', 'counter', 'healing'];



interface Character{
    name: string;
    hp: number;
    skill: string[];
    hometow?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skill: ['Bash', 'Counter'],
   
};

strider.hometow = 'Rivendell'

console.table(strider);
export {};
