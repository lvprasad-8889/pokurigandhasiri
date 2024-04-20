let express = require("express");

let adminApp = express.Router();

let expressAsyncHandler = require("express-async-handler");
let jwt = require("jsonwebtoken");
let bcryptjs = require("bcryptjs");

let verifyToken = require("./adminMiddleware");

adminApp.get(
    "/enquiries", verifyToken,
    expressAsyncHandler(async (req, res) => {
      let adminEnquiryObj = req.app.get("adminEnquiryObj");
      let enquiries = await adminEnquiryObj.find().toArray();
      res.send({
        message: true,
        result: enquiries
      });
    })
  );

adminApp.post(
    "/register",
    expressAsyncHandler(async (req, res) => {
      let adminCredObj = req.app.get("adminCredObj");
      let userCredentials = req.body;
      let nameExist = await adminCredObj.findOne({ name: userCredentials.name });

      if (!nameExist) {
        let hashedPassword = await bcryptjs.hash(
          userCredentials.password,
          +process.env.HASH_KEY_LENGTH_FOR_ADMIN_USER
        );

        userCredentials.password = hashedPassword;
        userCredentials.created_at = new Date();
        userCredentials.updated_at = new Date();
        let result = await adminCredObj.insertOne(userCredentials);
        res.send({
          message: true,
          admin: true
        });

      } else {
        res.send({
          message: false,
          reason: "User already exist"
        });
      }
    })
  );


module.exports = adminApp;