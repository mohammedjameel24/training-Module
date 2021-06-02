var video = document.getElementById("video");

var timeStarted = -1;
var timePlayed = 0;
var duration = 0;
// If video metadata is laoded get duration
if (video.readyState > 0)
  getDuration.call(video);
//If metadata not loaded, use event to get it
else {
  video.addEventListener('loadedmetadata', getDuration);
}
// remember time user started the video
function videoStartedPlaying() {
  timeStarted = new Date().getTime() / 1000;
}
function videoStoppedPlaying(event) {
  duration = video.duration - 10;
  // Start time less then zero means stop event was fired vidout start event
  if (timeStarted > 0) {
    var playedFor = new Date().getTime() / 1000 - timeStarted;
    timeStarted = -1;
    // add the new number of seconds played
    timePlayed += playedFor;
  }

  document.getElementById("remaining").innerHTML = Math.round(duration) - Math.round(timePlayed) + " " + "seconds";
  // Count as complete only if end of video was reached
  if (timePlayed >= duration && event.type == "ended") {
    document.getElementById("status").className = "complete";
    document.getElementsByTagName('input')[0].removeAttribute('disabled');
    document.getElementsByTagName('input')[1].removeAttribute('disabled');
    document.getElementsByTagName('input')[2].removeAttribute('disabled');
    document.getElementsByTagName('textarea')[0].removeAttribute('disabled');

    document.getElementById('day1un').className = "";
  }
}

function getDuration() {
  duration = video.duration;
  console.log("Duration: ", duration);
}


video.addEventListener("play", videoStartedPlaying);
video.addEventListener("playing", videoStartedPlaying);

video.addEventListener("ended", videoStoppedPlaying);
video.addEventListener("pause", videoStoppedPlaying);
