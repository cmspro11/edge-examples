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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
         yepnope({nope:['js/jquery-ui-1.10.4.custom.min.js', 'js/jquery.ui.touch-punch.min.js'], complete: init});
         
         
         function init(){
         
         	//Use the code! Draggable! Droppable!!
         	sym.$('kaese').draggable({opacity:.5, revert:'invalid'});
         	sym.$('brot').draggable();
         	//Droppable... on the target!
         	sym.$('brot').droppable({drop: function() {sym.getSymbol("kaese").play();}});
         	sym.$('UrsprungKaese').droppable({
         		accept: sym.$('kaese'),
         		drop: function(){
         		}
         		}
         	);
         
         
         }
         

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'kaese_klein'
   (function(symbolName) {   
   
   })("kaese");
   //Edge symbol end:'kaese'

   //=========================================================
   
   //Edge symbol: 'brot'
   (function(symbolName) {   
   
   })("brot");
   //Edge symbol end:'brot'

})(jQuery, AdobeEdge, "EDGE-49428076");