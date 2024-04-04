import dotenv  from "dotenv"
import {connectDB,  disconnectDB } from "./components/database.config.js"



dotenv.config()


class Facade{

    constructor(){
        this.env = process.env
    }

    _connectDB(){
        
        return connectDB(this.env.MONGO_URI)
    }

    _disconnectDB(){
        return disconnectDB()
    }   

    

}

export default Facade