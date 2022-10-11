const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employe =require("./Routes/employeeroutes")
const employes =require("./Routes/employeesroutes")
const cors = require('cors');
const Employe = require("./Modules/employees")
const multer = require("multer")

// const passport = require("passport");
// const fresher = require("./routes/api/fresher");
// const users = require("./routes/api/users");
// const company = require("./routes/api/company");
// const cors = require("cors");
// const path = require("path");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json())

// app.use(cors());

// Bodyparser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// --DB Config
// const db = require("./config/keys").mongoURI;
// module.exports = {
//     mongoURI: "mongodb://localhost/bril",
//     secretOrKey: "secret"
//   };

mongoose
  .connect("mongodb+srv://jothi:jothi@cluster0.uhnsitc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// --Passport middleware
// app.use(passport.initialize());
  
// --Passport config
// require("./config/passport")(passport);

// --Routes
app.use("/", employe);
app.use("/a", employes);



// app.use("/api/fresher", fresher);
// app.use("/api/company", company);
// app.use(express.static(path.join(__dirname, "client/build")));
// if (process.env.NODE_ENV === "production") {
//   console.log(process.env.NODE_ENV);
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/client/build/index.html"));
//   });
// }

const fileStorageEngine = multer.diskStorage({
  destination: (req,file,cd)=>{
    cd(null,'./controller')
  },
  filename : (req,file,cb)=>{
    cb(null,Date.now() + '__' +file.originalname)
  }
});
 const upload = multer({storage : fileStorageEngine});

//  app.post("/single",upload.single('images'),(req,res)=>{
//   console.log(req.file);
//   res.send("data is upload")
//  })

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

const initRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 5000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});