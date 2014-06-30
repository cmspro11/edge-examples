# Play, Stop, Rewind the timeline

This file is an example for 

* Play a Symbols Timeline
* Stop the timeline playing 
* Play a timeline in reverse 

## Important

***Play***

Get a symbol with the edge api and play it's timeline

```javascript 
sym.getSymbol('sym_hello_world').play();

```

***Stop***

Stop it playing 

```javascript 
sym.getSymbol('sym_hello_world').stop();

```

***Rewind***

Rewind the position to 0 by setting position 0 and using stop()

```javascript 
sym.getSymbol('sym_hello_world').play(0);
sym.getSymbol('sym_hello_world').stop();
```
## References 

* [Edge docs Symbols](http://www.adobe.com/devnet-docs/edgeanimate/api/current/index.html#Use_symbol_elements)

