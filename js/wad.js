var saw = new Wad({
    source  : 'sawtooth', //i.e. type
    volume  : 1.0, //i.e. gain
    pitch   : 'A4', //
    detune  : 0, 
    
    env     : {
        attack  : 0.0, //time in seconds from onset to peak volume. (common: 0.05 - 0.3)
        decay   : 0.0, //time in seconds from peak volume to sustain volume
        sustain : 1.0, //sustain volume level. percentage of the peak volume (between 0 - 1)
        hold    : 3.14,
        release : 1.0, //time in seconds from the end of the hold period to zero volume 
    }, 

    filter  : {
        type        : 'lowpass', //type of filter
        frequency   : 400,//i.e. cutoff
        q           : 1, // default at 1 (0-10)
        env         : {
            frequency   : 800, //if set, slide from filter.freq to filter.env.freq
            attack      : 0.5 //time in seconds to do ^
        }
    }, 

    reverb     : {
        wet     : 1, 
        impulse :   
    }
});