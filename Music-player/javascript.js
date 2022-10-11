var music=document.querySelector("audio");
var img=document.querySelector("img");
var play=document.getElementById("play");
var artist=document.getElementById("artist");
var title=document.getElementById("title");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var songs=[
    {
        name:"somiya-1",
        title:"Fitoor",
        artist:"Arijit",
    },{
        name:"somiya-2",
        title:"Ek mulaqaat",
        artist:"Ayushman",
    },{
        name:"somiya-3",
        title:"Aayat",
        artist:"Arijit",
    }
]
let isPlaying = false;
// for play function
const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
};
// for pause function
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play"); 
};
play.addEventListener("click",function(){
    if(isPlaying){
       // music.pause();
       pauseMusic();
    }
    else{
       // music.play();
       playMusic();
    }
});
const loadSong =(songs)=>{
    title.textContent= songs.title;
    artist.textContent= songs.artist;
    music.src=songs.title+ ".mp3";
    img.src=songs.title+".jpg";
   };
 
 songIndex=0;
   const nextSong=()=>{
      songIndex=(songIndex +1) % songs.length;
       loadSong(songs[songIndex]);
       playMusic();
   };
   const prevSong=()=>{
      songIndex=(songIndex -1+ songs.length)% songs.length;
       loadSong(songs[songIndex]);
       playMusic();
   };
 
   next.addEventListener('click', nextSong);
   prev.addEventListener('click', prevSong);
