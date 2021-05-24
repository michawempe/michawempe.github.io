var video0 = document.getElementById("v0");
var video1 = document.getElementById("v1");
var video2 = document.getElementById("v2");
var video3 = document.getElementById("v3");
var video4 = document.getElementById("v4");

video0.src = "https://www.dropbox.com/s/q2bptjxflaxrckn/Corporate_1080_210517.mp4?raw=1";
video1.src = "https://www.dropbox.com/s/h9gjkjcnp9ugx2d/Magazin_1080_210517.mp4?raw=1";
video2.src = "https://www.dropbox.com/s/zekcgjjql5a71qr/Plakat_1080_210517.mp4?raw=1";
video3.src = "https://www.dropbox.com/s/2wnhupypihkpsq1/Bierdeckel_1080_210517.mp4?raw=1";
video4.src = "https://www.dropbox.com/s/evb44wf3pbouk8q/Generativ_1080_210517.mp4?raw=1";

window.onscroll = function() {
  if ((window.pageYOffset) <= (window.innerHeight * 2)) {
    video0.play();
    video1.pause();
  } else if ((window.pageYOffset) <= (window.innerHeight * 4)) {
    video0.pause();
    video1.play();
    video2.pause();
  } else if ((window.pageYOffset) <= (window.innerHeight * 6)) {
    video1.pause();
    video2.play();
    video3.pause();
  } else if ((window.pageYOffset) <= (window.innerHeight * 8)) {
    video2.pause();
    video3.play();
    video4.pause();
  } else {
    video3.pause();
    video4.play();
  }
};


// Navigation Box Indicator

document.onscroll = function( e ) {
  var animationBox = ((window.pageYOffset / (window.innerHeight * 2)) * (window.innerHeight / 5) - 8);
  document.getElementById("navigationBox").style.top = animationBox + "px";
};


// Text Box Show / Hide

function myFunction(value) {
  var x = document.getElementById("TextBox" + value);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
