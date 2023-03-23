import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-player-website';
  ngOnInit(){
    let progress:any=document.getElementById("progress");
    let song:any=document.getElementById("song");
    let ctrlIcon:any=document.getElementById("ctrlIcon");

    song.onloadedmetadata=function(){
      progress.max=song.duration;
      progress.value=song.currentTime;
    }
    progress.onchange=function(){
      song.play();
      song.currentTime=progress.value;
      ctrlIcon.classList.add("fa-pause");
     ctrlIcon.classList.remove("fa-play");
    }
  
  if(song.play()){
     setInterval(()=>{
      progress.value=song.currentTime;
    },5000)
  }
  }
  playPause(){
    debugger
    let ctrlIcon:any=document.getElementById("ctrlIcon");
    let song:any=document.getElementById("song");
    if(ctrlIcon.classList.contains("fa-pause")){
     song.pause();
     ctrlIcon.classList.remove("fa-pause");
     ctrlIcon.classList.add("fa-play");
    }
    else{
      song.play();
      ctrlIcon.classList.remove("fa-play");
      ctrlIcon.classList.add("fa-pause");
   
    }
  }
  
}
