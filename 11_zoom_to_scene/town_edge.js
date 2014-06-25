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
                id: 'Manison',
                display: 'none',
                type: 'rect',
                rect: ['-146', '70','auto','auto','auto', 'auto']
            },
            {
                id: 'Gallery',
                display: 'none',
                type: 'rect',
                rect: ['54', '67','auto','auto','auto', 'auto']
            },
            {
                id: 'Bakery',
                display: 'none',
                type: 'rect',
                rect: ['58', '38','auto','auto','auto', 'auto']
            },
            {
                id: 'Home',
                type: 'group',
                rect: ['42', '44','955','691','auto', 'auto'],
                c: [
                {
                    id: 'Town',
                    type: 'image',
                    rect: ['-716px', '-518px','2387px','1728px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"town.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'ButBakery',
                    type: 'rect',
                    rect: ['56px', '144px','220px','202px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'ButGallery',
                    type: 'rect',
                    rect: ['351px', '130px','220px','202px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'ButOldManison',
                    type: 'rect',
                    rect: ['666px', '176px','265px','142px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                }]
            },
            {
                id: 'Navigation',
                display: 'none',
                type: 'rect',
                rect: ['59', '33','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'Navigation',
                symbolName: 'Navigation',
                autoPlay: {

                }
            },
            {
                id: 'Bakery',
                symbolName: 'Bakery',
                autoPlay: {

                }
            },
            {
                id: 'Gallery',
                symbolName: 'Gallery'
            },
            {
                id: 'Manison',
                symbolName: 'Manison'
            }
            ]
        },
    states: {
        "Base State": {
            "${_ButGallery}": [
                ["style", "top", '130px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '351px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_Home}": [
                ["style", "top", '44px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '42px']
            ],
            "${_Bakery}": [
                ["style", "display", 'none'],
                ["style", "overflow", 'visible']
            ],
            "${_Navigation}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "overflow", 'hidden']
            ],
            "${_ButBakery}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '56px'],
                ["style", "top", '144px']
            ],
            "${_Gallery}": [
                ["style", "display", 'none']
            ],
            "${_ButOldManison}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '142px'],
                ["style", "top", '176px'],
                ["style", "left", '666px'],
                ["style", "width", '265px']
            ],
            "${_Text}": [
                ["style", "font-style", '']
            ],
            "${_Manison}": [
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ],
            "${_Town}": [
                ["style", "top", '-518px'],
                ["transform", "scaleX", '0.4'],
                ["transform", "scaleY", '0.4'],
                ["style", "left", '-716px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "ZoomManison": 1000
            },
            timeline: [
                { id: "eid15", tween: [ "transform", "${_Home}", "scaleY", '3', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "style", "${_Home}", "top", '327px', { fromValue: '44px'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "transform", "${_Home}", "scaleX", '3', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_Manison}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_Bakery}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Home}", "left", '-960px', { fromValue: '42px'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_Home}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000 },
                { id: "eid5", tween: [ "style", "${_Gallery}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Navigation}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"Bakery": {
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
                    rect: ['-693px', '-519px', '2310px', '1728px', 'auto', 'auto'],
                    id: 'ImgBakery',
                    transform: [[], [], [], ['0.4', '0.4']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/bakery.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ImgBakery}": [
                ["style", "top", '-519px'],
                ["transform", "scaleX", '0.4'],
                ["style", "left", '-693px'],
                ["transform", "scaleY", '0.4']
            ],
            "${symbolSelector}": [
                ["style", "height", '691px'],
                ["style", "width", '924px']
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
"Navigation": {
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
                    font: ['Palatino Linotype, Book Antigua, Palatino, serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'italic'],
                    id: 'Text',
                    text: 'High Street',
                    type: 'text',
                    rect: ['0px', '0px', '151px', '37px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '151px']
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
"Gallery": {
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
                    rect: ['-699px', '-453px', '2332px', '1510px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.4', '0.4']],
                    id: 'ImgGallery',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/gallery.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ImgGallery}": [
                ["style", "top", '-453px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "left", '-699px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '604px'],
                ["style", "width", '933px']
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
                { id: "eid3", tween: [ "style", "${_ImgGallery}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }            ]
        }
    }
},
"Manison": {
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
                    rect: ['-474px', '-214px', '2372px', '1067px', 'auto', 'auto'],
                    id: 'ImgManison',
                    transform: [[], [], [], ['0.6', '0.6']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/manison.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ImgManison}": [
                ["style", "top", '-214px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0.1'],
                ["style", "left", '-474px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '1423px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid9", tween: [ "style", "${_ImgManison}", "opacity", '1', { fromValue: '0.1'}], position: 0, duration: 2000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-251489839");
