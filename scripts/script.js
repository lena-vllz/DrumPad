const displayText = document.querySelector('.words')
const less = document.querySelector('.key29')
const more = document.querySelector('.key30')
const enter = document.querySelector('.key22')
let themeContent = 'song 1'
const keys = document.querySelectorAll('.box')
const change = document.querySelectorAll('.sound')
const words1 =['♫♫','work it', 'make it','do it','make us','♫♫','harder','better','faster','stronger','song 2','♫♫','more than', 'hour', 'our','never', '♫♫','ever','after','work is','over','♫♫','work it','make it','do it', 'make us', '♫♫']
const words2 =['♫♫','♫♫','pain','made me','made me','believer','believer','♫♫','pain','break me','song 1','build me','believer','believer','pain','bullets fly','rain','my life', 'my love','my drive','came from','♫♫','pain','made me','made me','believer',"believer"]

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
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

// change theme & play audio
window.addEventListener("keydown", changeTheme)
window.addEventListener('click', changeTheme)
window.addEventListener('keydown', audioPlay)


// Function that display different theme colors and song
function changeTheme(e) {
    if (e.code == "Enter" && themeContent == 'song 2') {
        themeContent = 'song 1'
        document.documentElement.setAttribute('data-theme', 'default');
        themeContent.textContent = 'song 2'
        // Remove the seconde audio on keydown
        window.removeEventListener('keydown', audioPlay2)
        // Put the new audio  on keydown
        window.addEventListener('keydown', audioPlay)

        for (i = 0 ; i < words1.length; i++) {
            change[i].textContent = words1[i]
        }
        box.removeEventListener('click', audioClick2)
        box.addEventListener('click', audioClick)
        
    } else if (e.code == "Enter" && themeContent == 'song 1') {
        themeContent = 'song 2'
        document.documentElement.setAttribute('data-theme', 'song2');
        themeContent.textContent = 'song 1'
        
        box.removeEventListener('keydown', audioPlay)
        box.addEventListener('keydown', audioPlay2)

        for (i = 0 ; i < words2.length; i++) {
            change[i].textContent = words2[i]
        }
        
        // Remove the first audio on click
        box.removeEventListener('click', audioClick)
       
         // Put the new audio  on click
        box.addEventListener('click', audioClick2)
    }
}

function changeThemeClick(box) {
    if (box.classList[1] == 'key22' && themeContent == 'song 2') {
        themeContent = 'song 1'
        document.documentElement.setAttribute('data-theme', 'default');
        themeContent.textContent = 'song 2'
        // Remove the seconde audio on keydown
        window.removeEventListener('keydown', audioPlay2)
        // Put the new audio  on keydown
        window.addEventListener('keydown', audioPlay)

        for (i = 0 ; i < words1.length; i++) {
            change[i].textContent = words1[i]
        }
        changeEvent1()
        
    } else if (box.classList[1] == 'key22' && themeContent == 'song 1') {
        themeContent = 'song 2'
        document.documentElement.setAttribute('data-theme', 'song2');
        themeContent.textContent = 'song 1'
        box.removeEventListener('keydown', audioPlay)
        box.addEventListener('keydown', audioPlay2)

        for (i = 0 ; i < words2.length; i++) {
            change[i].textContent = words2[i]
        }
        changeEvent2()
    }
}
// ON CLICKKKKKK

changeEvent1()

function changeEvent1() {
    keys.forEach(box => {
        box.removeEventListener('click', audioClick2)
        box.addEventListener("click", audioClick)
    })
}

function changeEvent2() {
    keys.forEach(box => {
        box.removeEventListener('click', audioClick)
        box.addEventListener("click", audioClick2)
    })
}

function audioClick() { 
    console.log(this.classList[1])
    if(this.classList[1]=='key22'){
        changeThemeClick(this)
    }
    const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`)
    if(!audio) return;
    audio.play()
    audio.currentTime = 0
    const nameAudio = audio.getAttribute('data-id')
    displayText.textContent = nameAudio
    this.classList.add('playing')
}

function audioClick2() { 
    console.log(this.classList[1])
    const audio = document.querySelector(`audio[data-info="${this.getAttribute('data-key')}"]`)
    if(this.classList[1]=='key22'){
        changeThemeClick(this)
    }
    if(!audio) return;
    audio.play()
    audio.currentTime = 0
    const nameAudio = audio.getAttribute('data-id')
    displayText.textContent = nameAudio
    this.classList.add('playing')
}

//volume management
let volum = document.querySelectorAll('audio');

volum.forEach(element => {
    //define the volume
    element.volume = 0.5;

    window.addEventListener('keydown',(e) =>
    {
        //left arrow lowers the volume by 0.1
        if (e.code === 'ArrowLeft') element.volume -= 0.1
        
    });

    window.addEventListener('keydown',(e) =>
    {
        console.log(e.code);
        
        //right arrow raises the volume by 0.1
        if (e.code === "ArrowRight") element.volume += 0.1
    });
    keys.forEach(box => {
        box.addEventListener('click',() =>
        {
            if (box.classList[1] === 'key29') element.volume -= 0.1
            if (box.classList[1] === 'key30') element.volume += 0.1
        });
    })
});



