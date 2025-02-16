

//Initialize the variables
let songIndex=0;
let audioElement=new Audio('Song/Perfect.mp3');
let masterPaly=document.getElementById('masterPaly');
let myProgressBar=document.getElementById('myProcessBar');

let songs=[
    {songname: "Perfect", filePath: "Song/Perfect.mp3", coverPath: "cover1.jpg"},
    {songname: "Song 1",filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
    {songname: "Song 1",filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
    {songname: "Song 1",filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
    {songname: "Song 1",filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
    {songname: "Song 1",filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
]


//audioElement.play();

//handle Play/Pause click
masterPaly.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("Song Played");
        
        masterPaly.classList.remove('fa-play-circle');
        masterPaly.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        console.log("Song Paused");
        masterPaly.classList.remove('fa-pause-circle');
        masterPaly.classList.add('fa-play-circle');
    }
});
//Listen to Events
 myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update seekbar
 })
