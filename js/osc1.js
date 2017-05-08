
let auContext1 = new AudioContext();
let osc1 = new auContext1.createOscillator();




$("#waveformVal1").on("input", function(){
    waveformVal = $("#waveformVal1").value;
    console.log("waveformVal", waveformVal);
    osc1.type.value = waveformVal;
    osc1.connect(auContext1.destination);
    playSound();
});


function playSound(){
    start();
}

