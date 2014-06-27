# Tricks


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
