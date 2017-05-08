var keyboard = new QwertyHancock({
    id: "keyboard",
    width: 600,
    height: 150,
    octaves: 2
});

//Keys events
keyboard.keyDown = function(note, frequency){
    console.log('Note', note, 'has been pressed');
    console.log('Its frequency is', frequency);
};

keyboard.keyUp = function(note, frequency){
    console.log('Note', note, 'has been released');
    console.log('Its frequency was', frequency);
};

//Oscillators:

var context = new AudioContext();
keyboard.keyDown = function(note, frequency){
    var osc = context.createOscillator();

    osc.connect(context.destination);

    osc.start(context.currentTime);
    osc.stop(context.currentTime + 0.1);
}