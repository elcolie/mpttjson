
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
            "name": "APTs"
        },
        "link": {
            "href": "/apt/allapts/"
        },
        "HTMLclass": "blue",
        "collapsed": false,        
        "children": [
            {
                "text": {
                    "name": "BLOOD AND BLOOD FORMING ORGANS"
                },
                "link": {
                    "href": "/apt/allapts/BLOOD-AND-BLOOD-FORMING-ORGANS/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "CARDIOVASCULAR SYSTEM"
                },
                "link": {
                    "href": "/apt/allapts/CARDIOVASCULAR-SYSTEM/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "DERMATOLOGICALS"
                },
                "link": {
                    "href": "/apt/allapts/DERMATOLOGICALS/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "GENITO URINARY SYSTEM AND SEX HORMONES"
                },
                "link": {
                    "href": "/apt/allapts/GENITO-URINARY-SYSTEM-AND-SEX-HORMONES/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES"
                },
                "link": {
                    "href": "/apt/allapts/SYSTEMIC-HORMONAL-PREPARATIONS-EXCL-SEX-HORMONES/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "GENERAL ANTIINFECTIVES FOR SYSTEMIC USE"
                },
                "link": {
                    "href": "/apt/allapts/GENERAL-ANTIINFECTIVES-FOR-SYSTEMIC-USE/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS"
                },
                "link": {
                    "href": "/apt/allapts/ANTINEOPLASTIC-AND-IMMUNOMODULATING-AGENTS/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "MUSCULO-SKELETAL SYSTEM"
                },
                "link": {
                    "href": "/apt/allapts/MUSCULO-SKELETAL-SYSTEM/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "NERVOUS SYSTEM"
                },
                "link": {
                    "href": "/apt/allapts/NERVOUS-SYSTEM/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENT"
                },
                "link": {
                    "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/"
                },
                "HTMLclass": "blue",
                "collapsed": true,
                "children": [
                    {
                        "text": {
                            "name": "ANTIPROTOZOALS"
                        },
                        "link": {
                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/"
                        },
                        "HTMLclass": "blue",
                        "collapsed": true,
                        "children": [
                            {
                                "text": {
                                    "name": "ANTIMALARIALS"
                                },
                                "link": {
                                    "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/"
                                },
                                "HTMLclass": "blue",
                                "collapsed": true,
                                "children": [
                                    {
                                        "text": {
                                            "name": "Hydroxyquinoline derivatives"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Hydroxyquinoline-derivatives/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Nitroimidazole derivatives"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Nitroimidazole-derivatives/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Dichloroacetamide derivatives"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Dichloroacetamide-derivatives/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Arsenic compounds"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Arsenic-compounds/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Other agents against amoebiasis and other protozoa"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Other-agents-against-amoebiasis-and-other-protozoa/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Aminoquinolines"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Aminoquinolines/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Biguanides"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Biguanides/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Quinine alkaloids"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Quinine-alkaloids/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Diaminopyrimidines"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Diaminopyrimidines/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Other antimalarials"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Other-antimalarials/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Antimony compounds"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Antimony-compounds/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Nitrofuran derivatives"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Nitrofuran-derivatives/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    },
                                    {
                                        "text": {
                                            "name": "Other agents against leishmaniasis and trypanosomi"
                                        },
                                        "link": {
                                            "href": "/apt/allapts/ANTIPARASITIC-PRODUCTS-INSECTICIDES-AND-REPELLENT/ANTIPROTOZOALS/ANTIMALARIALS/Other-agents-against-leishmaniasis-and-trypanosomi/"
                                        },
                                        "HTMLclass": "blue",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "text": {
                    "name": "RESPIRATORY SYSTEM"
                },
                "link": {
                    "href": "/apt/allapts/RESPIRATORY-SYSTEM/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "VARIOUS"
                },
                "link": {
                    "href": "/apt/allapts/VARIOUS/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "SENSORY ORGANS"
                },
                "link": {
                    "href": "/apt/allapts/SENSORY-ORGANS/"
                },
                "HTMLclass": "blue",
                "children": []
            },
            {
                "text": {
                    "name": "ALIMENTARY TRACT AND METABOLISM"
                },
                "link": {
                    "href": "/apt/allapts/ALIMENTARY-TRACT-AND-METABOLISM/"
                },
                "HTMLclass": "blue",
                "children": []
            }
        ]
    }





// JSON ends here


    };
