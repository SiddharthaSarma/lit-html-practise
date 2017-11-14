const express = require('express');

const app = express();

app.use(express.static('public'));


app.listen(3030, function() {
    console.log('listening to port 3030');
});