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

app.get("/api/number", (req, res) => {
  const luckyNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numberIndex = Math.floor(Math.random() * luckyNumber.length);
  let randomNumber = luckyNumber[numberIndex];

  res.status(200).send(randomNumber);
});

app.get("/api/advice", (req, res) => {
  const advice = ["Seize the day!",
            "Live in the present moment.",
            "Smile.",
  ];
  let adviceIndex = Math.floor(Math.random() * advice.length);
  let randomAdvice = advice[adviceIndex];

  res.status(200).send(randomAdvice);
});

app.get("/api/favoriteForm", (req, res) => {
  res.status(200).send(`Thank you!`);
});



app.post('/api/', (req, res) => {
  let {firstName, lastName} = req.body
  
  res.status(200).send(`Welcome! It is nice to meet you ${firstName} ${lastName}.`)
})


app.listen(4000, () => console.log("Server running on 4000"));
