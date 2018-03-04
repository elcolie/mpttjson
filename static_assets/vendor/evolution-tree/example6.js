var tree_structure = {
    chart: {
        container: "#OrganiseChart6",
        rootOrientation:  'NORTH',
//        rootOrientation:  'NORTH',




        levelSeparation:    25,
        siblingSeparation:  70,
        subTeeSeparation:   70,
        nodeAlign: "BOTTOM",
        scrollbar: "fancy",
        padding: 35,
        
        node: { 
            collapsable: true,
            HTMLclass: "evolution-tree" ,
        },
        connectors: {
            type: "curve",
//            type: "step",



            style: {
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke": "#ccc"
            }
        }
    },

    nodeStructure: {
        text: { name: "INCORRECT DOSAGE" },
//        image: "img/truebacteria.png",       
        HTMLclass: "the-parent",
        children: [
            {
                text: { name: "Information" },
//                image: "img/truebacteria.png",
                HTMLclass: "the-parent",
//                collapsed: true,                 
                stackChildren: true,
//                link: { href: "http://www.google.com"},
                children: [
                            {
                                text: { name: "Incorrect person" },
                                image: "img/truebacteria.png",
                                link: { href: "http://www.google.com"},
                            },
                            {
                                text: { name: "Incorrect dept." },
                                image: "img/truebacteria.png",
                                link: { href: "http://www.google.com"},               
                            },
                            {
                                text: { name: "Data not up to date" },
                                image: "img/truebacteria.png",
                                link: { href: "http://www.google.com"},
                            },
                            {
                                text: { name: "Incorrect address" },
                                image: "img/truebacteria.png",
                                link: { href: "http://www.google.com"},                
                            }
                        ]
            },
            {
                text: { name: "Procedures" },
//                image: "img/truebacteria.png",
                HTMLclass: "the-parent",
//                collapsed: true,
                children: [
                            {
                                text: { name: "Manual" },
                           //     image: "img/truebacteria.png",
                                HTMLclass: "the-parent", 
                            //    collapsed: true,
                                stackChildren: true,                                  
                                children: [
                                            {
                                                text: { name: "Consistency" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},
                                            },
                                            {
                                                text: { name: "Reliability" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},                
                                            },
                                            {
                                                text: { name: "Correctness" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},
                                            },
                                            {
                                                text: { name: "Precision" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},                
                                            }
                                        ]   
                            },
                            {
                                text: { name: "Automated" },
                            //    image: "img/truebacteria.png",
                                HTMLclass: "the-parent", 
                            //    collapsed: true,
                                stackChildren: true,                                 
                                children: [
                                            {
                                                text: { name: "Consistency" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},
                                            },
                                            {
                                                text: { name: "Reliability" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},      
                                            },
                                            {
                                                text: { name: "Correctness" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},
                                            },
                                            {
                                                text: { name: "Precision" },
                                                image: "img/truebacteria.png",
                                                link: { href: "http://www.google.com"},      
                                            }
                                        ]               
                            }
                        ]                
            }
        ]
    }
};