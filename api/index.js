const express = require('express');
const PORT = process.env.PORT || 3000
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv')
app.use('/ Money', (req, res)=>{})


dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})