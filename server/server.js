const express = require('express');
const app = express();
const route = require('./routes/itemRoutes')
const dotEnv = require('dotenv');
const path = require('path');
const mongooClient = require('mongoose');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

dotEnv.config();

mongooClient.connect(process.env.MONG0_URL).then(() => {
    console.log('server connected to db')
}).catch((err) => {
    console.log('error connecting the database');
})

app.use('/items', route);

app.listen(5000, () => {
    console.log('server was running at 5000 port');
})

