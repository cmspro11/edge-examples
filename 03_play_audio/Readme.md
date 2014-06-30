# Paly Audio

This is an example for 

* loading mp3 files in to your composition with code
* playing the sounds 
* stopping other sounds
* storing data in symbols for latrer use with 'getVariable'

## Important 

Loading can be done in ***creationComplete***
```javascript 
// use the audio api 
var adobesound=new Audio();
// where is the audio in the file system 
adobesound.src="assets_audio/01.mp3";
// get me the symbol, that i want to attach the audio to 
var sym_track_1 = sym.getSymbol('sym_track_1');
// store audio in the symbol for later re-use
sym_track_1.setVariable('audio', adobesound);
```

You can store the loaded element in the symbol for later re-use 

```javascript 
    var sym_track_1 = sym.getSymbol('sym_track_1');
    sym_track_1.setVariable('audio', anyVariableThatMightBeSound);
```

Playing a sound is just getting the variable and playing it like you would with a timeline

```javascript 
sym.getSymbol('sym_track_1').getVariable('audio').play();
```

Stopping it is same of different ;)

```javascript 
sym.getSymbol('sym_track_1').getVariable('audio').stop();
```

Rewind and play

```javascript 
var audio = sym.getSymbol('sym_track_1').getVariable('audio'); 
audio.currentTime = 0; 
audio.play();
```

You can pause the playback

```javascript 
sym.getSymbol('sym_track_1').getVariable('audio').pause();
```

## References

*[Audo API](http://www.adobe.com/devnet-docs/edgeanimate/api/current/index.html#audio) 
