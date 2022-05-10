const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! wellcome to my node!!");
});

const users = [
  {
    id: 1,
    age: 27,
    name: "Kim Benton",
    gender: "female",
    email: "kimbenton@telequiet.com",
  },
  {
    id: 2,
    age: 34,
    name: "Lynch Chase",
    gender: "male",
    email: "lynchchase@telequiet.com",
  },
  {
    id: 3,
    age: 30,
    name: "Trina Mercer",
    gender: "female",
    email: "trinamercer@telequiet.com",
  },
  {
    id: 4,
    age: 37,
    name: "Goff Mayer",
    gender: "male",
    email: "goffmayer@telequiet.com",
  },
  {
    id: 5,
    age: 29,
    name: "Carolina Charles",
    gender: "female",
    email: "carolinacharles@telequiet.com",
  },
];

app.get("/users", (req, res) => {
  // search by query parameter  
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else{
    res.send(users);
  }
});

app.get("/user/:id", (req, res) =>{
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  res.send(user);
});

app.post('/user', (req,res) =>{
  console.log(req.body);
  const user = req.body;
  user.id= users.length +1;
  users.push(user);
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
