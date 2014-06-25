
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_ButBakery}","click",function(sym,e){sym.$("Home").hide();sym.$("Navigation").show();sym.$("Bakery").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Navigation}","click",function(sym,e){sym.stop(0);sym.$("Bakery").hide();sym.$("Gallery").hide();sym.$("Manison").hide();sym.$("Navigation").hide();sym.$("Home").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ButGallery}","click",function(sym,e){sym.$("Home").hide();sym.$("Navigation").show();sym.$("Gallery").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ButOldManison}","click",function(sym,e){sym.play("ZoomManison");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.$("Navigation").show();sym.$("Manison").show();var ManisonObject=sym.getSymbol("Manison");ManisonObject.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();sym.$("Home").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Navigation}","touchend",function(sym,e){sym.stop(0);sym.$("Bakery").hide();sym.$("Gallery").hide();sym.$("Manison").hide();sym.$("Navigation").hide();sym.$("Home").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ButOldManison}","touchend",function(sym,e){sym.play("ZoomManison");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ButGallery}","touchend",function(sym,e){sym.$("Home").hide();sym.$("Navigation").show();sym.$("Gallery").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ButBakery}","touchend",function(sym,e){sym.$("Home").hide();sym.$("Navigation").show();sym.$("Gallery").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Bakery'
(function(symbolName){})("Bakery");
//Edge symbol end:'Bakery'

//=========================================================

//Edge symbol: 'Navigation'
(function(symbolName){})("Navigation");
//Edge symbol end:'Navigation'

//=========================================================

//Edge symbol: 'Gallery'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_ImgGallery}","click",function(sym,e){sym.$("Home").hide();sym.$("Navigation").show();sym.$("Gallery").show();});
//Edge binding end
})("Gallery");
//Edge symbol end:'Gallery'

//=========================================================

//Edge symbol: 'Manison'
(function(symbolName){})("Manison");
//Edge symbol end:'Manison'
})(jQuery,AdobeEdge,"EDGE-251489839");