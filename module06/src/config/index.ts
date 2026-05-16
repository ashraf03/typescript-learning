import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.resolve(process.cwd(),  '.env')})


const config1 = {
    port: Number(process.env.PORT),
}

export default config1;