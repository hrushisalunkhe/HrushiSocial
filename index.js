const express = require('express');
const app = express();
const port = 8000;

app.listen(port , function(error){

    if (error) {
        console.log(err);
    }

    console.log(`running successfully on ${port}`);
});