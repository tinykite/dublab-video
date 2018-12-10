function shuffleVideo() {
  const videoId = document.getElementById('video');
  const videoLink = videoId.getAttribute('src');
  const randNum = Math.floor(Math.random() * 4);  
	const newUrl = `${videoLink}&index=${randNum}`;
  videoId.src = newUrl;
  console.log(newUrl);
  console.log("this function has run")
}

shuffleVideo();

let player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
	// bind events
	const introContainer = document.querySelector('.intro-container');
  const videoContainer = document.querySelector('.video-container');
  const playButton = document.querySelector('.button');
  
  playButton.addEventListener("click", function() {                 
    player.playVideo();
    introContainer.classList.add("hidden");
    videoContainer.classList.remove("hidden");
  });
 
}
  
// Inject YouTube API script
const tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    