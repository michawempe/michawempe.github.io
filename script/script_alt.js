// Play / Pause Video

var video0 = document.getElementById("v0");
var video1 = document.getElementById("v1");
var video2 = document.getElementById("v2");
var video3 = document.getElementById("v3");
var video4 = document.getElementById("v4");

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

var clicked = false;

function myFunction(value) {
  var x = document.getElementById("TextBox" + value);
  if (x.style.display === "none") {
    x.style.display = "block";
    clicked = true;
  } else {
    x.style.display = "none";
    clicked = false;
  }
}

function hoverFunction(value) {
  var x = document.getElementById("TextBox" + value);
  x.style.display = "block";
}

function hoverFunctionOut(value) {
  var x = document.getElementById("TextBox" + value);
  if (clicked == true) {
    x.style.display = "block";
  } else if (clicked == false){
    x.style.display = "none";
  }
}
