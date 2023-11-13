
let video = document.querySelector(".backgroundvideo");

let video1 = document.querySelector(".backgroundvideoOne");
let video2 = document.querySelector(".backgroundvideoTwo");
let video3 = document.querySelector(".backgroundvideoThree");
let video4 = document.querySelector(".backgroundvideoFour");
let video5 = document.querySelector(".backgroundvideoFive");
let video6 = document.querySelector(".backgroundvideoSix");
let video7 = document.querySelector(".backgroundvideoSeven");
let video8 = document.querySelector(".backgroundvideoEight");

let lineOne = document.querySelector(".lineOne");
let lineTwo = document.querySelector(".lineTwo");
let lineThree = document.querySelector(".lineThree");
let lineFour = document.querySelector(".lineFour");
let lineFive = document.querySelector(".lineFive");
let lineSix = document.querySelector(".lineSix");
let lineSeven = document.querySelector(".lineSeven");
let lineEight = document.querySelector(".lineEight");


function videoOn() {
  video.classList.add("videoOn");
}

function videoOne(){
  video1.classList.add("videoOn");
}
function videoOneOff(){
  video1.classList.remove("videoOn");
}

function videoTwo(){
  video2.classList.add("videoOn");
}
function videoTwoOff(){
  video2.classList.remove("videoOn");
}

function videoThree(){
  video3.classList.add("videoOn");
}
function videoThreeOff(){
  video3.classList.remove("videoOn");
}

function videoFour(){
  video4.classList.add("videoOn");
}
function videoFourOff(){
  video4.classList.remove("videoOn");
}

function videoFive(){
  video5.classList.add("videoOn");
}
function videoFiveOff(){
  video5.classList.remove("videoOn");
}

function videoSix(){
  video6.classList.add("videoOn");
}
function videoSixOff(){
  video6.classList.remove("videoOn");
}

function videoSeven(){
  video7.classList.add("videoOn");
}
function videoSevenOff(){
  video7.classList.remove("videoOn");
}

function videoEight(){
  video8.classList.add("videoOn");
}
function videoEightOff(){
  video8.classList.remove("videoOn");
}



function changeTextColor(){
  lines.classList.toggle("textColor");
}

function revertTextColor(){
  lineOne.classList.remove("textColor");
}

function videoOff(){
  video.classList.remove("videoOn");
}



lineOne.addEventListener("mouseover", videoOne);
lineOne.addEventListener("mouseover", changeTextColor);
lineOne.addEventListener("mouseout", videoOneOff);
lineOne.addEventListener("mouseout", revertTextColor);


lineTwo.addEventListener("mouseover", videoTwo);
lineTwo.addEventListener("mouseover", changeTextColor);
lineTwo.addEventListener("mouseout", videoTwoOff);
lineTwo.addEventListener("mouseout", revertTextColor);


lineThree.addEventListener("mouseover", videoThree);
lineThree.addEventListener("mouseover", changeTextColor);
lineThree.addEventListener("mouseout", videoThreeOff);
lineThree.addEventListener("mouseout", revertTextColor);


lineFour.addEventListener("mouseover", videoFour);
lineFour.addEventListener("mouseover", changeTextColor);
lineFour.addEventListener("mouseout", videoFourOff);
lineFour.addEventListener("mouseout", revertTextColor);

lineFive.addEventListener("mouseover", videoFive);
lineFive.addEventListener("mouseover", changeTextColor);
lineFive.addEventListener("mouseout", videoFiveOff);
lineFive.addEventListener("mouseout", revertTextColor);

lineSix.addEventListener("mouseover", videoSix);
lineSix.addEventListener("mouseover", changeTextColor);
lineSix.addEventListener("mouseout", videoSixOff);
lineSix.addEventListener("mouseout", revertTextColor);

lineSeven.addEventListener("mouseover", videoSeven);
lineSeven.addEventListener("mouseover", changeTextColor);
lineSeven.addEventListener("mouseout", videoSevenOff);
lineSeven.addEventListener("mouseout", revertTextColor);

lineEight.addEventListener("mouseover", videoEight);
lineEight.addEventListener("mouseover", changeTextColor);
lineEight.addEventListener("mouseout", videoEightOff);
lineEight.addEventListener("mouseout", revertTextColor);