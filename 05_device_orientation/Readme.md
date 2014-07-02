# Orientation examples

This is an example for

* Reading the devices orientation 
* Reading the devices acceleration
* decoupling reading of acceleration and orientation from display (performance)
 
## Important

Device Orientation information is flowing through the browser whenever the user is moving or shaking the device in any way. This happens through a listener. Just like click , touch and swipe. All browsers on devices that are "mobile" should provide this event. Others dont.

You "wire it up" in the ***oncreationcomplete*** event and it is called whenever teh device is shaken (and even stired) 

This is 3 dimensional Space. So the values come in x,y and z fashion. 

```javascript 
window.addEventListener('devicemotion', function(event) {
    var x = event.acceleration.x;
    var y = event.accelerationy;
    var z = event.acceleration.z;
}        
```
Proper calculations take the earths gravitation in to account. So your computer is calculating this for you. 

```javascript 
window.addEventListener('devicemotion', function(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
}        
```

The thrid thing that might be important and is supported by some devices is rotation. 

* alpha
* beta
* gama

```javascript 
window.addEventListener('devicemotion', function(event) {   
    var r = event.rotationRate;
    r.alpha;
    r.beta;
    r.gamma;
}        
```

## Some hints

This event is fired very often. This means: What ever you are doing in there is done very often. Think of hundrets of a second. So make sure you are not accessinng anything else than pure Javascript. 
Using the $ function to get a symbol and change it in this function, is a bad idea performancewise. 
If you are looking for performance bottlenecks with your presentation, there is a high degree of a chance that ***devicemotion*** in conjunction with a call to $()  is the reason.

A good way to avoid this, is using a variable, outside of the devicemotion event as a storage and then accessint it in a way that you can control. This will cause a little more lag to the reaction of your compistions, but it wont degrade the perforcance of your ipad so hard.

This is a pretty nice way to ***exploit*** Javascripts variable system and use ***Scope*** 


```javascript 
var outsideStore = {};
window.addEventListener('devicemotion', function(event) {  
    var r = event.rotationRate;
    r.alpha;
    r.beta;
    r.gamma;
    outsideStore = r;    
    // donot nececarilly $ here. It is fucking expensive calculationwise and triggered a lot of times
}

// this will access teh value 10 times a second, or with 10HZ
window.setTimeout(100, function() {
  console.log(outSideStore);
});
```

Additionally, you can use another variable to track the changes from one call to another to only do something when the change is biger. 

### References 

* [Event Listeners]()
* [Events in Edge - API docs](http://www.adobe.com/devnet-docs/edgeanimate/api/current/index.html#Events)
* [Howto on Device orientation]()
