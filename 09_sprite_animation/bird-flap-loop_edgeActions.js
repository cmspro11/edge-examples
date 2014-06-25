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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_bird_flap}", "click", function(sym, e) {
         // insert code for mouse click here
         
         var pos = sym.getPosition()
         if (pos >= 4000)
           {
         	sym.play(5000);
         	sym.getSymbol("bird_flap").play("flying_cycle");
           }
          else
           {
         	sym.play(0);
         	sym.getSymbol("bird_flap").play("flying_cycle");
           };

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // stops bird’s wing flapping
         sym.stop();
         sym.getSymbol("bird_flap").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         sym.play(0);
         sym.getSymbol("bird_flap").play("flying_cycle");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // stops bird’s wing flapping
         sym.getSymbol("bird_flap").stop();
         
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element
         sym.play(5000);
         sym.getSymbol("bird_flap").play("flying_cycle");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bird_flap}", "touchend", function(sym, e) {
         // insert code to be run when a user stops touching an object (for touch devices only)
         
         var pos = sym.getPosition()
         if (pos >= 4000)
           {
         	sym.play(5000);
         	sym.getSymbol("bird_flap").play("flying_cycle");
           }
          else
           {
         	sym.play(0);
         	sym.getSymbol("bird_flap").play("flying_cycle");
           };

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bird_flap'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flying_cycle");

      });
      //Edge binding end

   })("bird_flap");
   //Edge symbol end:'bird_flap'

})(jQuery, AdobeEdge, "EDGE-7689244");