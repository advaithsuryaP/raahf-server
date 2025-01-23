const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello, World, Advaith here!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
