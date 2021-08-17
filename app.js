const express = require('express');
const path = require('path');
const exp = require('constants');
const bdyparser = require('body-parser');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;


//express stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());


//hbs stuff
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//end points
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index', params);
})

//SERVER START
app.listen(port, ()=> {
    console.log('succesfully running')
})
