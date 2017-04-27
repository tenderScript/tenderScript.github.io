// Animations


window.onload = function() {

  animateWave1(winWidth, 2000);
  //animateWave2(2, 5000);
};

var winWidth = document.documentElement.clientWidth;
var startPath = "M-10 250 C 0 250, 1 250, 300 250 S 600 250, 1540 250";
var wave1= Snap('.wave1').path([startPath]).attr({
  fill: "#f8f8f8",
  stroke: "#f8f8f8",
  strokeWidth: 200
});
/*

var wave2= Snap('.wave1').path([startPath]).attr({
  fill: "#995CFF",
  stroke: "#995CFF",
  strokeWidth: 200
});

*/
function animateWave1(width, miliSec) {
  var x = width + 100;
  var time = miliSec;
  var Path1 = "M-10 275 C 0 275, 200 175, 400 175 S 600 250, " + winWidth + " 275";
  var Path2 = "M-10 300 C 0 300, 400 200, 700 175 S 1100 300, " + winWidth + " 275";
  var Path3 = "M-10 275 C 0 275, 600 225, 900 175 S 1200 175, " + winWidth + " 300";
  var Path4 = "M-10 275 C 0 275, 800 250, 1200 175 S 1400 175, " + winWidth + " 275";
  var Path5 = "M-10 275 C 0 275, 1200 300, 1400 300 S 1600 300, 1740 300";

  console.log("1");
  wave1.animate({ d: Path1 }, miliSec);

  setTimeout(function(){
    console.log("2");
    wave1.animate({ d: Path2 }, miliSec);
  }, miliSec);

  setTimeout(function(){
    console.log("3");
    wave1.animate({ d: Path3 }, miliSec);
  }, time * 2);


  setTimeout(function(){
    console.log("4");
    wave1.animate({ d: Path4 }, miliSec);
  }, time * 3);

  setTimeout(function(){
    console.log("5");
    wave1.animate({ d: Path5 }, miliSec);
  }, time * 4);

  setTimeout(function(){
    console.log("6");
    wave1.animate({ d: startPath }, miliSec);
  }, time * 5);

  return setTimeout(function(){
    animateWave1(2, miliSec);
  }, time * 6)
};
/*

function animateWave2(width, miliSec) {
  var x = width;
  var time = miliSec;
  var Path1 = "M-10 150 C 0 150, 200 150, 400 150 S 600 250, 1540 250";
  var Path2 = "M-10 200 C 0 200, 400 200, 700 150 S 1100 250, 1540 250";
  var Path3 = "M-10 150 C 0 150, 600 200, 900 150 S 1300 150, 1540 150";
  var Path4 = "M-10 250 C 0 250, 800 200, 1100 150 S 2500 150, 1540 250";
  var Path5 = "M-10 250 C 0 250, 1600 250, 1800 250 S 2000 250, 2940 250";

  wave2.animate({ d: Path1 }, miliSec);

  setTimeout(function(){
    wave2.animate({ d: Path2 }, miliSec);
  }, miliSec);

  setTimeout(function(){
    wave2.animate({ d: Path3 }, miliSec);
  }, time * 2);


  setTimeout(function(){
    wave2.animate({ d: Path4 }, miliSec);
  }, time * 3);

  setTimeout(function(){
    wave2.animate({ d: Path5 }, miliSec);
  }, time * 4);

  setTimeout(function(){
    wave2.animate({ d: startPath }, miliSec);
  }, time * 5);

  return setTimeout(function(){
    animateWave2(2, miliSec);
  }, time * 6)
};

*/

/*
var startPath = "M-10 150 C 0 150, 1 150, 300 150 S 600 150, 1540 150";
var wave2= Snap('.wave1').path([startPath]).attr({
  fill: "#f8f8f8",
  stroke: "#f8f8f8",
  strokeWidth: 100
});

function animateWave2(width, miliSec) {
  var x = width;
  var time = miliSec;
  var Path1 = "M-10 175 C 0 175, 200 100, 400 100 S 600 150, 1540 150";
  var Path2 = "M-10 200 C 0 200, 400 200, 700 100 S 1100 150, 1540 150";
  var Path3 = "M-10 175 C 0 175, 600 200, 900 125 S 1300 125, 1540 175";
  var Path4 = "M-10 150 C 0 150, 800 200, 1100 125 S 1500 125, 1540 150";
  var Path5 = "M-10 150 C 0 150, 1600 150, 1800 150 S 2000 150, 2940 150";

  wave2.animate({ d: Path1 }, miliSec);

  setTimeout(function(){
    wave2.animate({ d: Path2 }, miliSec);
  }, miliSec);

  setTimeout(function(){
    wave2.animate({ d: Path3 }, miliSec);
  }, time * 2);


  setTimeout(function(){
    wave2.animate({ d: Path4 }, miliSec);
  }, time * 3);

  setTimeout(function(){
    wave2.animate({ d: Path5 }, miliSec);
  }, time * 4);

  setTimeout(function(){
    wave2.animate({ d: startPath }, miliSec);
  }, time * 5);

  return setTimeout(function(){
    animateWave2(2, miliSec);
  }, time * 6)
};
*/
