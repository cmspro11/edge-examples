/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'AE_Sc1_desert_landscape_horizon2',
                type: 'image',
                rect: ['0px', '0px','4500px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AE_Sc1_desert_landscape_horizon.jpg",'0px','0px']
            },
            {
                id: 'desert_landscape_0001_landscape-back',
                type: 'image',
                rect: ['0px', '528px','4500px','1000px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"desert_landscape_0001_landscape-back.png",'0px','0px']
            },
            {
                id: 'desert_landscape_0000_landscape-middle',
                type: 'image',
                rect: ['0px', '536px','4500px','1000px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"desert_landscape_0000_landscape-middle.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_desert_landscape_0001_landscape-back}": [
                ["style", "left", '0px'],
                ["style", "top", '528px']
            ],
            "${_AE_Sc1_desert_landscape_horizon2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_desert_landscape_0000_landscape-middle}": [
                ["style", "left", '0px'],
                ["style", "top", '536px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid6", tween: [ "style", "${_desert_landscape_0000_landscape-middle}", "left", '-2435px', { fromValue: '0px'}], position: 0, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid5", tween: [ "style", "${_desert_landscape_0001_landscape-back}", "left", '-1155px', { fromValue: '0px'}], position: 0, duration: 3000, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_AE_Sc1_desert_landscape_horizon2}", "left", '-663px', { fromValue: '0px'}], position: 0, duration: 3000, easing: "easeInOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-213810468");
