const express = require('express');
const {rootRouter}= require('./routers')
const {sequelize} =require('./models')
const path = require('path')

var cors = require('cors')
var app = express()
app.use(cors())
const port = 4500

//cai ung dung kieu json
app.use(express.json())

//cai static file
const publicPathDir = path.join(__dirname,"./public");
app.use("/public",express.static(publicPathDir));


app.use('/library-manager', rootRouter);

app.listen(port, async () => {
  console.log("App listening on http://localhost:4500");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});