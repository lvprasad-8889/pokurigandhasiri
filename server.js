const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());



let mongoClient = require("mongodb").MongoClient;

mongoClient
  .connect(`${process.env.DBURL}`)
  .then((client) => {
    let normalDbObj = client.db("pokurigandhasiritrust999");
    let adminObj = client.db("pokurigandhasiritrustadmin999");

    // normal user collections
    let userObj = normalDbObj.collection("users");
    let bloodDonorsObj = normalDbObj.collection("blooddonors");
    let templeObj = normalDbObj.collection("temples");

    // admin collections
    let adminCredObj = adminObj.collection("admin");
    let adminEnquiryObj = adminObj.collection("enquiries");

    // normal users
    app.set("userObj", userObj);
    app.set("bloodDonorsObj", bloodDonorsObj);
    app.set("templeObj", templeObj);

    // admins
    app.set("adminCredObj", adminCredObj);
    app.set("adminEnquiryObj", adminEnquiryObj);

    console.log("Database connected successfully...");
  })
  .catch((error) => {
    console.log("Error in connecting to mongodb", error);
  });

// import apis

const userApis = require("./apis/userApis/userApis");
const adminApis = require("./apis/adminApis/adminApis");


app.use("/user", userApis);
app.use("/admin", adminApis);


app.use((err, req, res, next) => {
  res.send({ message: false, reason: `Error is ${err}` });
  next();
});

app.use("*", (req, res) => {
  res.send({
    message: `${req.baseUrl} does not exist`,
  });
});

// attaching a port number to server with listen
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});