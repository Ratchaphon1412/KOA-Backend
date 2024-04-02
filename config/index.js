import dotenv  from "dotenv"
import {connectDB} from "./components/database.config.js"



dotenv.config()


class Facade{

    constructor(){
        this.env = process.env
    }

    _connectDB(){
        
        return connectDB(this.env.MONGO_URI)
    }

    

}

export default Facade