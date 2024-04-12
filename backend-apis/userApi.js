const exp = require("express");
const miniexp = exp.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

miniexp.use(exp.json());

miniexp.get("/getcards", async (req, res) => {
  let mygameObj = req.app.get("gameObj");
  let users = await mygameObj.find().toArray();

  res.send({
    message: users,
  });
});

miniexp.post("/createcarousel", async (req, res) => {
  let data = req.body;

  let dbObj = req.app.get("dbObj");

  let users = await dbObj.collection("homec").insertOne(data);

  res.send({
    message: true,
  });
});

miniexp.get("/getcarousel", async (req, res) => {
  let mygameObj = req.app.get("dbObj");
  let users = await mygameObj.collection("homec").find().toArray();
  res.send({
    message: users,
  });
});

miniexp.post("/createuser", async (req, res) => {
  let userObj = req.body;
  console.log(userObj.email);
  let mycollectionObj = req.app.get("collectionObj");
  let userAwait = await mycollectionObj.findOne({ email: userObj.email });
  if (userAwait != null) {
    res.send({
      message: "user already exists",
    });
  } else {
    let hashedPassword = await bcryptjs.hash(userObj.password, 6);
    userObj.password = hashedPassword;
    let result = await mycollectionObj.insertOne(userObj);
    res.send({
      message: "user created",
    });
  }
});

miniexp.post("/dashboard", async (req, res) => {
  let userLoginData = req.body;

  let mycollectionObj = req.app.get("collectionObj");
  let userEmail = await mycollectionObj.findOne({ email: userLoginData.email });

  if (userEmail == null) {
    res.send({
      message: "Invalid email",
    });
  } else {
    let comparePasswords = await bcryptjs.compare(
      userLoginData.password,
      userEmail.password
    );
    if (comparePasswords == false) {
      res.send({
        message: "Invalid password",
      });
    } else {
      let signedToken = await jwt.sign({ email: userLoginData.email }, "abcd", {
        expiresIn: 1000,
      });

      res.send({
        message: "password matched",
        jwt: signedToken,
        userObj: userEmail,
      });
    }
  }
});

miniexp.post("/updateuser", async (req, res) => {
  let existedData = req.body;
  let mycollectionObj = req.app.get("collectionObj");
  let hashedPassword = await bcryptjs.hash(existedData.password);
  let updateData = await mycollectionObj.updateOne(
    { email: existedData.email },
    {
      $set: {
        email: existedData.email,
        username: existedData.username,
        password: hashedPassword,
      },
    }
  );
  res.send({
    message: "user updated",
  });
});

const verifyToken = (req, res, next) => {
  let tokenWithBearer = req.headers["authorisation"];
  if (tokenWithBearer == undefined) {
    res.send({
      message: false,
    });
  }
  if (tokenWithBearer.startsWith("Bearer ")) {
    let token = tokenWithBearer.slice(7, tokenWithBearer.length);
    jwt.verify(token, "abcd", (err, decoded) => {
      if (err) {
        return res.send({
          mesaage: false,
        });
      } else {
        next();
      }
    });
  }
};

miniexp.get("/test", verifyToken, (req, res) => {
  res.send({
    message: true,
  });
});

module.exports = miniexp;
