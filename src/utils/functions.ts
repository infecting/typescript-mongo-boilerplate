import mongoose from 'mongoose'
import * as env from 'dotenv'
env.config()

export var connectDatabase = async () => {                                      
    let uri:string = process.env.MONGO_URI!
    try {                                                                       
        await mongoose.connect(uri,
            {
              user: "admin",
              pass: process.env.PASSWORD,
              "useNewUrlParser": true,
              "useCreateIndex": true,
              "useUnifiedTopology": true
            })
        console.log("Database connection established")                          
    } catch (e) {                                                               
        console.log(e)                                                          
    }                                                                           
}   