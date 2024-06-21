import { json } from 'body-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './user-router';
import { connect, connection } from "mongoose";

// connection code for mongodb.
const USERNAME = "sample";  // 👈 keep your db username taken from mongodb cloud.
const PASSWORD = "dtO3rFyINGslNBRi"; // 👈 keep your db password taken from mongodb cloud.
const DB_NAME = "SampleCluster";
// change below URL according you our  mongodb cloud.
const URL = `mongodb+srv://Sample:<password>@samplecluster.5geze6f.mongodb.net/`; // get this cloud mongodb. so that we can host.
/**mongodb+srv://Sample:<password>@samplecluster.5geze6f.mongodb.net/?retryWrites=true&w=majority&appName=SampleCluster
 * ------------------------------------------------------------
 * 
 *            ☠️    DON't FORGET TO READ BELOW LINE   ☠️
 * 
 * ------------------------------------------------------------
 * 
 * 
 *  Things you want to change in above ⚠️ URL ⚠️ 
 *  👉 @samplecluster.g2aijmc.mongodb.net/ 👈 this will be changing for each and every user.
 *      Make sure to change this.
 */

connect(URL);
connection.on('connected', () => {
    console.log("mongodb is connected.");
});

const app = express();
// middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(json());

// routes
app.use('/spotify', userRouter);
app.all('/', (_req, res) => {
    res.send("application is working fine.");
})
export default app;