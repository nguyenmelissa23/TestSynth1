console.log("loading tone_player.js");

//=========== Links for Drum MP3 ===============
// http://audiosoundclips.com/audio-sound-clips-drums/

var context;
var _isPlaying=false;
var currentSource;

window.addEventListener('load', checkBrowserSupport, false);
function checkBrowserSupport() {
	console.log("checkBrowserSupport");
	try {
	// Fix up for prefixing
	window.AudioContext = window.AudioContext||window.webkitAudioContext;
	context = new AudioContext();
	}
	catch(e) {
	alert('Web Audio API is not supported in this browser');
	}
}


//====LOADING BUFFER FILES============
window.onload = init;
var context;
var bufferLoader;
var bufferList;
var sourceArray = [];

function init() {
	console.log("window.init()");
  // Fix up prefixing
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	context = new AudioContext();
	bufferList = [
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3',
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum2.mp3',
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum3.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum4.mp3',
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum5.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum6.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum7.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum8.mp3',
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum9.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum10.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum11.mp3',
		'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum12.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2012/01/Drum13.mp3', 
		'http://audiosoundclips.com/wp-content/uploads/2012/01/Drum14.mp3',
		'http://audiosoundclips.com/wp-content/uploads/2012/01/Drum15.mp3' 

	];

	bufferLoader = new BufferLoader(
	context,
	bufferList,
	finishedLoading
	);

	bufferLoader.load();
}

function finishedLoading(bufferList) {
  // Create two sources and play them both together
  	console.log("finishedLoading()");
	for (var i = 0; i < bufferList.length; i++){
		var newSource = context.createBufferSource();
		newSource.buffer = bufferList[i];
		var trackNum = i+1;
		var sourceObj = {
			name: ("Track " + trackNum), 
			source: newSource
		};
		sourceArray.push(sourceObj);
	}
	console.log("sourceArray: ", sourceArray);
}


// ======== START/STOP TRACKS=========================
(function(){
	createOptionElement();

	$("#trackName").on("input", function(){
		console.log("changing track....");
		if (_isPlaying){
			startTrack();
		}
		$("#startTrack").on("click", function(){
			startTrack();
		});
 
	});

	$("#stopTrack").on("click", function(){
			stopTrack();
	});
})();

function startTrack(){
	if (_isPlaying == false){
		var trackName = $("#trackName").val();
		for (var i = 0; i < sourceArray.length; i ++){
			if (sourceArray[i].name === trackName){
				currentSource = sourceArray[i].source;
				currentSource.connect(context.destination);
				currentSource.start();
				_isPlaying = true;
			}
		}
	}
	console.log("_isPlaying", _isPlaying);
}

function stopTrack(){
	console.log("stopTrack()");
	if (_isPlaying == true){
		currentSource.stop(2);
		_isPlaying = false;
	}
	console.log("_isPlaying", _isPlaying);
}

// Append option elements from the sourceArray:
function createOptionElement(){
	console.log("createOptionElement");
	for ( var i = 0; i < sourceArray.length; i++){
		var optionHTML = "<option>"+ sourceArray[i].name +"</option>";
		console.log(optionHTML);
		$("#trackDropBar").append(optionHTML);
	}
}