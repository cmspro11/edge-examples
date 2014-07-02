/***********************
 * Adobe Edge Animate-Aktionen für Composition
 *
 * Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass
 * Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden,
 * damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

    //Edge symbol: 'stage'
    (function (symbolName) {


        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
            yepnope({
                load: [
             './bower_components/hammerjs/hammer.js'
             ],
                complete: init
            });
            //when yepnope has loaded everything execute init();
            function init() {


                var meta = '<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">';
                $("head").append(meta);

                sym.$('Stage').html('init');

                // this config options can set some details for the swipe events
                // like e.g. swipe speed
                // see https://github.com/EightMedia/hammer.js/wiki/Getting-Started
                var hammertime = Hammer(document, {
                    swipe: true,
                    swipeMaxTouches: 1,
                    swipeMinTouches: 1,
                    // smaller value leads to earlier swiping
                    swipeVelocityX: 0.1,
                    swipeVelocityY: 0.1
                });
                
                // IMPORTANT: prevent the default behaviour
                hammertime.on("touchstart", function (evt) {
                    evt.preventDefault();
                });

                // do something on tap 
                hammertime.on("tap", function (evt) {
                    logGesture("tap");
                });
                // do something on swipeup
                hammertime.on("swipeup", function (evt) {
                    logGesture("swipeup");
                });
                // swipedown
                hammertime.on("swipedown", function (evt) {
                    logGesture("swipedown");
                });
                
                // do something on left swipe
                hammertime.on("swipeleft", function (evt) {
                    logGesture("swipeleft");
                });
                // swipedown
                hammertime.on("swiperight", function (evt) {
                    logGesture("swiperight");
                });
                
                var logGesture = function (gesture) {
                        var old = sym.$('Stage').html();
                        sym.$('Stage').html(old + ' ' + gesture);
                }
            }

        });
        //Edge binding end

    })("stage");
    //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-194720349");