// creo la costante per l'importazione del modulo Express
const express = require("express");
// creo l'istanza di Express
const app = express();
// indico la porta su cui il server deve ascoltare
const port = 3001;

// dico a Express di servire i file statici presenti nella cartella public (middleware)
app.use(express.static("public"))

// dico al server di ascoltare
app.listen(port, () => {
    console.log("Il server è in ascolto")
});

// definisco la rotta
app.get("/bacheca", (req, res) => {
    console.log("Server del mio blog");
    // esplicito il contenuto della richiesta
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
    // invio la risposta al client
    res.send(posts)
});