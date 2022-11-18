import express from 'express';
import cors from 'cors';
import * as controller from "./controller.js"
import mongoose from 'mongoose';
import 'dotenv/config';


// Important variables
const app = express();
const PORT = 3000;
const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI

app.use(cors())
app.use(express.json());
// End on important variables

// Routes

app.get('/getdatabase', (req, res) => {
  controller.getDatabase().then(answer => res.json(answer))
})

app.put('/check',  (req, res) => {
  controller.check(req.body)
})

app.post('/structuredata',  (req, res) => {
  res.json(controller.structureData(req.body.task))
})

app.post('/save',  (req, res) => {
  const { id, task, date, checked } = req.body
  controller.save(id, task, date, checked)

  res.send()
})

app.delete('/delete/:id',  (req, res) => {
  let nrId = Number((req.params.id.slice(1)))
  controller.deleteTask(nrId)
})

// End of routes

// Initiate server, connect to DB
app.listen(PORT, () => console.log('Server running on: ' + serverURI));
mongoose.connect(mongoURI, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Connected to database')
})