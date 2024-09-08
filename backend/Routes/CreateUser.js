const express = require("express");
const router = express.Router();

const { body , validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("json-web-token");
const jwtSecret = "MyNameIsEndToEndTouTuneChannel";
router.post("/createuser",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("location").notEmpty().withMessage("Location is required")
  ]
  , async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    let setPassword = await bcrypt.hash(req.body.password,salt);
  try {

    const errors= validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: setPassword,
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

     const pasCompare = await bcrypt.compare(req.body.password,userData.password);
     if(!pasCompare){
       return res.status(400).json({
        errors:"try with correct credentials."
       });
     }
     const data = {
      user : {
      }
     }
     const autToken = jwt.sign(data,jwtSecret);
      
      res.json({ 
      success: true,
      data: userData ,
      authToken:autToken
        
     });
  } catch (error) {
    console.log(error);
    res.json({ success: false ,
      message: error.message 
    });
  }
});

module.exports = router;
