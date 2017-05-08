const auContext = new AudioContext();
const oscNode = auContext.createOscillator();

var SOUND = {
    auContext : new AudioContext(),

};

$(document).ready(function(){
    playStopBtn();
});

//ON EVENT FUNCTIONS
function playStopBtn(){
    $(".playBtn").on("click", function(){
        oscNode.frequency = 600;
        oscNode.connect(auContext.destination);
        oscNode.start();
    });
    
    $(".stopBtn").on("click", function(){
        oscNode.stop(2);
    });

}