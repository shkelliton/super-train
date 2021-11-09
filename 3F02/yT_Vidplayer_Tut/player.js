// JavaScript source code
const myVideo = document.getElementById('myVideo');
const btnPlay = document.getElementById('btnPlay');
const timeOut = document.getElementById('timeOut');
let timer = null;

btnPlay.addEventListener('click', vidAction);
myVideo.addEventListener('click', vidAction);

//vids

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