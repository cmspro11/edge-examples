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
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'sky',
                type: 'image',
                rect: ['-950px', '-384px','3800px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sky.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['145px', '410px','32px','358px','auto', 'auto'],
                fill: ["rgba(68,68,68,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['791px', '410px','32px','358px','auto', 'auto'],
                fill: ["rgba(68,68,68,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'bird_flap',
                type: 'rect',
                rect: ['35px', '272px','auto','auto','auto', 'auto'],
                cursor: ['pointer'],
                transform: [[],[],[],['0.5','0.5']]
            }],
            symbolInstances: [
            {
                id: 'bird_flap',
                symbolName: 'bird_flap',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy}": [
                ["style", "top", '410px'],
                ["style", "left", '791px']
            ],
            "${_bird_flap}": [
                ["transform", "scaleY", '0.5'],
                ["style", "overflow", 'hidden'],
                ["motion", "location", '160.4844px 397.078125px'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.5']
            ],
            "${_Rectangle}": [
                ["style", "top", '410px'],
                ["style", "left", '145px']
            ],
            "${_sky}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '-384px'],
                ["style", "left", '-950px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(128,213,223,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9500,
            autoPlay: false,
            timeline: [
                { id: "eid14", tween: [ "transform", "${_bird_flap}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "transform", "${_bird_flap}", "scaleX", '-0.5', { fromValue: '0.5'}], position: 4500, duration: 0 },
                { id: "eid2", tween: [ "motion", "${_bird_flap}", [[160.48, 397.08, 0, 0],[498.81, 285.28, 468, 0.43, 510.2, 0.46],[813.84, 397.67, 0, 0]]], position: 0, duration: 4000 },
                { id: "eid12", tween: [ "motion", "${_bird_flap}", [[813.84, 397.67, 0, 0],[498.81, 285.28, -510.2, -0.46, -468, -0.43],[160.48, 397.08, 0, 0]]], position: 5000, duration: 4000 },
                { id: "eid16", tween: [ "transform", "${_bird_flap}", "scaleY", '0.5', { fromValue: '0.5'}], position: 4500, duration: 0 }            ]
        }
    }
},
"bird_flap": {
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
                    id: 'flap',
                    type: 'image',
                    rect: ['0', '0', '2250px', '250px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bird-flap-cycle.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '250px'],
                ["style", "width", '250px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flap}": [
                ["style", "left", '-2000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2750,
            autoPlay: false,
            labels: {
                "flying_cycle": 500
            },
            timeline: [
                { id: "eid32", tween: [ "style", "${_flap}", "left", '-2000px', { fromValue: '-2000px'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_flap}", "left", '0px', { fromValue: '-2000px'}], position: 500, duration: 0 },
                { id: "eid34", tween: [ "style", "${_flap}", "left", '-250px', { fromValue: '0px'}], position: 750, duration: 0 },
                { id: "eid35", tween: [ "style", "${_flap}", "left", '-500px', { fromValue: '-250px'}], position: 1000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_flap}", "left", '-750px', { fromValue: '-500px'}], position: 1250, duration: 0 },
                { id: "eid37", tween: [ "style", "${_flap}", "left", '-1000px', { fromValue: '-750px'}], position: 1500, duration: 0 },
                { id: "eid38", tween: [ "style", "${_flap}", "left", '-1250px', { fromValue: '-1000px'}], position: 1750, duration: 0 },
                { id: "eid39", tween: [ "style", "${_flap}", "left", '-1500px', { fromValue: '-1250px'}], position: 2000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_flap}", "left", '-1750px', { fromValue: '-1500px'}], position: 2250, duration: 0 },
                { id: "eid41", tween: [ "style", "${_flap}", "left", '-2000px', { fromValue: '-1750px'}], position: 2500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-7689244");
