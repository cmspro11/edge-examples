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
                id: 'rect_hello_world',
                type: 'rect',
                rect: ['0px', '136px','231px','92px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                c: [
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['55px', '32px','auto','auto','auto', 'auto'],
                    text: "Hello World",
                    font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'rect_play',
                type: 'rect',
                rect: ['0px', '336px','108px','64px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['31px', '23px','auto','auto','auto', 'auto'],
                    text: "Play",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'rect_stop',
                type: 'rect',
                rect: ['123px', '336px','108px','64px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['29px', '23px','auto','auto','auto', 'auto'],
                    text: "Stop",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'rect_rewind',
                type: 'rect',
                rect: ['248px', '336px','108px','64px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'Text4',
                    type: 'text',
                    rect: ['15px', '23px','auto','auto','auto', 'auto'],
                    text: "Rewind",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'rect_remove',
                type: 'rect',
                rect: ['442px', '336px','108px','64px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'Text4Copy',
                    type: 'text',
                    rect: ['15px', '23px','auto','auto','auto', 'auto'],
                    text: "Remove",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_rect_play}": [
                ["style", "left", '0px'],
                ["style", "width", '108px']
            ],
            "${_Text4Copy}": [
                ["style", "left", '15px'],
                ["style", "top", '23px']
            ],
            "${_Text3}": [
                ["style", "left", '29px'],
                ["style", "top", '23px']
            ],
            "${_Text2}": [
                ["style", "left", '31px'],
                ["style", "top", '23px']
            ],
            "${_rect_rewind}": [
                ["style", "left", '248px'],
                ["style", "width", '108px']
            ],
            "${_rect_remove}": [
                ["style", "left", '442px'],
                ["style", "width", '108px']
            ],
            "${_rect_hello_world}": [
                ["style", "left", '0px'],
                ["style", "top", '136px']
            ],
            "${_Text}": [
                ["style", "left", '55px'],
                ["style", "top", '32px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_rect_stop}": [
                ["style", "left", '123px'],
                ["style", "width", '108px']
            ],
            "${_Text4}": [
                ["style", "left", '15px'],
                ["style", "top", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2998,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "style", "${_Text}", "left", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text}", "left", '55px', { fromValue: '55px'}], position: 2998, duration: 0 },
                { id: "eid3", tween: [ "style", "${_rect_hello_world}", "left", '319px', { fromValue: '0px'}], position: 0, duration: 2998 }            ]
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
})(jQuery, AdobeEdge, "EDGE-30797826");