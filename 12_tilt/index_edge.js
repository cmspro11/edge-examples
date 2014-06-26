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
                id: 'txt_test',
                type: 'text',
                rect: ['284px', '263px','382px','auto','auto', 'auto'],
                text: "rotation:",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'sym_rect_rot',
                type: 'rect',
                rect: ['164', '358','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_rect_grun',
                type: 'rect',
                rect: ['165', '68','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_rect_rot',
                symbolName: 'sym_rect'
            },
            {
                id: 'sym_rect_grun',
                symbolName: 'Symbol_1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sym_rect_rot}": [
                ["style", "top", '458px'],
                ["style", "left", '165px']
            ],
            "${_txt_test}": [
                ["style", "top", '263px'],
                ["style", "left", '284px'],
                ["style", "width", '382px']
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
                { id: "eid17", tween: [ "style", "${_sym_rect_rot}", "left", '165px', { fromValue: '165px'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_sym_rect_rot}", "top", '458px', { fromValue: '458px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_rect": {
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
                    rect: ['0px', '0px', '162px', '158px', 'auto', 'auto'],
                    id: 'rect_rot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rect_rot}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '158px'],
                ["style", "width", '162px']
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
            ]
        }
    }
},
"Symbol_1": {
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
                    rect: ['0px', '0px', '162px', '158px', 'auto', 'auto'],
                    id: 'rect_grun',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(47,255,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rect_grun}": [
                ["color", "background-color", 'rgba(47,255,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '158px'],
                ["style", "width", '162px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
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
})(jQuery, AdobeEdge, "EDGE-577324421");
