const express = require("express");
const app = express();
const port = 3000;

app.get("/", req, res => {
    console.log("Server del mio blog");
    
    const posts = [
        {
            id: 1,
            title: "Post 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "/images/ciambellone.jpeg",
            tag: ["ricetta", "ciambellone"]
        },
        {
            id: 2,
            title: "Post 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "/images/cracker_barbabietola.jpeg",
            tag: ["ricetta", "cracker", "barbabietola"]
        },
        {
            id: 3,
            title: "Post 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "/images/pane_fritto_dolce.jpeg",
            tag: ["ricetta", "pane", "fritto", "dolce"]
        },
        {
            id: 4,
            title: "Post 4",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "/images/pasta_barbabietola.jpeg",
            tag: ["ricetta", "pasta", "barbabietola"]
        },
        {
            id: 5,
            title: "Post 5",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "/images/torta_paesana.jpeg",
            tag: ["ricetta", "torta", "paesana"]
        },
    ]

    res.json(posts)
});