const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const routers = require('./src/routers');

const tokenGuard = require('./src/middlewares/token-guard');

var app = require('express')();
var http = require('http').Server(app);

require('dotenv').load();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors());
routers(app);


const port = process.env.PORT;

http.listen(port, () => {
    console.log(`Server Running ${process.env.NODE_ENV === 'production' ? '(production) ' : ''}${port ? 'on Port ' + port : ''}`);
});

