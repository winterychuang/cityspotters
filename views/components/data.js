const locations = {
    ex1restaurant: {
        name: "Example",
        address: "xyz",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "9:00-6:00",
            Tu: "9:00-6:00",
            W:  "9:00-6:00",
            Th: "9:00-6:00",
            F: "9:00-6:00",
            Sa: "9:00-6:00",
            Su: "9:00-6:00"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 2,
        desc: "hello world",
        //figure out links
        link: "youtube.com",
        //store picture
        picture: 0,
        
    },


    tokyocream: {
        name: "Tokyo Cream",
        address: "1838 Irving St, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "11:30AM-10:00PM",
            Tu: "11:30AM-10:00PM",
            W:  "11:30AM-10:00PM",
            Th: "11:30AM-10:00PM",
            F: "11:30AM-10:00PM",
            Sa: "11:00AM-10:00PM",
            Su: "11:00AM-10P:00M"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 3,
        desc: "Dessert and matcha place with a focus on soft serve ice cream. Open late every day, until 10PM. Local and easy to order at.",
        //figure out links
        link: "https://www.tokyocreamusa.com",
        //store picture
        picture: 0,

    },
   lapromenade: {
        name: "La Promenade Cafe",
        address: "3643 Balboa St, San Francisco, CA 94121",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "7:00AM-6:00PM",
            Tu: "7:00AM-6:00PM",
            W:  "7:00AM-6:00PM",
            Th: "7:00AM-8:00PM",
            F: "7:00AM-8:00PM",
            Sa: "8:00AM-8:00PM",
            Su: "8:00AM-6:00PM"
        },
        //level on scale of 1-2-3-4-5(higher # = more expensive)
        price: 2,
        desc: "Lived-in coffee shop with immaculate ambience and decor, as well as free WiFi and a good food/drink selection",
        //figure out links
        link: "https://www.lapromenadecafe.com",
        //store picture
        picture: 0,

    },
    hookfish: {
        name: "Hook Fish Co",
        address: "4542 Irving St, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "11:00AM-9:00PM",
            Tu: "11:00AM-9:00PM",
            W:  "11:00AM-9:00PM",
            Th: "11:00AM-9:00PM",
            F: "11:00AM-9:00PM",
            Sa: "11:00AM-9:00PM",
            Su: "11:00AM-9:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 4,
        desc: "Standout fish n chips place with a mean tartar sauce and addictive fries.",
        //figure out links
        link: "http://hookfishco.com/",
        //store picture
        picture: 0,

    },


    deadmanspoint: {
        name: "Deadman's Point",
        address: "1114-1142 El Camino Del Mar, San Francisco, CA 94121",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "Figure this out somehow",
            Tu: "11:30AM-10:00PM",
            W:  "11:30AM-10:00PM",
            Th: "11:30AM-10:00PM",
            F: "11:30AM-10:00PM",
            Sa: "11:00AM-10:00PM",
            Su: "11:00AM-10P:00M"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "Senic and relatively serene trail in Land's End, ocean views and lush nature",
        //figure out links
        link: "https://sfrecpark.org",
        //store picture
        picture: 0,

    },
   balboapark: {
        name: "Balboa Park",
        address: "San Francisco, CA 94112",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "5:00AM-12:00AM",
            Tu: "5:00AM-12:00AM",
            W:  "5:00AM-12:00AM",
            Th: "5:00AM-12:00AM",
            F: "5:00AM-12:00AM",
            Sa: "5:00AM-12:00AM",
            Su: "5:00AM-12:00AM"
        },
        //level on scale of 1-2-3-4-5(higher # = more expensive)
        price: 0,
        desc: "Park with a variety of sporting areas, playgrounds, and a skate park.",
        //figure out links
        link: "https://sfrecpark.org",
        //store picture
        picture: 0,

    },
    larsenpeak: {
        name: "Larsen Peak",
        address: "1705 14th Ave, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "Open 24 hours",
            Tu: "Open 24 hours",
            W:  "Open 24 hours",
            Th: "Open 24 hours",
            F: "Open 24 hours",
            Sa: "Open 24 hours",
            Su: "Open 24 hours"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 4,
        desc: "Local park with cute dogs and views of Sutro Tower and the city from up high",
        //figure out links
        link: "https://sfrecpark.org",
        //store picture
        picture: 0,

    },
kirashop: {
        name: "The Kira Shop",
        address: "1234 9th Ave, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "11:00AM-7:00PM",
            Tu: "11:00AM-7:00PM",
            W:  "11:00AM-7:00PM",
            Th: "11:00AM-7:00PM",
            F: "10:00AM-7:00PM",
            Sa: "10:00AM-7:00PM",
            Su: "10:00AM-6:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "Eclectic Miffy-themed shop with plenty of cute and whimsical trinkets",
        //figure out links
        link: "https://thekirashop.com",
        //store picture
        picture: 0,

    },
   balbopark: {
        name: "Balboa Park",
        address: "San Francisco, CA 94112",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "5:00AM-12:00AM",
            Tu: "5:00AM-12:00AM",
            W:  "5:00AM-12:00AM",
            Th: "5:00AM-12:00AM",
            F: "5:00AM-12:00AM",
            Sa: "5:00AM-12:00AM",
            Su: "5:00AM-12:00AM"
        },
        //level on scale of 1-2-3-4-5(higher # = more expensive)
        price: 0,
        desc: "Park with a variety of sporting areas, playgrounds, and a skate park.",
        //figure out links
        link: "https://sfrecpark.org",
        //store picture
        picture: 0,

    },
    larsenpek: {
        name: "Larsen Peak",
        address: "1705 14th Ave, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            M: "Open 24 hours",
            Tu: "Open 24 hours",
            W:  "Open 24 hours",
            Th: "Open 24 hours",
            F: "Open 24 hours",
            Sa: "Open 24 hours",
            Su: "Open 24 hours"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 4,
        desc: "Local park with cute dogs and views of Sutro Tower and the city from up high",
        //figure out links
        link: "https://sfrecpark.org",
        //store picture
        picture: 0,

    },
    
    
}


module.exports = {locations};