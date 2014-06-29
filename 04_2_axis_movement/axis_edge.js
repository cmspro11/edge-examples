/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'back',
                type: 'image',
                rect: ['0px', '0px','2560px','1600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"16960-code-2560x1600-computer-wallpaper.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_back}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '0.1%'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '400px'],
                ["style", "width", '1000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3003,
            autoPlay: false,
            timeline: [
                { id: "eid15", tween: [ "style", "${_Stage}", "height", '400px', { fromValue: '400px'}], position: 3003, duration: 0 },
                { id: "eid13", tween: [ "style", "${_Stage}", "width", '1000px', { fromValue: '1000px'}], position: 3003, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11251020");
