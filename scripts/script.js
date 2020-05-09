const displayText = document.querySelector('.words')
const less = document.querySelector('.key29')
const more = document.querySelector('.key30')
let themeContent = 'song 1'

displayText.textContent = 'Welcome';
document.documentElement.setAttribute('data-theme', 'default');


// THEME 1 AUDIO
// Function that plays audio on keydown + song 1
function audioPlay(event) {

    // Take the audio + pads according to the keyCode
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${event.keyCode}"]`);
    if(!audio) return;

    // If no audio stop function
    audio.currentTime = 0;
    audio.play();

    // add a class for the effect on the keys
    key.classList.add('playing');

    // Take the data-id of the audio to display it
    const nameAudio = audio.getAttribute('data-id')
    displayText.textContent = nameAudio
}; 

// THEME 2 AUDIO
// Function that plays audio on keydown + song 2
function audioPlay2(event) {
    const audio = document.querySelector(`audio[data-info="${event.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    const nameAudio = audio.getAttribute('data-id')
    displayText.textContent = nameAudio
}; 

// remove the animation on the keys
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.box')
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

// change theme & play audio
window.addEventListener("keydown", changeTheme)
window.addEventListener('keydown', audioPlay)


// Function that display different theme colors and song
function changeTheme(e) {
    if (e.code == "Enter" && themeContent == 'song 2') {
        themeContent = 'song 2'
        document.documentElement.setAttribute('data-theme', 'default');
        themeContent.textContent = 'song 2'
        // Remove the seconde audio on keydown
        window.removeEventListener('keydown', audioPlay2)
        // Put the new audio  on keydown
        window.addEventListener('keydown', audioPlay)
        
    } else if (e.code == "Enter" && themeContent == 'song 1') {
        themeContent = 'song 1'
        document.documentElement.setAttribute('data-theme', 'song2');
        themeContent.textContent = 'song 1'
        window.removeEventListener('keydown', audioPlay)
        window.addEventListener('keydown', audioPlay2)
    }
}

// ON CLICKKKKKK

function clickAudio(event) 
{
    const padsName = event.srcElement.className;
    const padsClass = document.querySelector(`.key[class='${padsName}']`)
    const padsKey = padsClass.getAttribute('data-key')
    const pads = document.querySelector(`.box[data-key='${padsKey}']`)
    pads.classList.add('playing');
    const audio = document.querySelector(`audio[data-key='${padsKey}']`)
    if(!audio) return;
    
    const nameAudio = audio.getAttribute('data-id')
    textDisplay.textContent = nameAudio

    audio.currentTime = 0
    audio.play()
}


function clickAudio2(event) 
{
    const padsName = event.srcElement.className;
    const padsClass = document.querySelector(`.key[class='${padsName}']`)
    const padsKey = padsClass.getAttribute('data-key')

    const pads = document.querySelector(`.box[data-key='${padsKey}']`)
    pads.classList.add('playing');
    const audio = document.querySelector(`audio[data-info='${padsKey}']`)
    if(!audio) return;
    
    const nameAudio = audio.getAttribute('data-id')
    textDisplay.textContent = nameAudio

    audio.currentTime = 0
    audio.play()
}

// change theme & play audio
window.addEventListener("click", changeTheme2)
window.addEventListener('click', clickAudio)


// Function that display different theme colors and song
function changeTheme2(e) {
    if (e.code == "Enter" && themeContent == 'song 2') {
        themeContent = 'song 2'
        document.documentElement.setAttribute('data-theme', 'default');
        themeContent.textContent = 'song 2'
        window.removeEventListener('click', clickAudio2)
        window.addEventListener('click', clickAudio)
        
    } else if (e.code == "Enter" && themeContent == 'song 1') {
        themeContent = 'song 1'
        document.documentElement.setAttribute('data-theme', 'song2');
        themeContent.textContent = 'song 1'
        window.removeEventListener('click', clickAudio)
        window.addEventListener('click', clickAudio2)
    }
}




//volume management
let volum = document.querySelectorAll('audio');

volum.forEach(element => {
    //define the volume
    element.volume = 0.5;

    window.addEventListener('keydown',(e) =>
    {
        //left arrow lowers the volume by 0.1
        if (e.code === 'ArrowLeft'&& element.vol > 0) element.volume -= 0.1
    });

    window.addEventListener('keydown',(e) =>
    {
        //right arrow raises the volume by 0.1
        if (e.code === "ArrowRight" && element.vol < 1) element.volume += 0.1
    });
});


// note avant d'aller dodo:
// A RAJOUTER :
// ajouter le changement de mots + réparer les modes 1 2 ok mais pas 1 2 1


