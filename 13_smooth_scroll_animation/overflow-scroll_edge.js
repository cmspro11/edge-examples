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
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'wrapper',
                type: 'rect',
                rect: ['118', '78','auto','auto','auto', 'auto'],
                userClass: "scroll-wrapper"
            },
            {
                id: 'buttonCopy',
                type: 'rect',
                rect: ['37px', '201px','75px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'button',
                type: 'rect',
                rect: ['37px', '73px','75px','68px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'wrapper',
                symbolName: 'wrapper',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_wrapper}": [
                ["style", "left", '120px']
            ],
            "${_buttonCopy}": [
                ["style", "top", '201px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid1", tween: [ "style", "${_wrapper}", "left", '120px', { fromValue: '120px'}], position: 0, duration: 0 }            ]
        }
    }
},
"wrapper": {
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
                    rect: ['0px', '0px', '627px', '484px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['-950px', '-384px', '3800px', '1536px', 'auto', 'auto'],
                    id: 'stadt-012',
                    transform: [[], [], [], ['0.5', '0.5']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/stadt-01.png', '0px', '0px']
                },
                {
                    id: 'button',
                    type: 'rect',
                    rect: ['912', '301', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'button',
                symbolName: 'button',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_stadt-012}": [
                ["style", "top", '-384px'],
                ["transform", "scaleY", '0.5'],
                ["style", "overflow", 'scroll'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-950px']
            ],
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '484px'],
                ["style", "overflow", 'scroll'],
                ["style", "width", '627px']
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
"button": {
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
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '99px', '120px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '99px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
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
})(jQuery, AdobeEdge, "EDGE-99296395");
