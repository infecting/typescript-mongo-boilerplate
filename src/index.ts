import express, {Application} from 'express';
import * as env from 'dotenv'
import * as test from './controllers/test'
import { connectDatabase } from './utils/functions';
env.config()
const app: Application = express();
const PORT: number = 5000 || process.env.PORT;

connectDatabase();
app.get("/", test.test);

app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`)
})