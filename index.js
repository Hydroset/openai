const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = Number(process.env.PORT) || 5000;
//const cors = require('cors');

const app = express();

//app.use(cors());

//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))


app.use('/openai', require('./Routes/openaiRoutes.js'));

app.listen(port, () => console.log('Server started on port ' + port));


