let express = require("express");

let miniApp = express.Router();

let expressAsyncHandler = require("express-async-handler");
let jwt = require("jsonwebtoken");
let bcryptjs = require("bcryptjs");

miniApp.get(
  "/blood-donors/:bloodGroup",
  expressAsyncHandler(async (req, res) => {
    let bloodDonorsObj = req.app.get("bloodDonorsObj");
    let bloodGroup = req.params.bloodGroup;
    console.log(req.body)
    let bloodDonors = await bloodDonorsObj.find({
      bloodGroup
    }).toArray();
    res.send({
      message: true,
      result: bloodDonors,
    });
  })
);

miniApp.post(
  "/add-blood-donor",
  expressAsyncHandler(async (req, res) => {
    let bloodDonorsObj = req.app.get("bloodDonorsObj");
    let bloodDonorCredentials = req.body;
    let nameExist = await bloodDonorsObj.findOne({
      name: bloodDonorCredentials.name,
    });
    let phNoExist = await bloodDonorsObj.findOne({
      phNo: bloodDonorCredentials.phNo,
    });

    if (!nameExist && !phNoExist) {
      let result = await bloodDonorsObj.insertOne(bloodDonorCredentials);
      res.send({
        message: true,
      });
    } else {
      res.send({
        message: false,
        reason: "Blood donor already exist",
      });
    }
  })
);

miniApp.post(
  "/add-enquiry",
  expressAsyncHandler(async (req, res) => {
    let adminEnquiryObj = req.app.get("adminEnquiryObj");
    let enquiryCredentials = req.body;
    let nameExist = await adminEnquiryObj.findOne({
      name: enquiryCredentials.name,
    });
    let phNoExist = await adminEnquiryObj.findOne({
      phNo: enquiryCredentials.phNo,
    });

    if (!nameExist && !phNoExist) {
      let result = await adminEnquiryObj.insertOne(enquiryCredentials);
      res.send({
        message: true,
      });
    } else {
      res.send({
        message: false,
        reason: "Only one enquiry per person",
      });
    }
  })
);

miniApp.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    let userObj = req.app.get("userObj");
    let adminCredObj = req.app.get("adminCredObj");
    let userCredentials = req.body;
    let usernameExist = await userObj.findOne({
      username: userCredentials.name,
    });

    let usernameExistInAdmin = await adminCredObj.findOne({
      username: userCredentials.name,
    });

    console.log(usernameExist);

    if (usernameExistInAdmin) {
      let passwordMatched = await bcryptjs.compare(
        userCredentials.password,
        usernameExistInAdmin.password
      );

      if (passwordMatched) {
        let keyToEncrypt = process.env.ADDEDKEYFORADMIN;

        let token = jwt.sign({ name: userCredentials.name }, keyToEncrypt, {
          expiresIn: "1d",
        });
        let updatedAt = await adminCredObj.updateOne(
          { username: userCredentials.name },
          {
            $set: {
              updated_at: new Date(),
            },
          }
        );
        let profile = await adminCredObj.findOne({
          username: userCredentials.name,
        });
        res.send({
          message: true,
          admin: true,
          profile,
          token,
        });
      } else {
        res.send({
          message: false,
        });
      }
    } else if (usernameExist) {
      let passwordMatched = await bcryptjs.compare(
        userCredentials.password,
        usernameExist.password
      );

      if (passwordMatched) {
        let keyToEncrypt = process.env.ADDEDKEYFORUSER;

        let token = jwt.sign({ username: userCredentials.name }, keyToEncrypt, {
          expiresIn: "1d",
        });
        let updatedAt = await userObj.updateOne(
          { username: userCredentials.name },
          {
            $set: {
              updated_at: new Date(),
            },
          }
        );
        let profile = await userObj.findOne({ username: userCredentials.name });
        res.send({
          message: true,
          profile,
          token,
        });
      } else {
        res.send({
          message: false,
        });
      }
    } else {
      res.send({
        message: false,
      });
    }
  })
);

miniApp.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    let userObj = req.app.get("userObj");
    let userCredentials = req.body;
    let nameExist = await userObj.findOne({
      username: userCredentials.username,
    });
    let phNoExist = await userObj.findOne({ phNo: userCredentials.phNo });
    if (!nameExist && !phNoExist) {
      let hashedPassword = await bcryptjs.hash(
        userCredentials.password,
        +process.env.HASH_KEY_LENGTH_FOR_NORMAL_USER
      );

      userCredentials.password = hashedPassword;
      userCredentials.created_at = new Date();
      userCredentials.updated_at = new Date();
      let result = await userObj.insertOne(userCredentials);
      res.send({
        message: true,
      });
    } else {
      res.send({
        message: false,
        reason: "User already exist",
      });
    }
  })
);

module.exports = miniApp;
