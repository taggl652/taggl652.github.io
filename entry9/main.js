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

  lineOne.addEventListener("mouseover", videoOne);
lineOne.addEventListener("mouseout", videoOneOff);


lineTwo.addEventListener("mouseover", videoTwo);
lineTwo.addEventListener("mouseout", videoTwoOff);


lineThree.addEventListener("mouseover", videoThree);
lineThree.addEventListener("mouseout", videoThreeOff);


lineFour.addEventListener("mouseover", videoFour);
lineFour.addEventListener("mouseout", videoFourOff);

lineFive.addEventListener("mouseover", videoFive);
lineFive.addEventListener("mouseout", videoFiveOff);

lineSix.addEventListener("mouseover", videoSix);
lineSix.addEventListener("mouseout", videoSixOff);

lineSeven.addEventListener("mouseover", videoSeven);
lineSeven.addEventListener("mouseout", videoSevenOff);

lineEight.addEventListener("mouseover", videoEight);
lineEight.addEventListener("mouseout", videoEightOff);