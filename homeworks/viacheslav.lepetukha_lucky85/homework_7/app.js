"use strict";

let express = require('express');

let bodyParser = require('body-parser');

let data = require('./data.js');

let app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/images', (request, response) => {

    response.send(data);

});

app.put('/images/:id', (req, res) => {

    console.log('test');

    let changedModel = req.body.image;

    console.dir(req.body.image);

    let i = 0;

    for(; i < data.length; i++){

        if(data[i].id == changedModel.id){

            data[i] = changedModel;

            res.send(data[i]);

            return;
        }

    }

    res.send({message : 'image not found'});


});

app.delete('/images/:id', (req, res) => {

    let foundIndex = data.findIndex(el => el.id == req.params.id);

    if (foundIndex){

        data.splice(foundIndex, 1);

        res.send({message : 'ok'});

    }

    else{

        res.send({message : 'image not found'});

    }



});

app.listen(8000, () => {

    console.log('Server started at http://localhost:8000');

});

