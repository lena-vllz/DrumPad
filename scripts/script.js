const displayText = document.querySelector('.words')
const less = document.querySelector('.key29')
const more = document.querySelector('.key30')
let themeDisplay = document.querySelector('.musicChoice')


displayText.textContent = 'Welcome';
document.documentElement.setAttribute('data-theme', 'default');


// THEME 1 AUDIO
function audioEvent(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    const nameAudio = audio.getAttribute('data-id')
    displayText.textContent = nameAudio
}; 

// THEME 2 AUDIO
function audioEvent(event) {
    const audio = document.querySelector(`audio[data-info="${event.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    const nameAudio = audio.getAttribute('data-id')
    displayText.textContent = nameAudio
}; 

// Remove animation on the letter
function removeTransition(e)
const keys = document.querySelectorAll('.box')
keys.forEach(key => key.addEventListener('transitionend',removeTransition))


function displayThemeAudio()
{
    let themeContent = musicChoice.textContent
    if(themeContent == 'song 1') 
    {
        document.documentElement.setAttribute('data-theme', 'default');
        themeDisplay.textContent = 'song 2'
        window.removeEventListener('keydown', audioPlay)
        window.addEventListener('keydown', audioPlay2)
    }
    else if(themeContent == 'song 2') 
    {
        document.documentElement.setAttribute('data-theme', 'song2');
        themeDisplay.textContent = 'song 1'
        window.removeEventListener('keydown', audioPlay2)
        window.addEventListener('keydown', audioPlay)
    }
}




// note avant d'aller dodo:
// A RAJOUTER : le faite que le boutton enter change de thème + le son + - fort
// mettre des commentaires
// ajouter le changement de mots





// let vid = audio.querySelector('audio');
// vid.volume = 0.5;

// less.addEventListener('keydown',() =>
// {
//     vid.volume --
// });


// more.addEventListener('keydown',() =>
// {
//     vid.volume ++
// });