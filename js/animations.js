// Animations
// var winWidth = document.documentElement.clientWidth;
// var winPlus = winWidth + 200;
// var startPath = "M-10 250 C 0 250, 1 250, 300 250 S 600 250, " + winWidth + " 250";
//
// var wave1 = Snap('.wave1').path([startPath]).attr({
//   stroke: "#f8f8f8",
//   strokeWidth: 200,
//   fill: "none",
// });
//
// var wave2 = Snap('.wave2').path([startPath]).attr({
//   stroke: "#8062FF",
//   strokeWidth: 200,
//   fill: "none",
//   opacity: .6
// });
//
// var wave3 = Snap('.wave3').path([startPath]).attr({
//   stroke: "#3994E5",
//   strokeWidth: 200,
//   fill: "none",
//   opacity: .3
// });
//
// var wave4 = Snap('.wave4').path([startPath]).attr({
//   stroke: "#f8f8f8",
//   strokeWidth: 200,
//   fill: "none"
// });
//
// var wave5 = Snap('.wave5').path([startPath]).attr({
//   stroke: "#8062FF",
//   strokeWidth: 200,
//   fill: "none",
//   opacity: .5
// });
//
// var wavePath1 = [
//   ("M-10 275 C 0 275, 200 175, 400 175 S 600 250, " + winWidth + " 275"),
//   ("M-10 300 C 0 300, 400 200, 700 175 S 1100 300, " + winWidth + " 275"),
//   ("M-10 275 C 0 275, 600 225, 900 175 S 1200 175, " + winWidth + " 300"),
//   ("M-10 275 C 0 275, 800 250, 1200 175 S 1400 175, " + winWidth + " 275"),
//   ("M-10 275 C 0 275, 1200 300, 1400 300 S 1600 300, " + winPlus + " 300")
// ];
//
// var wavePath2 = [
//   ("M-10 275 C 0 275, 150 175, 400 175 S 600 250, " + winWidth + " 275"),
//   ("M-10 300 C 0 300, 350 200, 700 175 S 1100 300, " + winWidth + " 275"),
//   ("M-10 275 C 0 275, 550 225, 900 175 S 1200 175, " + winWidth + " 300"),
//   ("M-10 275 C 0 275, 750 250, 1200 175 S 1400 175, " + winWidth + " 275"),
//   ("M-10 275 C 0 275, 1150 300, 1400 300 S 1600 300, " + winPlus + " 300")
// ];
//
// var wavePath3 = [
//   ("M-10 275 C 0 275, 1200 300, 1400 300 S 1600 300, " + winPlus + " 300"),
//   ("M-10 275 C 0 275, 800 250, 1200 175 S 1400 175, " + winWidth + " 275"),
//   ("M-10 275 C 0 275, 600 225, 900 175 S 1200 175, " + winWidth + " 300"),
//   ("M-10 300 C 0 300, 400 250, 600 175 S 900 200, " + winWidth + " 275"),
//   ("M-10 250 C 0 250, 100 150, 300 175 S 600 275, " + winWidth + " 300")
// ];
//
// var wavePath4 = [
//   ("M-10 275 C 0 275, 200 200, 400 200 S 600 250, " + winPlus + " 275"),
//   ("M-10 300 C 0 300, 400 225, 700 200 S 1100 275, " + winPlus + " 250"),
//   ("M-10 275 C 0 275, 600 250, 900 200 S 1200 250, " + winPlus + " 250"),
//   ("M-10 250 C 0 250, 800 225, 1100 200 S 1400 250, " + winPlus + " 250"),
//   ("M-10 275 C 0 275, 1200 250, 1400 250 S 1600 275, " + winPlus + " 275")
// ];
//
// var wavePath5 = [
//   ("M-10 275 C 0 275, 200 200, 400 200 S 600 250, " + winPlus + " 275"),
//   ("M-10 300 C 0 300, 400 225, 700 200 S 1100 275, " + winPlus + " 250"),
//   ("M-10 275 C 0 275, 600 250, 900 200 S 1200 250, " + winPlus + " 250"),
//   ("M-10 250 C 0 250, 800 225, 1100 200 S 1400 250, " + winPlus + " 250"),
//   ("M-10 275 C 0 275, 1200 250, 1400 250 S 1600 275, " + winPlus + " 275")
// ];
//
// //Improve this function
// function animateWave(waveNum, wavePath, miliSec) {
//   var time = miliSec;
//
//   waveNum.animate({ d: wavePath[0] }, miliSec);
//
//   setTimeout(function(){
//     waveNum.animate({ d: wavePath[1] }, miliSec);
//   }, miliSec);
//
//   setTimeout(function(){
//     waveNum.animate({ d: wavePath[2] }, miliSec);
//   }, time * 2);
//
//   setTimeout(function(){
//     waveNum.animate({ d: wavePath[3] }, miliSec);
//   }, time * 3);
//
//   setTimeout(function(){
//     waveNum.animate({ d: wavePath[4] }, miliSec);
//   }, time * 4);
//
//   setTimeout(function(){
//     waveNum.animate({ d: startPath }, miliSec);
//   }, time * 5);
//
//   return setTimeout(function(){
//     animateWave(waveNum, wavePath, miliSec);
//   }, time * 6)
// };
// window.onload = function() {
//   animateWave(wave1, wavePath1, 3000);
//   animateWave(wave2, wavePath2, 5000);
//   animateWave(wave3, wavePath3, 5000);
//   animateWave(wave4, wavePath4, 4000);
//   animateWave(wave5, wavePath5, 6000);
// };
