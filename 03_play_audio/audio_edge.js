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
                id: 'sym_track_3',
                type: 'rect',
                rect: ['0', '191','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_track_2',
                type: 'rect',
                rect: ['0', '93','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_track_1',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_track_3',
                symbolName: 'sym_track_3',
                autoPlay: {

                }
            },
            {
                id: 'sym_track_1',
                symbolName: 'sym_track_1',
                autoPlay: {

                }
            },
            {
                id: 'sym_track_2',
                symbolName: 'sym_track_2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
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
"sym_track_1": {
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
                    rect: ['0px', '0px', '181px', '80px', 'auto', 'auto'],
                    id: 'rect_track_1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        id: 'txt_track_1',
                        text: 'Track 1<br>',
                        type: 'text',
                        rect: ['51px', '26px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt_track_1}": [
                ["style", "left", '51px'],
                ["style", "top", '26px']
            ],
            "${_rect_track_1}": [
                ["style", "height", '80px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '181px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '181px']
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
"sym_track_2": {
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
                    id: 'rect_track_2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '181px', '80px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        type: 'text',
                        id: 'txt_track_2',
                        text: 'Track 2<br>',
                        align: 'left',
                        rect: ['51px', '26px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rect_track_2}": [
                ["style", "top", '0px'],
                ["style", "height", '80px'],
                ["style", "left", '0px'],
                ["style", "width", '181px']
            ],
            "${_txt_track_2}": [
                ["style", "top", '26px'],
                ["style", "left", '51px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '181px']
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
"sym_track_3": {
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
                    id: 'rect_track_3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '181px', '80px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        type: 'text',
                        rect: ['51px', '26px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'txt_track_3',
                        text: 'Track 3',
                        align: 'left',
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rect_track_3}": [
                ["style", "height", '80px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '181px']
            ],
            "${_txt_track_3}": [
                ["style", "top", '26px'],
                ["style", "left", '51px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '181px']
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
})(jQuery, AdobeEdge, "EDGE-32429824");
