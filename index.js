const express = require('express')
const app = express()
const port = 5000



const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://burjAlArab:Arab..2021@cluster0.20tqz.mongodb.net/Burj-Al-Arab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Burj-Al-Arab").collection("Booking");
  console.log('database connection established');
  client.close();
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})