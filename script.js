console.log("script loading...");

// var music = new Audio("bgm/orginal.mp3");
var isFlipped = false;

function flipCard(element) {
    console.log("click has happened!");
    console.log(element.src);
    // print();
    if(!isFlipped) {
        element.src="images/pot-of-greed.jpg";
        isFlipped = true;
    } else {
        element.src="images/back.png";
        isFlipped = false;
    }
}

function playSound() {
    console.log("playing sound");
    document.querySelector("audio").play();
}

function stopSound() {
    console.log("stopping sound");
    document.querySelector("audio").pause();
}

// TODO - how long we've been nyaaning counter?