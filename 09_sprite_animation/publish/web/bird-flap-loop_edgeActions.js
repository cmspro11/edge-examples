
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_bird_flap}","click",function(sym,e){var pos=sym.getPosition()
if(pos>=4000)
{sym.play(5000);sym.getSymbol("bird_flap").play("flying_cycle");}
else
{sym.play(0);sym.getSymbol("bird_flap").play("flying_cycle");};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.stop();sym.getSymbol("bird_flap").stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","swiperight",function(sym,e){sym.play(0);sym.getSymbol("bird_flap").play("flying_cycle");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9500,function(sym,e){sym.getSymbol("bird_flap").stop();sym.stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","swipeleft",function(sym,e){sym.play(5000);sym.getSymbol("bird_flap").play("flying_cycle");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bird_flap}","touchend",function(sym,e){var pos=sym.getPosition()
if(pos>=4000)
{sym.play(5000);sym.getSymbol("bird_flap").play("flying_cycle");}
else
{sym.play(0);sym.getSymbol("bird_flap").play("flying_cycle");};});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'bird_flap'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play("flying_cycle");});
//Edge binding end
})("bird_flap");
//Edge symbol end:'bird_flap'
})(jQuery,AdobeEdge,"EDGE-7689244");