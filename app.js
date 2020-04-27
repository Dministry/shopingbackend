const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Parse request of Content-Type application/json
app.use(bodyParser.json());

//Parse content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//require route
require('./routes/product.route')(app);

app.get('/', (req, res) => {
    res.json('Welcome to our nodejs class with Mr Elijah')
});

//set port and listen to request
app.listen(5000, () =>{
    console.log("listening to port: 5000...")
})