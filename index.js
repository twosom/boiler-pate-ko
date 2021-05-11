const express = require('express');
const app = express();
const port = 5000;

const {User} = require('./models/User');
const bodyParser = require('body-parser');

const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');

/**
 * MongoDB 연결
 */
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
    console.log(`MongoDB Connected...`);
}).catch(reason => {
    console.log(reason);
});


app.get('/', (request, response) => {
    response.send('My name is twosom');
});


app.post('/register', (request, response) => {
    const user = new User(request.body);

    user.save((error, userInfo) => {
        // 실패 시
        if (error) return response.json({
            success: false,
            error
        });
        // 성공 시
        return response.status(200).json({
            success: true
        });
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});