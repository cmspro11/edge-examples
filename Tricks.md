# Tricks

* [Edge, the GPU and Perforance](http://therichwebexperience.com/blog/terry_ryan/2013/03/adobe_edge_animate_and_the_gpu)
* [Performance Animation Howto](https://gist.github.com/KrofDrakula/3639830)
* [Loading external Javascript the easy way](http://chrisgannon.wordpress.com/2012/09/01/loading-external-javascript-in-adobe-edge-animate-the-easy-way/)


## Avoid Zoom

```   
<meta name="viewport" 
  content="width=device-width, initial-scale=1.0, user-scalable=no">
```
### Avoid Scrolling 

```
document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false);
``` 
