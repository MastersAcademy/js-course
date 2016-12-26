"use strict";

let express = require('express');
let bodyParser = require('body-parser');
let data = require('./data.js');
let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/images', (request, response) => {
    response.send(data);
});

app.put('/images/:id', (request, response) => {
    let changedModel = request.body.image;
    // console.log(changedModel.id);
    let i = 0;
    for(; i < data.length; i++){
        if(data[i].id == changedModel.id) {
            data[i] = changedModel;
            response.send(data[i]);
            return;
        }
    }
    response.send({message : 'image not found'});
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

