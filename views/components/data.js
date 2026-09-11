const { Fragment } = require("react/jsx-runtime");

const locations = {
    ex1restaurant: {
        name: "Example",
        address: "xyz",
        type: "Food and Drink",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "9:00-6:00",
            Tuesday: "9:00-6:00",
            Wednesday:  "9:00-6:00",
            Thursday: "9:00-6:00",
            Friday: "9:00-6:00",
            Saturday: "9:00-6:00",
            Sunday: "9:00-6:00"
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
        type: "Food and Drink",
        address: "1838 Irving St, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "11:30AM-10:00PM",
            Tuesday: "11:30AM-10:00PM",
            Wednesday:  "11:30AM-10:00PM",
            Thursday: "11:30AM-10:00PM",
            Friday: "11:30AM-10:00PM",
            Saturday: "11:00AM-10:00PM",
            Sunday: "11:00AM-10P:00M"
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
        type: "Food and Drink",
        address: "3643 Balboa St, San Francisco, CA 94121",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "7:00AM-6:00PM",
            Tuesday: "7:00AM-6:00PM",
            Wednesday:  "7:00AM-6:00PM",
            Thursday: "7:00AM-8:00PM",
            Friday: "7:00AM-8:00PM",
            Saturday: "8:00AM-8:00PM",
            Sunday: "8:00AM-6:00PM"
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
        type: "Food and Drink",
        address: "4542 Irving St, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "11:00AM-9:00PM",
            Tuesday: "11:00AM-9:00PM",
            Wednesday:  "11:00AM-9:00PM",
            Thursday: "11:00AM-9:00PM",
            Friday: "11:00AM-9:00PM",
            Saturday: "11:00AM-9:00PM",
            Sunday: "11:00AM-9:00PM"
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
        type: "Public Spaces",
        address: "1114-1142 El Camino Del Mar, San Francisco, CA 94121",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "Figure this out somehow",
            Tuesday: "11:30AM-10:00PM",
            Wednesday:  "11:30AM-10:00PM",
            Thursday: "11:30AM-10:00PM",
            Friday: "11:30AM-10:00PM",
            Saturday: "11:00AM-10:00PM",
            Sunday: "11:00AM-10P:00M"
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
        type: "Public Spaces",
        address: "San Francisco, CA 94112",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "5:00AM-12:00AM",
            Tuesday: "5:00AM-12:00AM",
            Wednesday:  "5:00AM-12:00AM",
            Thursday: "5:00AM-12:00AM",
            Friday: "5:00AM-12:00AM",
            Saturday: "5:00AM-12:00AM",
            Sunday: "5:00AM-12:00AM"
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
        type: "Public Spaces",
        address: "1705 14th Ave, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "Open 24 hours",
            Tuesday: "Open 24 hours",
            Wednesday:  "Open 24 hours",
            Thursday: "Open 24 hours",
            Friday: "Open 24 hours",
            Saturday: "Open 24 hours",
            Sunday: "Open 24 hours"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "Local park with cute dogs and views of Sutro Tower and the city from up high",
        //figure out links
        link: "https://sfrecpark.org",
        //store picture
        picture: 0,

    },
kirashop: {
        name: "The Kira Shop",
        type: "Storefronts",
        address: "1234 9th Ave, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "11:00AM-7:00PM",
            Tuesday: "11:00AM-7:00PM",
            Wednesday:  "11:00AM-7:00PM",
            Thursday: "11:00AM-7:00PM",
            Friday: "10:00AM-7:00PM",
            Saturday: "10:00AM-7:00PM",
            Sunday: "10:00AM-6:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 4,
        desc: "Eclectic Miffy-themed shop with plenty of cute and whimsical trinkets",
        //figure out links
        link: "https://thekirashop.com",
        //store picture
        picture: 0,

    },
   greenapplebookstore: {
        name: "Green Apple Bookstore",
        type: "Storefronts",
        address: "1231 9th Ave, San Francisco, CA 94122",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "10:00AM-9:00PM",
            Tuesday: "10:00AM-9:00PM",
            Wednesday:  "10:00AM-9:00PM",
            Thursday: "10:00AM-9:00PM",
            Friday: "10:00AM-9:00PM",
            Saturday: "10:00AM-9:00PM",
            Sunday: "10:00AM-9:00PM"
        },
        //level on scale of 1-2-3-4-5(higher # = more expensive)
        price: 3,
        desc: "Eclectic and curated bookstore around the local neighborhood popular with SF natives.",
        //figure out links
        link: "http://greenapplebooks.com/",
        //store picture
        picture: 0,

    },
    mountsutroosr: {
        name: "Mount Sutro Open Space Reserve",
        type: "Public Spaces",
        address: "San Francisco, CA 94131",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "Open 24 hours",
            Tuesday: "Open 24 hours",
            Wednesday:  "Open 24 hours",
            Thursday: "Open 24 hours",
            Friday: "Open 24 hours",
            Saturday: "Open 24 hours",
            Sunday: "Open 24 hours"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "",
        //figure out links
        link: "http://www.ucsf.edu/about/cgr/current-projects/mount-sutro-open-space-reserve",
        //store picture
        picture: 0,

    },
    
    
}


module.exports = {locations};