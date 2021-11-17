const { Server } = require("http");
const mongoose  = require("mongoose")
const {app} = require("../../../server");

       // set server PORT
       const PORT = process.env.PORT || 8080

const connectionString = process.env.MONGO_URI

const ConnectDB = async()=>{
   try {
       // mongodb connection string
       const conn = await mongoose.connect(connectionString)

       console.log(`mongoDB connected : ${ (await conn).connection.host}`)

       const Server = app.listen(PORT,console.log(`SERVER LISTENING ON PORT:: ${PORT}....`.cyan))

       //unhandledRejection promis rejections

        process.on("unhandledRejection",(err,promis)=>{
            console.log(`unhandledRejection ERROR:: ${err}`.red);
            Server.close(()=>process.exit(1));
        })

   } catch (err) {
    console.log(`DB ERROR:: ${err}`.bgWhite)
    process.exit(1)
   }
}




module.exports ={ConnectDB};