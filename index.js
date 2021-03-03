//requiring dependencies
const express = require('express');

const app = express();
app.listen()
const PORT = 3200;
app.use(express.static('public'))

app.listen(PORT,()=>{console.log(`listening on port ${PORT}`)})