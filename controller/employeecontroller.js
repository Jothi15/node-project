const employee = require("../Modules/employee");

module.exports = {
  add: async (req, res) => {
    try {
      const newdata = new employee(req.body);
      let data = await newdata.save();
      console.log(req.body);
      return res.status(200).json({
        sucess: true,
        message: "Data added successfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({ sucess: false, message: error.message });
    }
  },

  get: async (req, res) => {
    try {
      //  const newdata = new employee();
      let data = await employee.find();
      console.log(data);
      return res.status(200).json({
        sucess: true,
        message: "Data fetched successfully",
        data: data,

      });
    } catch (error) {
      return res.status(500).json({ sucess: false, message: error.message });
    }
  },
  gets: async (req, res) => {
    try {
      //  const newdata = new employee();
      let data = await employee.findById(req.params.id);
      console.log(data);
      return res.status(200).json({
        sucess: true,
        message: "Data fetched successfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({ sucess: false, message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      let data = await employee.findByIdAndDelete(req.params.id);
      console.log(data);
      return res.status(200).json({
        sucess: true,
        message: "Data deleted successfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({ sucess: false, message: error.message });
    }
  },
  
  update: async (req, res) => {
   try {
     let data = await employee.findOneAndUpdate({'_id': req.params.id},req.body,{
      upsert: true,
     }) 
     console.log(data);
     return res.status(200).json({
       sucess: true,
       message: "Data update was successful",
       data: data,
     });
   } catch (error) {
     return res.status(500).json({ sucess: false, message: error.message });
   }
 }



};
