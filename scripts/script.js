const displayText = document.querySelector('.words')
const less = document.querySelector('.key29')
const more = document.querySelector('.key30')
let themeContent = 'song 1'


displayText.textContent = 'Welcome';
document.documentElement.setAttribute('data-theme', 'default');


// THEME 1 AUDIO
function audioPlay(event) {
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

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.box')
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

window.addEventListener("keydown", changeTheme)
window.addEventListener('keydown', audioPlay)

function changeTheme(e) {
    if (e.code == "Enter" && themeContent == 'song 2') {
        themeContent = 'song 2'
        document.documentElement.setAttribute('data-theme', 'default');
        themeContent.textContent = 'song 2'
        window.removeEventListener('keydown', audioPlay2)
        window.addEventListener('keydown', audioPlay)
        document.querySelectorAll('sound').style.display = "none";
        
    } else if (e.code == "Enter" && themeContent == 'song 1') {
        themeContent = 'song 1'
        document.documentElement.setAttribute('data-theme', 'song2');
        themeContent.textContent = 'song 1'
        window.removeEventListener('keydown', audioPlay)
        window.addEventListener('keydown', audioPlay2)
    }
}


// note avant d'aller dodo:
// A RAJOUTER : le faite que le boutton enter change de thème + le son + - fort
// mettre des commentaires
// ajouter le changement de mots




let vid = document.querySelectorAll('audio');

vid.forEach(element => {
    element.volume = 0.5;

    window.addEventListener('keydown',(e) =>
    {
        if (e.code === 'ArrowLeft'&& element.vol > 0) element.volume -= 0.1
    });


    window.addEventListener('keydown',(e) =>
    {
        if (e.code === "ArrowRight" && element.vol < 1) element.volume += 0.1
    });
});
