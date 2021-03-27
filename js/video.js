var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector(".video");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = video.volume*100+"%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if (video.currentTime > video.duration-15) {
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Going back to beginning")
		video.play();
	}
	else{
		video.currentTime += 15;
		video.play();
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100;
	volume.innerHTML = this.value + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});