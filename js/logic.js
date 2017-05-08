$("#playKick").on("click", function(){
	console.log("Stop...");
	if (window.playing == true) {
		window.playing = false;
		Tone.Transport.stop();
	}
});

$("#stopKick").on("click", function(){
    console.log("Stop...");
    if (window.playing == true) {
        window.playing = false;
        Tone.Transport.stop();
    }
});

