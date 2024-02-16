// function play(){
//     // console.log("Play start now")
// // step-1: hide the home screen. to hide the screen add the class hidden to the home section   
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     // console.log(playgroundSection.classList)
//     playgroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    // stop the game if pressed 'ESC'
    if(playerPressed == 'Escape'){
        gameOver();
    }
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)
    // console.log(currentAlphabetElement);

    //checked match or not
    if(playerPressed == expectedAlphabet){
        console.log('you get a point');

        //update score:
        //1. get the current score
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        // .....................
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        // 2. increase the score by 1
        const newScore = currentScore + 1;

        //3. show the update score
        // currentScoreElement.innerText = newScore;

        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorByID(expectedAlphabet);
        continueGame();
    }
    else{
        console.log("you missed. you lost a life");

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        // //step1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step2: reduce the life count
        // const newLife = currentLife - 1;

        // // step3: displapy the update life count
        // currentLifeElement.innerText = newLife;
        // if(newLife == 0){
        //     gameOver()
        // }
    }
}


//captured keyboard key press
document.addEventListener('keyup', handleKeyboardButtonKeyUpEvent);

function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log("your random alphabet", alphabet)

    //set randomly generated alphabet on the screen

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');
    
    // reset score and life

    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get final score
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore)
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorByID(currentAlphabet);
}