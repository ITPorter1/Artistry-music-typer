window.addEventListener('load', init);

// Globals
let time = 5;
let score = 0;
 let isPlaying;

// Dom Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const names = [
    'Kendrick Lamar',
    'Chance The Rapper',
    'Jay Z',
    'J.Cole',
    'Drake',
    'Kanye West',
    'Lil Wayne',
    'Method Man',
    'DMX',
    'Eminem',
    'Westside Boogie',
    'Russ',
    'Stove God Cooks',
    'Da Baby',
    '50 Cent',
    'JID',
    'Schoolboy Q',
    'Nas',
    'Vince Staples',
    'Ludacris',
    'Saba',
    'Smino',
    'Biggie Smalls',
    'Royce Da 59',
    'Pusha T'
  ];
  
  // Initialize Game
  function init(){
    showWord(words);
  }

  // Pick & show random word
  function showWord(words){
      //Generate random array index
      const randIndex=Math.floor(Math.random() * words.length);
      //Output random word
      currentWord.innerHTML=words[randIndex];
  }