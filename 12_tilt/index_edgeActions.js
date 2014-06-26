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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         
         
         
         //Detect if the browser supports DeviceMotionEvent
         if (window.DeviceMotionEvent != undefined) {
         
         	//ondevicemotion is fired when iOS device detects motion
         	window.ondevicemotion = function(e) {
         		//ax is the movement on the x axis.
         		//This motion is used to move the ship in the game
         		ax = event.accelerationIncludingGravity.x * 5;
         		ay = event.accelerationIncludingGravity.y * 5;
         
         		//Status 0 is start, 1 is left, 2 is right, 3 is stay
         		if(status == 0){ //initial condition
         			status = 3; //stay
         			sym.$("txt_test").html("Status: mitte (start)");
         
         			sym.getSymbol("sym_rect_grun").$('rect_grun').show();
         
         			sym.getSymbol("sym_rect_rot").$('rect_rot').show();
         
         		}
         
         		if(ax > 14 && status != 2){ //move right on device
         			status = 2;
         			sym.$("txt_test").html("Status: oben");
         
         			sym.getSymbol("sym_rect_grun").$('rect_grun').hide();
         
         		}
         
         		if(ax < -14 && status != 1){ //move left on device   
         			status = 1;   
         			sym.$("txt_test").html("Status: unten");
         
         			sym.getSymbol("sym_rect_rot").$('rect_rot').hide();
         		} 
         
         		if(ax > -14 && ax < 14 && status != 3){ //device held steady
         			status = 3;
         			sym.$("txt_test").html("Status: mitte");
         
         			sym.getSymbol("sym_rect_grun").$('rect_grun').show();
         
         			sym.getSymbol("sym_rect_rot").$('rect_rot').show();
         
         		}
         	}
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_rect'
   (function(symbolName) {   
   
   })("sym_rect");
   //Edge symbol end:'sym_rect'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-577324421");