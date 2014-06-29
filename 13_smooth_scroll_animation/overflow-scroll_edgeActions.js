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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_button}", "click", function(sym, e) {
         sym.$("wrapper").animate({scrollTop: 0, scrollLeft: 0 }, 1000, "swing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buttonCopy}", "click", function(sym, e) {
         sym.$("wrapper").animate({scrollTop: 200, scrollLeft: 200 }, 1000, "swing");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'wrapper'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button}", "click", function(sym, e) {
         sym.getParentSymbol().$("wrapper").animate({scrollTop: 0, scrollLeft: 0}, 1000, "swing");

      });
      //Edge binding end

   })("wrapper");
   //Edge symbol end:'wrapper'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
   })("button");
   //Edge symbol end:'button'

})(jQuery, AdobeEdge, "EDGE-99296395");