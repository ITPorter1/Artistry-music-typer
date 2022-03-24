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
    //Start matching on word input
    wordInput.addEventListener('input',startMatch)
    // Call countdown every second
    setInterval(countdown,1000);
    //Check game status
    setInterval(checkStatus,50);
  }

  //Start match
  function startMatch(){
      if(matchWords()){
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = '';
        score++;
      }
      scoreDisplay.innerHTML = score;
    }

  //Match currentWord to wordInput
  function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
  }
  
  
  // Pick & show random word
  function showWord(words){
      //Generate random array index
      const randIndex=Math.floor(Math.random() * words.length);
      //Output random word
      currentWord.innerHTML=words[randIndex];
  }

  //Countdown timer
  function countdown(){
      if(time>0){
          time--;
      } else if(time === 0){
          //Game is over
          isPlaying = false;
      }
      //Show time
      timeDisplay.innerHTML = time;
  }

  //Check game status
  function checkStatus(){
      if(!isPlaying && time === 0){
          message.innerHTML = 'Game Over';
          score = 0;
      }
  }