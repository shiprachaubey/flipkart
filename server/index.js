import Connection from "./database/db";
import DefaultData from "./default";

const app = express();
Dotenv.config();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;

const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
app.listen (PORT, ()=> console.log (`sever is running successfuly`));

DefaultData();