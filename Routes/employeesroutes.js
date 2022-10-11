
var express = require('express');
const path =  require('path')
const router = require('express').Router();

const  employee = require('../controller/employeescontroller');
const uploads = require('../helpers/helpers.js')
const multer  = require('multer')

// const imageStorage = multer.diskStorage({
//     // Destination to store image     
//     destination: 'image', 
//       filename: (req, file, cb) => {
//           cb(null, file.fieldname + '_' + Date.now() 
//              + path.extname(file.originalname))
//             // file.fieldname is name of the field (image)
//             // path.extname get the uploaded file extension
//     }
// });

// const imageUpload = multer({
//     storage: imageStorage,
//     limits: {
//       fileSize: 1000000 // 1000000 Bytes = 1 MB
//     },
//     fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(png|jpg)$/)) { 
//          // upload only png and jpg format
//          return cb(new Error('Please upload a Image'))
//        }
//      cb(undefined, true)
//   }
// }) 
const fileStorageEngine = multer.diskStorage({
  destination: (req,file,cd)=>{
    cd(null,'./file')
  },
  filename : (req,file,cb)=>{
    cb(null,Date.now() + '__' +file.originalname)
  }
});
 const upload = multer({storage : fileStorageEngine});

//CREATE


router.post("/adds", upload.single('images'),employee.adds);
// UPDATE
router.get("/gets", employee.gets);
router.get("/gets/:id", employee.getss);
// //DELETE
router.delete("/deletes/:id", employee.deletes);
router.put("/updates/:id", employee.updates);
// //GET
// router.get("/find/:id", getHotel);
// //GET ALL

// router.get("/", getemployee);


module.exports = router; 
