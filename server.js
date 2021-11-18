const Express = require("express");
const morgan = require("morgan");
require("colors");
require("dotenv").config({path: "./config/config.env"});

//require mongoDB connection  method


// express app

const app = Express();

// log requests
if(process.env.NODE_ENV === "development"){
    app.use(morgan('tiny'));
   // console.log("development")
}



// set view engine
app.set("view engine" , "ejs")
// parse request to body-parser
app.use(Express.urlencoded({extended: false}))
app.use(Express.json());



// load assets




// load routers

app.use("/",require("./server/routes/routes"))

//test
app.get('/test',(req,res)=>{
    return res.send(`<h1>Server Is Healthy Runing on PORT:: ${process.env.PORT} </h1>`);
})
//404
app.all("*",(req,res)=>{
    return res.send(`<h1> Not Found 404 </h1>`)
})



module.exports = {app};
const {ConnectDB } = require("./server/database/connection/connectDB");
// mongodb connection
ConnectDB()
