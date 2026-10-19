const locations = {
    ex1restaurant: {
        name: "Example",
        address: "xyz",
        type: "Food and Drink",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "9:00AM-6:00PM",
            Tuesday: "9:00AM-6:00PM",
            Wednesday:  "9:00AM-6:00PM",
            Thursday: "9:00AM-6:00PM",
            Friday: "9:00AM-6:00PM",
            Saturday: "9:00AM-6:00PM",
            Sunday: "9:00AM-6:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 2,
        desc: "hello world! This is a test for descriptions. It should not be shown in the demo.",
        //figure out links
        link: "youtube.com",
        //store picture
        picture: ["images/infopage-placeholder.jpeg", "images/alpha_wolf.jpg"],
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        },
        tags: [
            "Legacy Business", 
            "In a Historically Disadvantaged Neighborhood", 
            "Close to Public Transit", 
            "Women-owned"
        ]
        
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
        picture: ["images/infopage-placeholder.jpeg", "images/alpha_wolf.jpg"],
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

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
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

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
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

    },


    deadmanspoint: {
        name: "Deadman's Point",
        type: "Public Spaces",
        address: "1114-1142 El Camino Del Mar, San Francisco, CA 94121",
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
        price: 0,
        desc: "Senic and relatively serene trail in Land's End, ocean views and lush nature",
        //figure out links
        link: "https://sfrecpark.org",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

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
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

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
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

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
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

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
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }

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
          //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },


    loquat: {
        name: "Loquat",
        address: "198 Gough St, San Francisco, CA 94102",
        type: "Food and Drink",
        time: {
            Monday: "8:00AM-5:00PM",
            Tuesday: "8:00AM-5:00PM",
            Wednesday:  "8:00AM-5:00PM",
            Thursday: "8:00AM-5:00PM",
            Friday: "8:00AM-5:00PM",
            Saturday: "8:00AM-5:00PM",
            Sunday: "8:00AM-5:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 3,
        desc: "Middle Eastern pastries and fare in a warm and cozy environment, with a special attention to detail",
        //figure out links
        link: "https://loquatsf.com",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

    hardwarecoffeeco: {
        name: "Hardware Coffee Co.",
        address: "32 W Portal Ave, San Francisco, CA 94127",
        type: "Food and Drink",
        time: {
            Monday: "7:00AM-6:00PM",
            Tuesday: "7:00AM-6:00PM",
            Wednesday:  "7:00AM-6:00PM",
            Thursday: "7:00AM-6:00PM",
            Friday: "7:00AM-6:00PM",
            Saturday: "7:00AM-6:00PM",
            Sunday: "7:00AM-6:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 2,
        desc: "2-floor cafe for all the workaholics and lovers of aesthetic spaces. There's also a florist in the back!",
        //figure out links
        link: "https://hardwarecoffee.co/pages/west-portal",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },
    qspecialtycoffee: {
        name: "Q Specialty Coffee",
        address: "3490 California St, San Francisco, CA 94118",
        type: "Food and Drink",
        time: {
            Monday: "7:00AM-5:30PM",
            Tuesday: "7:00AM-5:30PM",
            Wednesday:  "7:00AM-5:30PM",
            Thursday: "7:00AM-5:30PM",
            Friday: "7:00AM-5:30PM",
            Saturday: "7:00AM-5:30PM",
            Sunday: "7:00AM-5:30PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 3,
        desc: "Aesthetic cafe with an assortment of Asian-inspired caffienated drinks. Rich aroma and taste",
        //figure out links
        link: "https://www.qspecialtycoffee.com",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

     kawanoya: {
        name: "Kawanoya",
        address: "1689 Church St, San Francisco, CA 94131",
        type: "Food and Drink",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "Closed",
            Tuesday: "11:30AM-2:30PM and 4:30-9:30PM",
            Wednesday:  "11:30AM-2:30PM and 4:30-9:30PM",
            Thursday: "11:30AM-2:30PM and 4:30-9:30PM",
            Friday: "11:30AM-2:30PM and 4:30-10:30PM",
            Saturday: "11:30AM-2:30PM and 4:30-10:30PM",
            Sunday: "11:30AM-2:30PM and 4:30-9:30PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 4,
        desc: "Elevated Japanese fare, with addictively crunchy katsu and a casual + calm atmosphere.",
        //figure out links
        link: "https://kawanoya-sf.forumdas.com.tr/#gsc.tab=0",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },
    buenavista: {
        name: "Buena Vista Park",
        address: "Buena Vista &, Haight St, San Francisco, CA 94117",
        type: "Public Spaces",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "6:00AM-10:00PM",
            Tuesday: "6:00AM-10:00PM",
            Wednesday:  "6:00AM-10:00PM",
            Thursday: "6:00AM-10:00PM",
            Friday: "6:00AM-10:00PM0",
            Saturday: "6:00AM-10:00PM",
            Sunday: "6:00AM-10:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "Elevated park with stunning, city-wide views and surrounded by historical architecture.",
        //figure out links
        link: "https://sfrecpark.org/Facilities/Facility/Details/Buena-Vista-Park-155",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

    coronaheights: {
        name: "Corona Heights Park",
        address: "Roosevelt Way &, Museum Way, San Francisco, CA 94114",
        type: "Public Spaces",
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
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "Rocky park featuring higher-elevation views and a simple hike upwards, as well as a dog park.",
        //figure out links
        link: "https://sfrecpark.org/Facilities/Facility/Details/Corona-Heights-Park-328",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

    fiftyfifty: {
        name: "fifty/fifty",
        address: "3157 Geary Blvd, San Francisco, CA 94118",
        type: "Food and Drink",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "7:30AM-4:00PM",
            Tuesday: "7:30AM-4:00PM",
            Wednesday:  "7:30AM-4:00PM",
            Thursday: "7:30AM-4:00PM",
            Friday: "7:30AM-4:00PM",
            Saturday: "8:00AM-4:00PM",
            Sunday: "8:00AM-4:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 2,
        desc: "Small cafe serving tea lattes and pastries with an open and airy feeling to it.",
        //figure out links
        link: "https://fiftyfiftysf.square.site/",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

    whiskerwoodhaven: {
        name: "Whiskerwood Haven",
        address: "3000 Geary Blvd, San Francisco, CA 94118",
        type: "Other",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "11:00AM-7:00PM",
            Tuesday: "11:00AM-7:00PM",
            Wednesday:  "11:00AM-7:00PM",
            Thursday: "11:00AM-7:00PM",
            Friday: "11:00AM-7:00PM",
            Saturday: "11:00AM-7:00PM",
            Sunday: "11:00AM-7:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 2,
        desc: "Open space featuring adorable cats and drinks. Reservations and payment required.",
        //figure out links
        link: "https://whiskerwoodhaven.com/",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

    tailorsson: {
        name: "The Tailor's Son",
        address: "2049 Fillmore St, San Francisco, CA 94115",
        type: "Food and Drink",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "11:30AM-9:30PM",
            Tuesday: "11:30AM-9:30PM",
            Wednesday:  "11:30AM-9:30PM",
            Thursday: "11:30AM-9:30PM",
            Friday: "11:30AM-10:30PM",
            Saturday: "11:00AM-10:30PM",
            Sunday: "11:00AM-9:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 4,
        desc: "Bright and eclectic space for Milanese cuisine with a flair for the classics, elevated.",
        //figure out links
        link: "https://thetailorssonsf.com/",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

    isseigarden: {
        name: "Issei Garden",
        address: "Fillmore St & Sutter St, San Francisco, CA 94115",
        type: "Public Spaces",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "11:30AM-9:30PM",
            Tuesday: "11:30AM-9:30PM",
            Wednesday:  "11:30AM-9:30PM",
            Thursday: "11:30AM-9:30PM",
            Friday: "11:30AM-10:30PM",
            Saturday: "11:00AM-10:30PM",
            Sunday: "11:00AM-9:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "Small and quiet garden dedicated to the first generation of Japanese immigrants to the US. Located within residential areas, so be mindful.",
        //figure out links
        link: "https://sfrecpark.org/AgendaCenter/ViewFile/Item/48?fileID=8780",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },

    jeffersonsquare: {
        name: "Jefferson Square Park",
        address: "950 Gough St, San Francisco, CA 94102",
        type: "Public Spaces",
        //time: ["9:00-6:00","9:00-6:00","9:00-6:00",
            //"9:00-6:00","9:00-6:00","9:00-6:00","9:00-6:00"],
        //or
        time: {
            Monday: "6:00AM-10:00PM",
            Tuesday: "6:00AM-10:00PM",
            Wednesday:  "6:00AM-10:00PM",
            Thursday: "6:00AM-10:00PM",
            Friday: "6:00AM-10:00PM",
            Saturday: "6:00AM-10:00PM",
            Sunday: "6:00AM-10:00PM"
        },
        //level on scale of 1-2-3-4-5 (higher # = more expensive)
        price: 0,
        desc: "Senic park that overlooks Downtown's city skyline.",
        //figure out links
        link: "https://sfrecpark.org/facilities/facility/details/Jefferson-Square-343",
        //store picture
        picture: "images/infopage-placeholder.jpeg",
        comments: {
            c1:{
                username: "X",
                comment: "yay!", 
                likes: 6
            },
            c2: {
                username: "Y",
                comment: "wow",
                likes: 2
            }

        }
        
    },
    
    

    
    
}


module.exports = {locations};