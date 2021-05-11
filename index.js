const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');

/**
 * MongoDB 연결
 */
mongoose.connect('mongodb+srv://twosom:twosom123@projecttwosom.livyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
    console.log(`MongoDB Connected...`);
}).catch(reason => {
    console.log(reason);
});


app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})