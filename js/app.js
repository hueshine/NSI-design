
const music = new Audio('http://nsi.edu.np/images/audio/NSI_Nick_Simons_Institute-26.mp3')


const audios = [
    {
        id: '01',
        audioName: 'Karmayogi ka Katha <br> Episode 23'
    },
    {
        id: '02',
        audioName: 'Karmayogi ka Katha <br> Episode 22'
    }
]

Array.from(document.getElementsByClassName('.podcast')).forEach((element , i)=>{
    element.getElementsByTagName('.desc')[0].innerHTML = audios[i].audioName;
})

let playOnClick = document.getElementById('fa-play');

playOnClick.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        playOnClick.classList.add('fa-pause');
        playOnClick.classList.remove('fa-play');
    } 
    else {
        music.pause();
        playOnClick.classList.add('fa-play');
        playOnClick.classList.remove('fa-pause');
    }
})


// const playAll = () =>{
//     Array.from(document.getElementsByClassName('play-button')).forEach((element)=>{
//         element.classList.add('bi-play-circle-fill');
//         element.classList.remove('bi-pause-circle-fill');
//     })  
// }

// let index = 0;

// Array.from(document.getElementsByClassName('play-button')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         index = e.target.id;
//         playAll();
//         e.target.classList.remove('bi-play-circle-fill');
//         e.target.classList.add('bi-pause-circle-fill');
//         // music.src = 'audio/${index}.mp3';
//         music.play();
//     })
//     playOnClick.classList.add('fa-play');
//     playOnClick.classList.remove('fa-pause');
//     music.addEventListener('ended', ()=>{        
//         playOnClick.classList.add('fa-pause');
//         playOnClick.classList.remove('fa-play');
//     })
// })