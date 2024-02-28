const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const jobModel = require("./jobModel");

const connectdb = require("./db");
// const BASE_URL = process.env.BASE_URL;
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.json())
app.use(cors())

router.post("/contact", async (req,res)=>{
  try {
    const data = await jobModel.create({
        jobType : req.body.job,
        contactNumber : req.body.number,
        email : req.body.email,
        address : req.body.address
    })
    res.status(202).json({
        success : true,
        data,
     

    })
  } catch (error) {
   res.status(404).json({
    success : false
   }) 
  }

})

app.get("/",(req, res)=>{
    res.send("hello");
})

connectdb();
app.use("/api",router);
app.listen(port , ()=>{
    console.log(`server started on the port number => ${port}` );
})
