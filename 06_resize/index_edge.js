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
                id: 'adaptiveContainer',
                type: 'rect',
                rect: ['0px', '0px','100%','768px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'dispText',
                type: 'text',
                rect: ['92px', '47px','371px','48px','auto', 'auto'],
                text: "",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(217,217,217,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'orientText',
                type: 'text',
                rect: ['92px', '71px','371px','48px','auto', 'auto'],
                text: "",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(217,217,217,1.00)", "normal", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '400px'],
                ["style", "max-width", '1200px'],
                ["style", "height", '768px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '100%']
            ],
            "${_orientText}": [
                ["style", "top", '71px'],
                ["color", "color", 'rgba(217,217,217,1.00)'],
                ["style", "font-size", '18px'],
                ["style", "left", '92px'],
                ["style", "width", '371px']
            ],
            "${_adaptiveContainer}": [
                ["style", "height", '768px']
            ],
            "${_dispText}": [
                ["style", "top", '47px'],
                ["color", "color", 'rgba(217,217,217,1.00)'],
                ["style", "width", '371px'],
                ["style", "left", '92px'],
                ["style", "font-size", '18px']
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
"layout768": {
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
                    rect: ['0px', '0px', '768px', '1024px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(194,95,95,1.00)']
                },
                {
                    type: 'text',
                    id: 'numText',
                    text: '768',
                    rect: ['91px', '507px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 99, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['91', '327px', '517px', 'auto', 'auto', 'auto'],
                    id: 'paraText',
                    text: 'This is the symbol that is added when the stage is',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 49, 'rgba(255,255,255,1)', 'normal', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_paraText}": [
                ["style", "top", '327px'],
                ["style", "width", '517px'],
                ["style", "font-size", '49px']
            ],
            "${_numText}": [
                ["style", "top", '507px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '91px'],
                ["style", "font-size", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1024px'],
                ["style", "width", '768px']
            ],
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '134px'],
                ["style", "left", '100px'],
                ["style", "font-size", '99px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '1024px'],
                ["color", "background-color", 'rgba(194,95,95,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '768px']
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
"layout1024": {
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
                    rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(143,95,194,1.00)']
                },
                {
                    type: 'text',
                    id: 'numText',
                    text: '1024',
                    rect: ['91px', '372px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 99, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                },
                {
                    type: 'text',
                    rect: ['91', '175px', '517px', 'auto', 'auto', 'auto'],
                    id: 'paraText',
                    text: 'This is the symbol that is added when the stage is',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 49, 'rgba(255,255,255,1)', 'normal', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_paraText}": [
                ["style", "top", '175px'],
                ["style", "font-size", '49px'],
                ["style", "width", '517px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["color", "background-color", 'rgba(143,95,194,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_numText}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '372px'],
                ["style", "left", '91px'],
                ["style", "font-size", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1024px']
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
})(jQuery, AdobeEdge, "EDGE-34537025");
