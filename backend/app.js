const express = require('express')
const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ritik:a6JStm3RATm64bDD@cluster0.nxocqh9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
var distinctValues;
async function run() {
  try {
    const database = client.db('assignment');
    const data = database.collection('dashboard');
    // Query for a movie that has the title 'Back to the Future'
    const fieldName = "topic";
    // specify an optional query document
    const query = { };
    distinctValues = await data.distinct(fieldName, query);
    console.log(distinctValues);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send(distinctValues)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})