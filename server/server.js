const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('bodyParser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client) {
    if (err){return console.log(err)}
    const dbName = 'mydb';
    const db = client.db(dbName);

    require('./routes/api-add.js')(db,app);
    require('./routes/api-prodcount.js')(db,app);
    require('./routes/api-validid.js')(db,app);
    require('./routes/api-getlist.js')(db,app);
    require('./routes/api-getitem.js')(db,app, ObjectId);
    require('./routes/api-update.js')(db,app, ObjectId);
    require('./routes/api-deleteitem.js')(db,app, ObjectId);

    require('./listen.js')(http);

});