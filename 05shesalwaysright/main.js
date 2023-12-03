let vid = document.getElementById("danceVideo");
let track = document.getElementById("track");
let poem = document.getElementById("poem");
let heading = document.getElementById("heading");
let nav1 = document.getElementById("landing")
let nav2 = document.getElementById("previous");
let nav3 = document.getElementById("next");

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
    nav3.style.opacity = "0";
}

function navOn(){
    nav1.style.opacity = "1";
    nav2.style.opacity = "1";
    nav3.style.opacity = "1";
}

//individual track and video functions
function video1(){
    vid.style.opacity = "1";
    poem.innerHTML = "i feel a grogginess possess my bones";
    poem.style.opacity = "1";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video2(){
    vid.src = "assets/shesalwaysright02.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "floating down those subway steps";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video3(){
    vid.src = "assets/shesalwaysright03.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "'will this dance be worth it'";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video4(){
    vid.src = "assets/shesalwaysright04.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "what a foolish thing to fear";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video5(){
    vid.src = "assets/shesalwaysright05.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "the ability to move expressively";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video6(){
    vid.src = "assets/shesalwaysright06.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "holds value that transcends meaning";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video7(){
    vid.src = "assets/shesalwaysright07.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "i remember my previous fragility";
    track.style.opacity = "0";
    heading.style.opacity = "0";
    navOff();
}

function video8(){
    vid.src = "assets/shesalwaysright08.mp4";
    vid.style.opacity = "1";
    poem.style.opacity = "1";
    poem.innerHTML = "and no longer will it limit my freedom";
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


