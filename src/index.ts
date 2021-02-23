import express, {Application} from 'express';
import * as env from 'dotenv'
import * as test from './controllers/test'
env.config()
const app: Application = express();
const PORT: any = 5000 || process.env.PORT;

app.get("/", test.test);

app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`)
})