const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const loginRoutes = require("./routes/authRoutes.js");
const movieRoutes = require("./routes/movGenreRoutes.js");
const postRoutes = require("./routes/postRoute.js");
const { MONGO_URI } = require("./config.js");
const { default: mongoose } = require("mongoose");

// MIDDLEWARES:
// converts data through reqs into json object
app.use(express.json());
// shares static files(css, images, jS) directly through files
app.use("/static", express.static(path.join(__dirname, "static files")));

// send a single file
app.get("/sendFile", (req, res) => {
  res.sendFile(path.join(__dirname, "1.avif"));
});

// post request
// app.post('/create', (req,res)=>{
//     const {name,age} = req.body
//     res.send({name,age})
// })

// Get requests
// app.get('/', (req,res)=>{
//     res.set('Content-Type','text/html')
//     res.send("<h1>hello world</h1>")
// })
// app.get('/home', (req,res)=>{
//     res.send("home")
// })
// app.get('/about', (req,res)=>{
//     res.send("about")
// })

// Routing
// router.get('/scifi', (req,res,next)=>{
//     res.send("I love sci-fi movies...")
// })
// router.get('/action', (req,res,next)=>{
//     res.send("I love action movies...")
// })

// router.get('/biryani', (req,res,next)=>{
//     res.send("I love chicken biryani...")
// })
// router.get('/smokyChicken', (req,res,next)=>{
//     res.send("I love Kfc's smoky chicken...")
// })

mongoose.connect(MONGO_URI).then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", loginRoutes);
app.use("/movies", movieRoutes);
app.use("/post", postRoutes);

app.listen(8090, () => {
  console.log("server running at http://localhost:8090/");
});
