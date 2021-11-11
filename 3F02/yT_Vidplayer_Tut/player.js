// JavaScript source code
//from https://www.youtube.com/watch?v=kXBs8Jd4_Q0

const myVideo = document.getElementById('myVideo');
const btnPlay = document.getElementById('btnPlay');
const btnNext = document.getElementById('btnNext');

let timer = null;

btnPlay.addEventListener('click', vidAction);
myVideo.addEventListener('click', vidAction);
btnNext.addEventListener('click', nextVideo);

//vids

//samples https://samplelib.com/sample-mp4.html
const vids = ["sample-5s.mp4", "sample-10s.mp4"];
let vidPlaying = 0;

function vidAction(event){
	switch(event.target.id){
		case "btnPlay" :
		playVideo();
		break;
	}
}
function playVideo(){
	myVideo.play();
}

function nextVideo(){
	if (vidPlaying < 1){
		vidPlaying++;
	} else {
		vidPlaying = 0;
	}
	myVideo.src = "videos/" + vids[vidPlaying];
}

//from https://stackoverflow.com/questions/11171781/full-screen-video-toggle-html

function goFullscreen(id) {
  var element = document.getElementById(id);       
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }  
}