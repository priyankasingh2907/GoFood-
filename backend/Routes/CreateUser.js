const express = require("express");
const router = express.Router();

const { body , validationResult} = require("express-validator");
const User = require("../models/User");
router.post("/createuser",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("location").notEmpty().withMessage("Location is required")
  ]
  , async (req, res) => {
  try {

    const errors= validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }



    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location
    });
    res.json({ success: true,
      message: "User created successfully" ,
      data:User
     });
  } catch (error) {
    console.log(error);
    res.json({ success: false ,
      message: error.message 
    });
  }
});

router.post("/loginuser",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ]
  , async (req, res) => {
    const errors= validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let userEmail= req.body.email;
  try {
   let userData =  await User.findOne({userEmail});
     if(!userData){
       return res.json({success: false,
         message: "User not found"

       });
     }
     if(req.body.password === userData){
       return res.json({success: true,
         message: "Login successful", 
         data: userData});
     }
      res.json({ 
      success: true,
      data: userData ,
      
     });
  } catch (error) {
    console.log(error);
    res.json({ success: false ,
      message: error.message 
    });
  }
});

module.exports = router;
