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

let body = document.querySelector("body");
let poem = document.querySelector(".poem");
let heading = document.querySelector(".heading");
let lines = document.querySelector(".lines");

function videoOne(){
    video1.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "it's been almost 6 months";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }
  function videoOneOff(){
    video1.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
  }
  
  function videoTwo(){
    video2.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "since i let my body dance again";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }

  function videoTwoOff(){
    video2.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
  }
  
  function videoThree(){
    video3.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "since it was finally ready";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }
  function videoThreeOff(){
    video3.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
  }
  
  function videoFour(){
    video4.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "to fall in love again";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }
  function videoFourOff(){
    video4.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
  }
  
  function videoFive(){
    video5.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "with freely inspired movement";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }
  function videoFiveOff(){
    video5.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
  }
  
  function videoSix(){
    video6.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "void of limitations from self";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }
  function videoSixOff(){
    video6.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
  }
  
  function videoSeven(){
    video7.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "i learned to move with others";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }
  function videoSevenOff(){
    video7.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
  }
  
  function videoEight(){
    video8.classList.add("videoOn");
    document.getElementById("poem").innerHTML = "so now i'm not afraid to move alone";
    poem.classList.add("poemColor");
    heading.classList.add("headingOpacity");
    lines.classList.add("headingOpacity");
  }
  function videoEightOff(){
    video8.classList.remove("videoOn");
    poem.classList.remove("poemColor");
    heading.classList.remove("headingOpacity");
    lines.classList.remove("headingOpacity");
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
