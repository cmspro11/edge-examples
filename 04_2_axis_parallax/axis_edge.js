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
                id: 'backLayer',
                type: 'rect',
                rect: ['0px', '0px','229px','146px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'middleLayer',
                type: 'rect',
                rect: ['66px', '73px','229px','146px','auto', 'auto'],
                fill: ["rgba(177,172,172,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'topLayer',
                type: 'rect',
                rect: ['142px', '117px','229px','146px','auto', 'auto'],
                fill: ["rgba(112,112,112,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_backLayer}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_topLayer}": [
                ["style", "top", '118px'],
                ["style", "left", '213px'],
                ["color", "background-color", 'rgba(112,112,112,1.00)']
            ],
            "${_middleLayer}": [
                ["style", "top", '73px'],
                ["style", "left", '53px'],
                ["color", "background-color", 'rgba(177,172,172,1.00)']
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
                { id: "eid3", tween: [ "style", "${_middleLayer}", "left", '257px', { fromValue: '53px'}], position: 0, duration: 3000 },
                { id: "eid15", tween: [ "style", "${_Stage}", "height", '400px', { fromValue: '400px'}], position: 3003, duration: 0 },
                { id: "eid6", tween: [ "style", "${_topLayer}", "left", '174px', { fromValue: '213px'}], position: 0, duration: 3003 },
                { id: "eid13", tween: [ "style", "${_Stage}", "width", '1000px', { fromValue: '1000px'}], position: 3003, duration: 0 },
                { id: "eid1", tween: [ "style", "${_backLayer}", "left", '321px', { fromValue: '0px'}], position: 0, duration: 3000 },
                { id: "eid7", tween: [ "style", "${_topLayer}", "top", '115px', { fromValue: '118px'}], position: 0, duration: 3003 }            ]
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
