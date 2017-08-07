const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const environmentRoutes = require('./routes/environments');
const domainRoutes = require('./routes/domains');
const interfaceRoutes = require('./routes/interfaces');

const app = express();
const port = 3000;

//Read from <form>
app.use(bodyParser.urlencoded({
    extended: true
}));

//Read from Json
app.use(cors());
app.use(bodyParser.json());
app.use('/api/environments', environmentRoutes);
app.use('/api/domains', domainRoutes);
app.use('/api/interfaces', interfaceRoutes);

//Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/controlports');
//mongoose.connect('mongodb://vitor:vitor123@ds017736.mlab.com:17736/controlports');
mongoose.connection.on('connected', () => {
  console.log('Connected to database')
});
mongoose.connection.on('error', (err) => {
  console.log('Database error' + err)
});

//Start server
app.listen(port, () => {
  console.log('Server is running at port ' + port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
