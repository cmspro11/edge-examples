/***********************
* Adobe Edge Animate-Aktionen für Composition
*
* Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass 
* Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden, 
* damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "window", "orientationchange", function(sym, e) {
         console.log('change', syn, e);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {

         // execute code when you move the device
         window.addEventListener('devicemotion', function(event) {
             // how fast is it moving ? 
             var x = event.accelerationIncludingGravity.x;
             var y = event.accelerationIncludingGravity.y;
             var z = event.accelerationIncludingGravity.z;
             // how much did we rotate the ipad? 
             var r = event.rotationRate;
             // write into the animation
             var ele = sym.getSymbol('sym_quadrant').$('Rectangle');
             // acceleration is meassured in G
             sym.$('txt_x').html(x);
             sym.$('txt_y').html(y);
             sym.$('txt_z').html(z);
             // rotation
             sym.$('txt_alpha').html(r.alpha);
             sym.$('txt_beta').html(r.beta);
             sym.$('txt_gamma').html(r.gamma);
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_alpha'
   (function(symbolName) {   
   
   })("sym_alpha");
   //Edge symbol end:'sym_alpha'

   //=========================================================
   
   //Edge symbol: 'sym_quadrant'
   (function(symbolName) {   
   
   })("sym_quadrant");
   //Edge symbol end:'sym_quadrant'

})(jQuery, AdobeEdge, "EDGE-48440269");