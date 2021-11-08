const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Don’t just think, act!",
            "Go take a rest; you deserve it.",
            "Happiness will bring you good luck.",
  ];
  let fortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[fortuneIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/car", (req, res) => {
  carReply = "Cool!"

  res.status(200).send(carReply);
});

app.get("/api/animal", (req, res) => {
  const animalReply = ["Good choice!"];

  res.status(200).send(animalReply);
});

app.get("/api/favoriteForm", (req, res) => {
  res.status(200).send(`Thank you!`);
});



app.post('/api/', (req, res) => {
  let {firstName, lastName} = req.body
  
  res.status(200).send(`Welcome! It is nice to meet you ${firstName} ${lastName}.`)
})


app.listen(4000, () => console.log("Server running on 4000"));
