var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
// play button //
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});
// pause button //
document.querySelector("#pause").addEventListener("click",function() {
	video.pause();
	console.log("Video Paused")
})
// slow down button //
document.querySelector("#slower").addEventListener("click",function() {
	video
})

// volume slider //
let volume = document.querySelector("#slider")



