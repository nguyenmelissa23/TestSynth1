use strict;

const auContext = new AudioContext();
const oscNode1 = auContext.createOscillator();
const oscNode2 = auContext.createOscillator();


const gainNode = auContext.createGain();
const delayNode = auContext.createDelay();

//INIT CALLERS
$(document).ready(function(){
    playStopBtn();
});




//ON EVENT FUNCTIONS
function playStopBtn(){
    $("playBtn").on("click", function(){
        //osc.frequency = paramsChange("");
        osc.connect(auContext.destination);
        osc.start();
    });
    
    $("stopBtn").on("click", function(){
        osc.stop(2);
    });

}

function paramsChange(elemName, paramName){
    $().on("input", function(){

    });
        
}


//FUNCTIONS 