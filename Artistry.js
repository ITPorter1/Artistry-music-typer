window.addEventListener('load', init, playVideo);

// Globals
let time = 30;
let score = 0;
 let isPlaying;

// Dom Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const vid = document.querySelector('#myVid'); 

const words = [
    'Kendrick Lamar',
    'Chance The Rapper',
    'Jay Z',
    'J Cole',
    'Drake',
    'Kanye West',
    'Lil Wayne',
    'Method Man',
    'DMX',
    'Eminem',
    'Westside Boogie',
    'Russ',
    'Stove God Cooks',
    'DaBaby',
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

  const videos = [
    'https://www.youtube.com/watch?v=T336EAeXukk',
    'https://www.youtube.com/watch?v=xnO2HDmT1D8',
    'https://www.youtube.com/watch?v=bh0SmO_YET4',
    'https://www.youtube.com/watch?v=-Ww7spBP5dA',
    'https://www.youtube.com/watch?v=HAfqdFNwlF0',
    'https://www.youtube.com/watch?v=Q3TM75Pn-TQ',
    'https://www.youtube.com/watch?v=KyNquY90-dc',
    'https://www.youtube.com/watch?v=7TDoqOOuAIs',
    'https://www.youtube.com/watch?v=kr1-_ybKoho',
    'https://www.youtube.com/watch?v=fg1v0TpcZPs',
    'https://www.youtube.com/watch?v=DH6PoiiXVBI',
    'https://www.youtube.com/watch?v=O1PXiEy1nOQ',
    'https://www.youtube.com/watch?v=RoDCwUe6nF4',
    'https://www.youtube.com/watch?v=7Rxcsw4oXTY',
    'https://www.youtube.com/watch?v=PhBqZicEMgQ',
    'https://www.youtube.com/watch?v=ETWOmw04E6s',
    'https://www.youtube.com/watch?v=KKrhWC_uJs0',
    'https://www.youtube.com/watch?v=b24ovPwKjnE',
    'https://www.youtube.com/watch?v=QlZYwiprCJg',
    'https://www.youtube.com/watch?v=e7_lIq5ugn4',
    'https://www.youtube.com/watch?v=W20t_5W-EHU',
    'https://www.youtube.com/watch?v=Rxy9xBLlh1A',
    'https://www.youtube.com/watch?v=mUEhQ48sCqU',
    'https://www.youtube.com/watch?v=gembmYLKz5E',
    'https://www.youtube.com/watch?v=3uymyKASA-Y'
  ];
  
  // Initialize Game
  function init(){
    const randIndex=Math.floor(Math.random() * words.length);
    showWord(words);
    playVideo(videos);
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
        time = 31;
        const randIndex=Math.floor(Math.random() * words.length);
        showWord(words, randIndex);
        playVideo(videos, randIndex);
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
  function showWord(words,randIndex){
      //Generate random array index
      // const randIndex=Math.floor(Math.random() * words.length);
      //Output random word
      currentWord.innerHTML=words[randIndex];
  }

  //Pick & play random link
  function playVideo(videos,randIndex){
      //Generate random array index
      // const randIndex=Math.floor(Math.random() * words.length);
      //Output random video
      vid.src=videos[randIndex];
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