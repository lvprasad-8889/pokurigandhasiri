let express = require("express");

let adminApp = express.Router();

let expressAsyncHandler = require("express-async-handler");
let jwt = require("jsonwebtoken");
let bcryptjs = require("bcryptjs");

let verifyToken = require("./adminMiddleware");

adminApp.get(
  "/enquiries/:enquiryValue",
  verifyToken,
  expressAsyncHandler(async (req, res) => {
    let adminEnquiryObj = req.app.get("adminEnquiryObj");
    let enquiryValue = req.params.enquiryValue
    let enquiries = await adminEnquiryObj.find({
      enquiryValue
    }).toArray();
    res.send({
      message: true,
      admin: true,
      enquiries,
    });
  })
);

adminApp.post(
  "/register",
  verifyToken,
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
        admin: true,
      });
    } else {
      res.send({
        message: false,
        reason: "User already exist",
      });
    }
  })
);

adminApp.put(
  "/update-enquiry-status",
  expressAsyncHandler(async (req, res) => {
    let adminEnquiryObj = req.app.get("adminEnquiryObj");
    let enquiryCredentials = req.body;

    let updateDetails = await adminEnquiryObj.updateOne(
      { mailId: enquiryCredentials.mailId },
      {
        $set: {
          enquiryValue: enquiryCredentials.status.toString(),
        },
      }
    );

    let enquiries = await adminEnquiryObj.find({
      enquiryValue: "0"
    }).toArray();
    
    res.send({
      message: true,
      admin: true,
      enquiries
    });
  })
);

adminApp.delete(
  "/delete-enquiry/:mailId", verifyToken,
  expressAsyncHandler(async (req, res) => {
    let adminEnquiryObj = req.app.get("adminEnquiryObj");
    let mailId = req.params.mailId;

    let deleteDetails = await adminEnquiryObj.deleteOne(
      { mailId }
    );
    let enquiries = await adminEnquiryObj.find({
      enquiryValue: "0"
    }).toArray();
    res.send({
      message: true,
      admin: true,
      enquiries
    });
  })
);

adminApp.delete(
  "/delete-donor/:phNo/:bloodGroup", verifyToken,
  expressAsyncHandler(async (req, res) => {
    let bloodDonorsObj = req.app.get("bloodDonorsObj");
    let phNo = req.params.phNo;
    let bloodGroup = req.params.bloodGroup;

    console.log(phNo, bloodGroup)
    let deleteDetails = await bloodDonorsObj.deleteOne(
      { phNo }
    );
    let bloodDonorsList = await bloodDonorsObj.find({
      bloodGroup
    }).toArray();
    res.send({
      message: true,
      admin: true,
      result : bloodDonorsList
    });
  })
);

module.exports = adminApp;
