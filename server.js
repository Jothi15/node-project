const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employe =require("./Routes/employeeroutes")
const employes =require("./Routes/employeesroutes")
const cors = require('cors');
const Employe = require("./Modules/employees")
const multer = require("multer")


const app = express();
app.use(cors({ origin: true }));
app.use(express.json())

 
app.use(bodyParser.json());

 
mongoose
  .connect("mongodb+srv://jothi:jothi@cluster0.uhnsitc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

 

// --Routes
app.use("/", employe);
app.use("/a", employes);



 
global.__basedir = __dirname;

// const corsOptions = {
//   origin: "http://localhost:3000"
// };

// app.use(cors(corsOptions));

const initRoutes = require("./Routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 5000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});