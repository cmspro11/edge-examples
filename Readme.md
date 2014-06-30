# Example Adobe Edge Animate Files with Javascript

This repo contains specific Examples for adobe edge animate

## The Examples

* [Working with Symbols using Javascript](01_symbol/Readme.md)
* [Play stop and rewind thw timeline, using Javascript](02_play_stop_rewind/Readme.md)
* [Play audio using code](03_play_audio)
* [How to scoll on a very big backgorund](04_2_axis_movement/Readme.md)
* [Use device orientation](05_device_orientation/Readme.md)
* [Do something when the browser resizes](06_resize/Readme.md)
* [React on the user shaking the device](07_shake_js/Readme.md)
* [(Make specific settings for IOS and iPads](08_iOS_webapp_settings/Readme.md)
* [Use sprite animations](09_sprite_animation/Readme.md)
* [Drag and drop items](10_drag_drop/Readme.md)
* [Zoo to scene on a click](11_zoom_to_scene/Readme.md)
* [Check device tilt and act on it](12_tilt/Readme.md)
* [Scroll smooth](13_smooth_scroll_animation/Readme.md)

## More Documentation 

* [Libraries to use with Edge](Libs.md)
* [Tricks](Tricks.md)

## Commands to use in this Repo 

This repo comes with some handy tools that help you with development. Before you are using this see ***setup***

### (Re-)Install all the libraries

If you have changed some code in the plugins or libraries (they reside in the bower components folder) you can use the bower command. 

```
bower install
```

### Start a webserver 

There is a little webserver that serves files and gives you useful output in the terminal. 

```
grunt web_server
```

### Validate your sourcecode

Adobe Edge and the browser is very picky about the Javascritp it is executing. The basic formatiing rules and some sanity checks for stuff you could do in Javascript, but you shouldn't, is validated by ***jshint***. 

When ever you are making changes on the code in the repo, you might wanna execute it to check for errors

```
grunt jshint
```
## Setup 

In order to work with this repository you may install some tools beforehand. These will help you with the examples and when you make changes to the source code.
There are 3 main helpers that you will need. 

* [Node.js](http://nodejs.org) - Javascript for cour command line
* [Bower](http://bower.io) Helps you find and install nice Javascript packages for your edge compositions
* [Grunt](http://gruntjs.com) - Helps you build and maintain concise and error free javascript files. Grunt does all the "Grunt work"

### node.js 

This is Javascript for your command line aka "Terminal". This is the plattform all other tools are build on. One important thing that comes with node is the ***npm*** commando. It is used to install helper linraries that work on your mac or a server to help you with development. 

[HOWTO: Install and download node.js](http://coolestguidesontheplanet.com/installing-node-js-osx-10-9-mavericks/)

Wikipedia says: 

> Node.js is a software platform for scalable server-side and networking applications. Node.js applications are written in JavaScript. All of the popular server operating systems are supported, including Windows and Linux.[3]
Node.js applications are designed to maximize throughput and efficiency, using non-blocking I/O and asynchronous events. Node.js applications run single-threaded, although Node.js uses multiple threads for file and network events. Node.js is commonly used for real time applications due to its asynchronous nature, allowing applications to display information faster for users without the need for refreshing. 

Install [Node.js](http://nodejs.org) from the website.

### Grunt

Grunt automates checking your script files and provides you with a more advaced webserver capability. 

Install Grunt with a simple command in your shell


> In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```
sudo npm install -g grunt-cli
```

* Check Javascript files for errors 
* Provide a webserver to serve files
* COMING: Live Reload 

Wikipedia says: 

> Why use a task runner?
In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

### Bower

Bower is a command line utility. Install it with npm.

```
npm install -g bower
```

Wikipedia says: 

> Bower is a package management system for the World Wide Web. It depends on Node.js and npm. It works with git and GitHub repositories.
