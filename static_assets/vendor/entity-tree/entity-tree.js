
// Configuration of tree

    var chart_config = {
        chart: {
            container: "#custom-colored",
            rootOrientation:  'WEST',   /* JDS */
            nodeAlign: "BOTTOM",

            connectors: {
//                type: 'step'
            },
            node: {
                collapsable: true,   /* JDS */                
                HTMLclass: 'nodeExample1',
            }

        },


        nodeStructure: 


// Paste JSON below ( without first & last [ ]   )


// Automating this requires taking into account the following:

// Level 0 : "collapsed": false,  
// Level 1 to n-1  : "collapsed": true, 
// Level n: missing (otherwise hyperlink won't work)
// Hyperlink:   Not compatible with the collapsed flag. The hyperlink should be present only on the last level (ie leaf is where parent property = false) 
// Doing a Find & replace to put the tree name in the hyerlink

 {
        "text": {
            "name": "The Global Fund"
        },
        "link": {
            "href": "/entity/TheGlobalFund/"
        },
        "HTMLclass": "blue",
        "collapsed": false, 
        "children": [
            {
                "text": {
                    "name": "Grant Management"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/GMD/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "High Impact Africa 2"
                        },
                        "link": {
                            "href": "/entity/TheGlobalFund/GMD/HIA2/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Ethiopia"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA2/ETH/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Kenya"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA2/KEN/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Mozambique"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA2/MOZ/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Uganda"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA2/UGA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Zambia"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA2/ZAM/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Zimbabwe"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA2/ZIM/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Tanzania"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA2/TAN/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "High Impact Asia"
                        },
                        "link": {
                            "href": "/entity/TheGlobalFund/GMD/HIA/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Bangladesh"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/BAN/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Cambodia"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/CAM/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "China"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/CHI/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "India"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/IND/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Indonesia"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/IDO/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Myanmar"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/MYA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Pakistan"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/PAK/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Philippines"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/PHI/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Thailand"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/THA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Vietnam"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIA/VIE/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "High Impact Africa 1"
                        },
                        "link": {
                            "href": "/entity/TheGlobalFund/GMD/HIAF1/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Cote d’Ivoire"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIAF1/CIA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Democratic Republic Congo​"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIAF1/DRC/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Ghana"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIAF1/GHA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Nigeria"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIAF1/NIG/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "South Africa"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIAF1/SAF/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Sudan"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/HIAF1/SUD/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Africa &​ Middle East"
                        },
                        "link": {
                            "href": "/entity/TheGlobalFund/GMD/AME/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Southern & East Africa"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/AME/SEA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "MENA"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/AME/MENA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Western Africa"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/AME/WA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Central Africa"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/AME/CA/"
                                },
                                "HTMLclass": "blue",
                                "children": [
                                    {
                                        "text": {
                                            "name": "Benin"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/BEN/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Burundi"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/BUR/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Cameroon"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/CMR/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Cape Verde"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/CAV/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Central African Republic"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/CAR/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Chad"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/CHD/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Congo"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/CON/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Equatorial Guinea"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/EQG/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Gabon"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/GAB/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Sao Tome and Principe"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/STP/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Togo"
                                        },
                                        "link": {
                                            "href": "/entity/TheGlobalFund/GMD/AME/CA/TOG/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Asia Europe Latin Am. & Caribbean"
                        },
                        "link": {
                            "href": "/entity/TheGlobalFund/GMD/AELAC/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "South & East Asia"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/AELAC/SEA2/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "EECA"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/AELAC/EECA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "LAC"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/AELAC/LAC/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Grant Portfolio Solutions & Services"
                        },
                        "link": {
                            "href": "/entity/TheGlobalFund/GMD/GPS/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "LFA Team"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/GPS/LFA/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Operational Support"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/GPS/OS/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Operation Policy Support"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/GPS/OPS/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "CCM Hub"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/GPS/CCM/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    },
                    {
                        "text": {
                            "name": "Supply Chain"
                        },
                        "link": {
                            "href": "/entity/TheGlobalFund/GMD/SC/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "Quality HPM Hub​"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/SC/HPM/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Transformations"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/SC/TR/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Metrics,​ Analysis & Perf."
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/SC/MAP/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            },
                            {
                                "text": {
                                    "name": "Strategic Design"
                                },
                                "link": {
                                    "href": "/entity/TheGlobalFund/GMD/SC/SD/"
                                },
                                "HTMLclass": "blue",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "Human Resources"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/HR/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "Communications"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/Com/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "Office of Board Affairs​"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/OBA/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "Legal & Compliance"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/LC/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "External Relations"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/ER/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "Risk Management"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/RM/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "FISA"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/FISA/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "Strategy, Investment & Impact"
                },
                "link": {
                    "href": "/entity/TheGlobalFund/SIID/"
                },
                "HTMLclass": "blue",
                "children": []
            }
        ]
    }


// JSON ends here


    };
