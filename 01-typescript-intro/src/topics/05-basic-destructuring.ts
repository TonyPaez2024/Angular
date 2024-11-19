interface AudioPlayer {
  audioVolumen: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolumen: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

//const { song, songDuration: duration } = audioPlayer;
//const { author } = audioPlayer.details;

//console.log(`Author: `, author);
//console.log(`Song: `, song);
//console.log(`Duration: `, duration);

const [ , , trunks = 'Not found' ]: string []  = ['Goku', 'Vegeta'];
console.error('Personaje 3:', trunks); 


export {};
