/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_ButBakery}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("Home").hide();
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Bakery").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Navigation}", "click", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);
         
         // Hide an Element.
         sym.$("Bakery").hide();
         sym.$("Gallery").hide();
         sym.$("Manison").hide();
         sym.$("Navigation").hide();
         // Show an Element.
         sym.$("Home").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ButGallery}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("Home").hide();
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Gallery").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ButOldManison}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("ZoomManison");
         
         /*
         // insert code for mouse click here
         // Hide an Element.
         sym.$("Home").hide();
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Manison").show();
         
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var ManisonObject = sym.getSymbol("Manison");
         ManisonObject.play();
         */
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Manison").show();
         
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var ManisonObject = sym.getSymbol("Manison");
         ManisonObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         
         // insert code for mouse click here
         // Hide an Element.
         sym.$("Home").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Navigation}", "touchend", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);
         
         // Hide an Element.
         sym.$("Bakery").hide();
         sym.$("Gallery").hide();
         sym.$("Manison").hide();
         sym.$("Navigation").hide();
         // Show an Element.
         sym.$("Home").show();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ButOldManison}", "touchend", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("ZoomManison");
         
         /*
         // insert code for mouse click here
         // Hide an Element.
         sym.$("Home").hide();
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Manison").show();
         
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var ManisonObject = sym.getSymbol("Manison");
         ManisonObject.play();
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ButGallery}", "touchend", function(sym, e) {
         // Hide an Element.
         sym.$("Home").hide();
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Gallery").show();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ButBakery}", "touchend", function(sym, e) {
         // Hide an Element.
         sym.$("Home").hide();
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Gallery").show();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Bakery'
   (function(symbolName) {   
   
   })("Bakery");
   //Edge symbol end:'Bakery'

   //=========================================================
   
   //Edge symbol: 'Navigation'
   (function(symbolName) {   
   
   })("Navigation");
   //Edge symbol end:'Navigation'

   //=========================================================
   
   //Edge symbol: 'Gallery'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ImgGallery}", "click", function(sym, e) {
         // Hide an Element.
         sym.$("Home").hide();
         // Show an Element.
         sym.$("Navigation").show();
         sym.$("Gallery").show();
         
         

      });
      //Edge binding end

   })("Gallery");
   //Edge symbol end:'Gallery'

   //=========================================================
   
   //Edge symbol: 'Manison'
   (function(symbolName) {   
   
   })("Manison");
   //Edge symbol end:'Manison'

})(jQuery, AdobeEdge, "EDGE-251489839");