
const express = require('express');
const router = require('express').Router();
const  employee = require('../controller/employeecontroller');

const multer  = require('multer')

const fileStorageEngine = multer.diskStorage({
  destination: (reqq,file,cd)=>{
    cd(null,'./file')
  },
  filename : (req,file,cb)=>{
    cb(null,Date.now() + '__' +file.originalname)
  }
});
 const upload = multer({storage : fileStorageEngine});

//CREATE
router.post("/add",upload.single('images'),employee.add);

// UPDATE
router.get("/get", employee.get);
router.get("/gets/:id", employee.gets);

// //DELETE
router.delete("/delete/:id", employee.delete);
router.put("/update/:id", employee.update);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

// router.get("/", getemployee);


module.exports = router; 
