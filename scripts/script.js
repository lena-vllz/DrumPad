const displayText = document.querySelector('.words')
const less = document.querySelector('.key29')
const more = document.querySelector('.key30')


displayText.textContent = 'Welcome'
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    const nameAudio = audio.getAttribute('data-id')
    displayText.textContent = nameAudio
}); 
function removeTransition(e)
const keys = document.querySelectorAll('.box')
keys.forEach(key => key.addEventListener('transitionend',removeTransition)
    )






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