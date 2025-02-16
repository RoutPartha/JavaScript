

//Initialize the variables
let songIndex=0;
let audioElement=new Audio('Song/Perfect.mp3');
let masterPaly=document.getElementById('masterPaly');
let myProgressBar=document.getElementById('myProcessBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
//here we using Array.form() because it is a html Collection
//if we are not use then face error in for each loop
//because html collection is not iterable

let songs=[
    {songname: "Perfect", filePath: "Song/Perfect.mp3", coverPath: "Cover/cover1.jpg"},
    {songname: "Abhi Mujh Mein Kahin",filePath: "Song/Abhi Mujh Mein Kahin.mp3",coverPath:"Cover/cover2.jpg"},
    {songname: "Bulleya",filePath: "Song/Bulleya.mp3",coverPath:"Cover/cover3.jpg"},
    {songname: "Dooron Dooron",filePath: "Song/Dooron Dooron.mp3",coverPath:"Cover/cover4.jpg"},
    {songname: "Behroopia",filePath: "Song/Behroopia.mp3",coverPath:"Cover/cover55.jpg"},
    {songname: "Tere Naina",filePath: "Song/Tere Naina.mp3",coverPath: "Cover/cover6.jpg"},
    {songname: "Tum Tak",filePath: "Song/Tum Tak.mp3",coverPath: "Cover/cover7.jpg"},
    {songname: "Dhalti Rahe",filePath: "Song/Dhalti Rahe.mp3",coverPath: "Cover/cover8.jpg"},
    {songname: "Finding Her",filePath: "Song/Finding Her.mp3",coverPath: "Cover/cover9.jpg"},
    {songname: "Lutt Putt Gaya",filePath: "Song/Lutt Putt Gaya.mp3",coverPath: "Cover/cover10.jpg"}

]

songItem.forEach((Element,i)=>{
    console.log(Element,i);
    Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    Element.getElementsByClassName('songname')[0].innerText = songs[i].songname;

    // Correct way to update the song name:
    // let songNameElement = Element.querySelector('.songname'); // Select within the current element
    // if (songNameElement) {  //check if element exist or not
    //     songNameElement.innerText = songs[i].songname;
    // } else {
    //     console.error("Song name element not found for song:", songs[i].songname);
    // }
});


//audioElement.play();

//handle Play/Pause click
masterPaly.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("Song Played");
        
        masterPaly.classList.remove('fa-play-circle');
        masterPaly.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        console.log("Song Paused");
        masterPaly.classList.remove('fa-pause-circle');
        masterPaly.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
 })

 myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
        element.classList.remove('fa-pause-circle'); // Remove pause
        element.classList.add('fa-play-circle');
    });

 }
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       // console.log(e.target);
       makeAllPlays(); // Call this FIRST to reset all other play icons
       let index=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       
       //audioElement.src = songs[index].filePath;
       //audioElement.src =`songs / ${index + 1}.mp3`;
    //    console.log(songs[index].filePath);
       audioElement.src = songs[index+1].filePath;
       audioElement.currentTime=0;
       audioElement.play();
       masterPaly.classList.remove('fa-play-circle');
       masterPaly.classList.add('fa-pause-circle');

    });

 });