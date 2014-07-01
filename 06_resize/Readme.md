# Resize

Adobe Edge example to show

* How the resize event is watched 
* Use different layouts on interaction
* Load a external library (edge commons)

## Important

Loading a external library is piece of cake with ***yepnope***. This loads ***Edge Comons*** a dirty little Javascript helper, aimed directly at stuff that should be in Edge, but is not. 

```Javascript
     yepnope({
        // first loading teh code from a external url
        load:'http://simonwidjaja.github.com/EdgeCommons/live/EdgeCommons-0.4.0.js',	
        // then remember the callback
        callback: function (){		
            EC.setAdaptiveLayouts([768, 1024]);
            EC.applyAdaptiveLayout(sym, "adaptiveContainer");
        }

     });
```

Special Attention needs the ***callback*** to set up EC aka Edge Commons

```Javascript
callback: function (){		
// tel commons to use layouts at this page width 
EC.setAdaptiveLayouts([768, 1024]);
// link the adaptive layout ot a specific container
EC.applyAdaptiveLayout(sym, "adaptiveContainer");
}
```

The Metatag ***viewport*** can be used to spread the page 100% of the browser window. This code adds a ***viewport*** metatag to the head section of your page and makes sure you are using 100% of the screen. 

```javascript 
//This is crucial in that it makes the page 100% of the device's width - if you remove this the resize code won't work
var meta1 = "<meta content='minimum-scale=1, width=device-width, maximum-scale=1, user-scalable=yes' name='viewport' />" ;   
$(meta1).appendTo("body");

```

When ever the orientation of the device is changed, this piece of code is executed and sets the text inside a symbol.  

```Javascript 
sym.$("orientText").html("New orientation is: "+e.target.orientation);
```

## References 

* [Edge Commons download and documentation]()
* [yepnope documentation]()
* [Window resize event docs]()
* [Viewport Metatag Documentation]()
* [Adobe Edge API using Symbols]()