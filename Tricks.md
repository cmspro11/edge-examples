# Tricks

* [Edge, the GPU and Perforance](http://therichwebexperience.com/blog/terry_ryan/2013/03/adobe_edge_animate_and_the_gpu)

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
