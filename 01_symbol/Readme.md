# Using Symbols with Javascript 

An example for

* Putting Elements inside a Symbol
* Naming conventions for symbols, and other elements
* accessing a symbols timeline

## Important 

You can get a symbol by its name and control it's timeline

```javascript
sym.getSymbol('sym_hello_world').stop();
````

You can interact with the symbol using jQuery vir the $ member variable. 

```javascript
sym.getSymbol('sym_hello_world').$
````

## Naming conventions

It's good practice to name your symbols and elements using a scheme. If a prefix by elementtype is used the naming can be quite consistent. This avoids glitches in code and helps you coding. The naming scheme is loosely modeled after the so called [hungarian notation](http://en.wikipedia.org/wiki/Hungarian_notation).

## References 

* [Adobe Edge Docusmentation /Symbols](http://www.adobe.com/devnet-docs/edgeanimate/api/current/index.html#Edge_Animate_symbols)