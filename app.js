const express = require("express");
const app = express();
const morgan = require("morgan");
const post = require("./routes/post");
const dotenv = require("dotenv");
const mongoose =require("mongoose");
const bodyParser = require("body-parser");

dotenv.config()

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
.then(()=>console.log("DB Connected"));

mongoose.connection.on("error",err=>{
	console.log(err.message);
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/",post);
app.use("/post",post);

const port = process.env.PORT;
app.listen(port,()=>{
	console.log(`listening at port : ${port}`);
})
