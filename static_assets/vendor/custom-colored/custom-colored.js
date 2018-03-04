

    var chart_config = {
        chart: {
            container: "#custom-colored",
            rootOrientation:  'WEST',   /* JDS */
            nodeAlign: "BOTTOM",

            connectors: {
                type: 'step'
            },
            node: {
                collapsable: true,   /* JDS */                
                HTMLclass: 'nodeExample1',
            }

        },



// JSON Tree data starts here 

// Criteria: 
// Quotes "" are optional on left side
// "text" is mandatory
// "name" appears in bold
// Other contents of text box are free
// Image is optional


        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 079 794 ",
            },
            image: "../headshots/2.jpg",
            children: [
                {   
                    text:{
                        name: "Joe Linux",
                        title: "Chief Technology Officer",
                    },
                    image: "../headshots/1.jpg",
                    HTMLclass: 'light-gray',

                    collapsed: true,   /* JDS */ 

                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                            HTMLclass: 'light-gray',
                            image: "../headshots/8.jpg"
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                            HTMLclass: 'light-gray',
                            image: "../headshots/9.jpg"
                        }
                    ]
                },
                {
                    childrenDropLevel: 2,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    HTMLclass: 'blue',

                    collapsed: true,   /* JDS */ 

                    image: "../headshots/5.jpg",
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                            HTMLclass: 'blue',
                            image: "../headshots/7.jpg"
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                            HTMLclass: 'blue',
                            image: "../headshots/4.jpg"
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                            HTMLclass: 'blue',
                            image: "../headshots/11.jpg"
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    HTMLclass: 'gray',

                    collapsed: true,   /* JDS */ 

                    image: "../headshots/6.jpg",
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                            HTMLclass: 'gray',
                            image: "../headshots/10.jpg"
                        }
                    ]
                }
            ]
        }
    };
