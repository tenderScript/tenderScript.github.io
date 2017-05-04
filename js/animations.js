// Animations
window.onload = function() {
  animateWave(wave1, winWidth, 3000);
  animateWave(wave2, winWidth, 5000);
  animateWave(wave3, winWidth, 5000);
  animateWave(wave4, winWidth, 3000);
};

var winWidth = document.documentElement.clientWidth;
var startPath = "M-10 250 C 0 250, 1 250, 300 250 S 600 250, 1540 250";
var startPath2 = "M-10 250 C 0 250, 600 250, 300 250 S 1 250, 1540 250";
var grad3 = Snap('.wave3').gradient("l(0.5, 0, .5, 1)#3994E5-#8062FF-#9758FF");

var wave1= Snap('.wave1').path([startPath]).attr({
  stroke: "#f8f8f8",
  strokeWidth: 200,
});

var wave2= Snap('.wave2').path([startPath]).attr({
  stroke: "#8062FF",
  strokeWidth: 200,
  opacity: .6
});

var wave3= Snap('.wave3').path([startPath2]).attr({
  stroke: grad3,
  strokeWidth: 200,
  opacity: .3
});

var wave4= Snap('.wave4').path([startPath]).attr({
  stroke: "#f8f8f8",
  strokeWidth: 200,
  fill: "none"
});

//Improve this gross function
function animateWave(waveNum, width, miliSec) {
  var time = miliSec;
  var length = width + 100;
  var lengthEnd = width + 200;

  if (waveNum == wave1 ) {
    var Path1 = "M-10 275 C 0 275, 200 175, 400 175 S 600 250, " + length + " 275";
    var Path2 = "M-10 300 C 0 300, 400 200, 700 175 S 1100 300, " + length + " 275";
    var Path3 = "M-10 275 C 0 275, 600 225, 900 175 S 1200 175, " + length + " 300";
    var Path4 = "M-10 275 C 0 275, 800 250, 1200 175 S 1400 175, " + length + " 275";
    var Path5 = "M-10 275 C 0 275, 1200 300, 1400 300 S 1600 300, " + lengthEnd + " 300";
  };

  if (waveNum == wave2 ) {
    var Path1 = "M-10 275 C 0 275, 100 150, 300 175 S 500 250, " + length + " 275";
    var Path2 = "M-10 300 C 0 300, 300 175, 500 150 S 700 300, " + length + " 275";
    var Path3 = "M-10 275 C 0 275, 500 250, 700 175 S 900 150, " + length + " 300";
    var Path4 = "M-10 275 C 0 275, 700 275, 900 200 S 1200 150, " + length + " 250";
    var Path5 = "M-10 275 C 0 275, 900 250, 1100 200 S 1500 150, " + lengthEnd + " 150";
  };

  if (waveNum == wave3 ) {
    var Path1 = "M-10 275 C 0 275, 1200 300, 1400 300 S 1600 300, " + lengthEnd + " 300";
    var Path2 = "M-10 275 C 0 275, 800 250, 1200 175 S 1400 175, " + length + " 275";
    var Path3 = "M-10 275 C 0 275, 600 225, 900 175 S 1200 175, " + length + " 300";
    var Path4 = "M-10 300 C 0 300, 400 250, 600 175 S 900 200, " + length + " 275";
    var Path5 = "M-10 250 C 0 250, 100 150, 300 175 S 600 275, " + length + " 300";
  };

  if (waveNum == wave4) {
    var Path1 = "M-10 275 C 0 275, 200 200, 400 200 S 600 250, " + length + " 275";
    var Path2 = "M-10 300 C 0 300, 400 225, 700 200 S 1100 275, " + length + " 250";
    var Path3 = "M-10 275 C 0 275, 600 250, 900 200 S 1200 200, " + length + " 250";
    var Path4 = "M-10 275 C 0 275, 800 225, 1200 200 S 1500 225, " + length + " 250";
    var Path5 = "M-10 275 C 0 275, 1200 250, 1400 250 S 1600 275, " + lengthEnd + " 275";
  };

  waveNum.animate({ d: Path1 }, miliSec);

  setTimeout(function(){
    waveNum.animate({ d: Path2 }, miliSec);
  }, miliSec);

  setTimeout(function(){
    waveNum.animate({ d: Path3 }, miliSec);
  }, time * 2);


  setTimeout(function(){
    waveNum.animate({ d: Path4 }, miliSec);
  }, time * 3);

  setTimeout(function(){
    waveNum.animate({ d: Path5 }, miliSec);
  }, time * 4);

  setTimeout(function(){
    waveNum.animate({ d: startPath }, miliSec);
  }, time * 5);

  return setTimeout(function(){
    animateWave(waveNum, width, miliSec);
  }, time * 6)
};

/*improving
function animatePath(waveNum, pathObj, miliSec) {
  var wave1= Snap('.wave1').path([pathObj[0]]).attr({
    fill: "#f8f8f8",
    stroke: "#f8f8f8",
    strokeWidth: 200
  });

  for (var i = 0; i < pathObj.length; i++) {
    setTimeout(function(){
      waveNum.animate({ d: pathObj[i] }, miliSec);
    }, (miliSec * i));
  };

  return setTimeout(function(){
    animatepath(waveNum, pathObj, miliSec);
  }, (miliSec * (pathObj.length + 1)))
};


var path1 = [
  "M-10 250 C 0 250, 1 250, 300 250 S 600 250, " + winWidth + " 250",
  "M-10 275 C 0 275, 200 175, 400 175 S 600 250, " + winWidth + " 275",
  "M-10 300 C 0 300, 400 200, 700 175 S 1100 300, " + winWidth + " 275",
  "M-10 275 C 0 275, 600 225, 900 175 S 1200 175, " + winWidth + " 300",
  "M-10 275 C 0 275, 800 250, 1200 175 S 1400 175, " + winWidth + " 275",
  "M-10 275 C 0 275, 1200 300, 1400 300 S 1600 300, " + ( winWidth + 300 ) + " 300"
];

*/
