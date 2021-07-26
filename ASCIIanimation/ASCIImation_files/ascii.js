var timer;
var speed = 250;

window.onload = function() {
    'use strict'; 
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var turbo = document.getElementById("turbo");
    var fontSize = document.getElementById("fontsize");
    var textArea = document.getElementById("text-area");
    var animationOption = document.getElementById("animation");

    textArea.classList.toggle(fontSize.value);

    start.onclick = function() {
        document.getElementById("stop").disabled = false;
        startAnimation();
    };

    stop.onclick = function() {
        document.getElementById("stop").disabled = true;
        stopAnimation();
    };
   
    turbo.onchange = function() {
        if(this.checked === true)
        speed = 50;
        else
        speed = 250;
    }

    fontSize.onchange = function() {
        textArea.classList = "";
        textArea.classList.toggle(this.value);
    }

    animationOption.onchange = function() {
        stopAnimation();
        if(!stopElement.disabled)
            startAnimation();
    }
}

function startAnimation() {
    var selectedAnimation = document.getElementById("animation").value;
    var frame = ANIMATIONS[selectedAnimation];
    var frameSeq = "";

    if(frame.indexOf("\r\n") != -1)
        frameSeq = frame.split("=====\r\n");
    else
        frameSeq = frame.split("=====\n");

    var currentFrame = 0;
    nextFrame(frameSeq, currentFrame);
}

function nextFrame(frameSeq, currentFrame) {
    document.getElementById("text-area").value = frameSeq[currentFrame]
    currentFrame = (currentFrame + 1) % frameSeq.length;

    timer = setTimeout(nextFrame, speed, frameSeq, currentFrame);
}

function stopAnimation() {
    document.getElementById("text-area").value = "";
    clearTimeout(timer);
}
