var frameNumber = 0, // start video at frame 0
// lower numbers = faster playback

// video 1

playbackConstOne = 800,
// get page height from video duration
setHeight = document.getElementById("set-height"),
// select video element
vidOne = document.getElementById('v0');
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vidOne.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vidOne.duration) * playbackConstOne + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlayOne(){
  var frameNumber  = (window.pageYOffset - 70)/playbackConstOne;
  vidOne.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayOne);
}
window.requestAnimationFrame(scrollPlayOne);

// video 2

playbackConstTwo = 1300,
setHeight = document.getElementById("set-height"),
vidTwo = document.getElementById('v1');
vidTwo.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vidTwo.duration) * playbackConstTwo + "px";
});
function scrollPlayTwo(){
  var frameNumber  = (window.pageYOffset - 4140)/playbackConstTwo;
  vidTwo.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayTwo);
}
window.requestAnimationFrame(scrollPlayTwo);

// video 3

playbackConstThree = 2200,
setHeight = document.getElementById("set-height"),
vidThree = document.getElementById('v2');
vidThree.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vidThree.duration) * playbackConstThree + "px";
});
function scrollPlayThree(){
  var frameNumber  = (window.pageYOffset - 8210)/playbackConstThree;
  vidThree.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayThree);
}
window.requestAnimationFrame(scrollPlayThree);

// video 4

playbackConstFour = 1800,
setHeight = document.getElementById("set-height"),
vidFour = document.getElementById('v3');
vidFour.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vidFour.duration) * playbackConstFour + "px";
});
function scrollPlayFour(){
  var frameNumber  = (window.pageYOffset - 12480)/playbackConstFour;
  vidFour.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayFour);
}
window.requestAnimationFrame(scrollPlayFour);

// video 5

playbackConstFive = 1800,
setHeight = document.getElementById("set-height"),
vidFive = document.getElementById('v4');
vidFive.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vidFive.duration) * playbackConstFive + "px";
});
function scrollPlayFive(){
  var frameNumber  = (window.pageYOffset - 16450)/playbackConstFive;
  vidFive.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayFive);
}
window.requestAnimationFrame(scrollPlayFive);

document.onmousewheel = function( e ) {
  var animationBox = (window.pageYOffset / 4070) * (window.innerHeight / 5);
  document.getElementById("navigationBox").style.top = animationBox + "px";
};
