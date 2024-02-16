// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');
// }


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}