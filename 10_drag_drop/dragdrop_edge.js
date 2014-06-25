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
                id: 'UrsprungKaese',
                type: 'rect',
                rect: ['58px', '68px','260px','180px','auto', 'auto'],
                fill: ["rgba(241,241,241,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'brot',
                type: 'rect',
                rect: ['636px', '477px','auto','auto','auto', 'auto']
            },
            {
                id: 'kaese',
                type: 'rect',
                rect: ['58px', '68px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'brot',
                symbolName: 'brot',
                autoPlay: {

                }
            },
            {
                id: 'kaese',
                symbolName: 'kaese',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_UrsprungKaese}": [
                ["color", "background-color", 'rgba(241,241,241,1.00)']
            ],
            "${_kaese}": [
                ["style", "top", '68px'],
                ["style", "left", '58px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ],
            "${_brot}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '636px'],
                ["style", "top", '477px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"kaese": {
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
                    rect: ['0', '0', '865px', '600px', 'auto', 'auto'],
                    filter: [0, 0, 1, 0, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'kaese',
                    transform: [[0, 0], [], [], ['0.3', '0.3']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/kaese.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_kaese}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3'],
                ["subproperty", "filter.contrast", '1'],
                ["subproperty", "filter.saturate", '0.000000']
            ],
            "${symbolSelector}": [
                ["style", "height", '180px'],
                ["style", "width", '260px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid93", tween: [ "subproperty", "${_kaese}", "filter.saturate", '1', { fromValue: '0.000000'}], position: 250, duration: 750 }            ]
        }
    }
},
"brot": {
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
                    transform: [[0, 0], [], [], ['0.6', '0.6'], ['0%', '0%']],
                    id: 'brot2',
                    type: 'image',
                    rect: ['0px', '0px', '512px', '302px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/brot.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_brot2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '181px'],
                ["style", "width", '307px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
})(jQuery, AdobeEdge, "EDGE-49428076");
