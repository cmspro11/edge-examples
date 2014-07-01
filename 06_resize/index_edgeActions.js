/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "window", "resize", function(sym, e) {
         // insert code for resize event here
         EC.applyAdaptiveLayout(sym, "adaptiveContainer");
         sym.$("dispText").html("New window size is: "+e.target.outerWidth);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         yepnope({
         
         	load:'http://simonwidjaja.github.com/EdgeCommons/live/EdgeCommons-0.4.0.js',	
         	callback: function (){		
         		EC.setAdaptiveLayouts([768, 1024]);
         		EC.applyAdaptiveLayout(sym, "adaptiveContainer");
            }
         
         });
         
         //This is crucial in that it makes the page 100% of the device's width - if you remove this the resize code won't work
         var meta1 = "<meta content='minimum-scale=1, width=device-width, maximum-scale=1, user-scalable=yes' name=\"viewport\" />" ;   
         $(meta1).appendTo("body");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({
         	nope:[
         		'greensock/TweenMax.js',
         		'greensock/easing/EasePack.js',
         		'greensock/plugins/CSSPlugin.js',
         		'greensock/plugins/ColorPropsPlugin.js',
         		'greensock/TimelineMax.js'
         	],
         	complete: init	
         });
         
         function init (){
         
         	//When a symbol is added to the stage make the number fade up		
         	Symbol.bindSymbolAction(compId, "layout768", "creationComplete", function(sym, e) {
         		TweenMax.from(sym.$("numText"), 1, {delay:0.5, css:{alpha:0}});
         	});
         	Symbol.bindSymbolAction(compId, "layout1024", "creationComplete", function(sym, e) {
         		TweenMax.from(sym.$("numText"), 1, {delay:0.5, css:{alpha:0}});
         	});
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "window", "orientationchange", function(sym, e) {
         sym.$("orientText").html("New orientation is: "+e.target.orientation);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'layout400'
   (function(symbolName) {   
   
   })("layout768");
   //Edge symbol end:'layout768'

   //=========================================================
   
   //Edge symbol: 'layout400_1'
   (function(symbolName) {   
   
   })("layout1024");
   //Edge symbol end:'layout1024'

})(jQuery, AdobeEdge, "EDGE-34537025");