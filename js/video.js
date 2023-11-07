var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("video").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

// document.querySelector(#)



/* <div id="check">
    <label>
		<input type="checkbox" name="subscribe" id="subscribe" onclick = challenge1(this)> Check to toggle the email field. </input>
	</label>
</div> */