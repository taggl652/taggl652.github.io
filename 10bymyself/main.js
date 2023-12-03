let vid = document.getElementById("danceVideo");
let track = document.getElementById("track");
let poem = document.getElementById("poem");
let heading = document.getElementById("heading");
let nav1 = document.getElementById("landing")
let nav2 = document.getElementById("previous");

// create variable tracks of position
let pos1 = document.getElementById("pos1");
let pos2 = document.getElementById("pos2");
let pos3 = document.getElementById("pos3");
let pos4 = document.getElementById("pos4");
let pos5 = document.getElementById("pos5");
let pos6 = document.getElementById("pos6");
let pos7 = document.getElementById("pos7");
let pos8 = document.getElementById("pos8");

//clear video function
function clear(){
    vid.style.opacity = "0";
    track.style.opacity = "1";
    poem.style.opacity = "0";
    heading.style.opacity = "1";
    navOn();
}

function navOff(){
    nav1.style.opacity = "0";
    nav2.style.opacity = "0";
}

function navOn(){
    nav1.style.opacity = "1";
    nav2.style.opacity = "1";
}

//individual track and video functions
function video1(){
    vid.style.opacity = "1";
    poem.innerHTML = "it's been almost six months";
    poem.style.opacity = "1";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video2(){
    vid.src = "assets/dancingbymyself02.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "since i let my body dance again";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video3(){
    vid.src = "assets/dancingbymyself03.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "since it was finally ready";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video4(){
    vid.src = "assets/dancingbymyself04.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "to fall in love again";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video5(){
    vid.src = "assets/dancingbymyself05.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "with freely inspired movement";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video6(){
    vid.src = "assets/dancingbymyself06.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "void of limitations from self";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video7(){
    vid.src = "assets/dancingbymyself07.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "i learned to move with others";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video8(){
    vid.src = "assets/dancingbymyself08.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "so now i'm not afriad to move alone";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

//indiivdual track and video event listeners
pos1.addEventListener("mouseover", video1);
pos1.addEventListener("mouseout", clear);

pos2.addEventListener("mouseover", video2);
pos2.addEventListener("mouseout", clear);

pos3.addEventListener("mouseover", video3);
pos3.addEventListener("mouseout", clear);

pos4.addEventListener("mouseover", video4);
pos4.addEventListener("mouseout", clear);

pos5.addEventListener("mouseover", video5);
pos5.addEventListener("mouseout", clear);

pos6.addEventListener("mouseover", video6);
pos6.addEventListener("mouseout", clear);

pos7.addEventListener("mouseover", video7);
pos7.addEventListener("mouseout", clear);

pos8.addEventListener("mouseover", video8);
pos8.addEventListener("mouseout", clear);


