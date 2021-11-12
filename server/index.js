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

  const carReply = ["Cool!",
            "Nice choice.",
            "Awesome.",
  ];
  let carIndex = Math.floor(Math.random() * carReply.length);
  let randomCarReply = carReply[carIndex];

  res.status(200).send(randomCarReply);
});

app.get("/api/animal", (req, res) => {

  const animalReply = ["You should get one!",
            "What's your favorite type?",
            "Do you have one?",
  ];
  let animalIndex = Math.floor(Math.random() * animalReply.length);
  let randomAnimalReply = animalReply[animalIndex];

  res.status(200).send(randomAnimalReply);
});

app.get("/api/favoriteForm", (req, res) => {


  const favoriteReply = ["Thank you!",
            "INTERESTING!",
  ];
  let favoriteIndex = Math.floor(Math.random() * favoriteReply.length);
  let randomFavoriteReply = favoriteReply[favoriteIndex];

  res.status(200).send(randomFavoriteReply);
});



app.post('/api/', (req, res) => {
  let {firstName, lastName} = req.body
  
  res.status(200).send(`Welcome! It is nice to meet you ${firstName} ${lastName}.`)
})


app.listen(4000, () => console.log("Server running on 4000"));
