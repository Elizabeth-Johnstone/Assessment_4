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


const {
  getShows,
  createShows,
  updateShows,
  deleteShows
} = require('./controller')

app.get('/api/shows', getShows)
app.post('/api/shows', createShows)
app.put(`/api/shows/:id`, updateShows)
app.delete(`/api/shows/:id`, deleteShows)


app.listen(4000, () => console.log("Server running on 4000"));
