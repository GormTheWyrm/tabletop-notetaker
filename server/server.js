//pulling this from bootcamp final project
//might need to require mongodb...
//I don;t see where the actual database is connected...
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient; //cannot import here... hopefully this works instead

const express = require('express');
const path = require('path');
// const db = require('./config/connection');  //not set up yet?
//this is an issue... 
//monsgoose.connection
const routes = require('./routes');
const { hasUncaughtExceptionCaptureCallback } = require('process');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// const mongoose = require("mongoose");    



// use static if in production... may need tweaking for different hosting locations?
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build'))); //70% sure this will need to be tweaked for production
}
// Add routes, both API and view
app.use(routes);

// next step is to connect to the database. Currently will not work with db.once...
//...meaning database is not connecting. Probably an issue with heroku!
//..works on localhost!

/*
testing mongodb without the mongoose connection:
create new db...
using https://developer.mongodb.com/quickstart/node-connect-mongodb
... https://university.mongodb.com/mercury/M220JS/2021_January_12/overview
process.env.MONGO_URI
*/


/* atlas
MongoClient.connect(
  process.env.MONGO_URI || 'mongodb://localhost/tabletop_notetaker_db',
  { useNewUrlParser: true },
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
   .then(async client => {  */ //atlas...

    // db.once('open', () => {  //removed to try and get heroku to work
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));  //uncommented to try and get heroku to work
    // });  //removed to try and get heroku to work

  // });  //atlas...

// error :
/*
2021-01-21T02:58:15.552801+00:00 app[web.1]: MongoNetworkError: failed to connect to server [localhost:27017] on first connect [Error: connect ECONNREFUSED 127.0.0.1:27017
2021-01-21T02:58:15.552803+00:00 app[web.1]:     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1141:16) {
2021-01-21T02:58:15.552804+00:00 app[web.1]:   name: 'MongoNetworkError'
2021-01-21T02:58:15.552805+00:00 app[web.1]: }]
2021-01-21T02:58:15.552806+00:00 app[web.1]:     at Pool.<anonymous> (/app/server/node_modules/mongodb/lib/core/topologies/server.js:438:11)
2021-01-21T02:58:15.552807+00:00 app[web.1]:     at Pool.emit (events.js:310:20)
2021-01-21T02:58:15.552807+00:00 app[web.1]:     at /app/server/node_modules/mongodb/lib/core/connection/pool.js:562:14
2021-01-21T02:58:15.552807+00:00 app[web.1]:     at /app/server/node_modules/mongodb/lib/core/connection/pool.js:995:11
2021-01-21T02:58:15.552811+00:00 app[web.1]:     at /app/server/node_modules/mongodb/lib/core/connection/connect.js:32:7
2021-01-21T02:58:15.552811+00:00 app[web.1]:     at callback (/app/server/node_modules/mongodb/lib/core/connection/connect.js:280:5)
2021-01-21T02:58:15.552815+00:00 app[web.1]:     at Socket.<anonymous> (/app/server/node_modules/mongodb/lib/core/connection/connect.js:310:7)
2021-01-21T02:58:15.552816+00:00 app[web.1]:     at Object.onceWrapper (events.js:417:26)
2021-01-21T02:58:15.552816+00:00 app[web.1]:     at Socket.emit (events.js:310:20)
2021-01-21T02:58:15.552817+00:00 app[web.1]:     at emitErrorNT (internal/streams/destroy.js:92:8)
2021-01-21T02:58:15.552817+00:00 app[web.1]:     at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
2021-01-21T02:58:15.552818+00:00 app[web.1]:     at processTicksAndRejections (internal/process/task_queues.js:84:21)
2021-01-21T02:58:15.602210+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2021-01-21T02:58:15.602610+00:00 app[web.1]: npm ERR! errno 1
2021-01-21T02:58:15.604040+00:00 app[web.1]: npm ERR! server@1.0.0 start: `node server.js`
2021-01-21T02:58:15.604260+00:00 app[web.1]: npm ERR! Exit status 1
2021-01-21T02:58:15.604479+00:00 app[web.1]: npm ERR! 
2021-01-21T02:58:15.604656+00:00 app[web.1]: npm ERR! Failed at the server@1.0.0 start script.
2021-01-21T02:58:15.604831+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2021-01-21T02:58:15.616207+00:00 app[web.1]: 
2021-01-21T02:58:15.616410+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2021-01-21T02:58:15.616526+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2021-01-21T02_58_15_605Z-debug.log
2021-01-21T02:58:15.635325+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2021-01-21T02:58:15.635959+00:00 app[web.1]: npm ERR! errno 1
2021-01-21T02:58:15.637497+00:00 app[web.1]: npm ERR! tabletop-notetaker@1.0.0 start:prod: `cd server && npm start`
2021-01-21T02:58:15.637728+00:00 app[web.1]: npm ERR! Exit status 1
2021-01-21T02:58:15.638133+00:00 app[web.1]: npm ERR! 
2021-01-21T02:58:15.638499+00:00 app[web.1]: npm ERR! Failed at the tabletop-notetaker@1.0.0 start:prod script.
2021-01-21T02:58:15.638820+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2021-01-21T02:58:15.655978+00:00 app[web.1]: 
2021-01-21T02:58:15.656395+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2021-01-21T02:58:15.656603+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2021-01-21T02_58_15_640Z-debug.log
2021-01-21T02:58:16.280499+00:00 app[web.1]: 
2021-01-21T02:58:16.280516+00:00 app[web.1]: > tabletop-notetaker@1.0.0 start:dev /app
2021-01-21T02:58:16.280517+00:00 app[web.1]: > concurrently "cd server && npm run watch" "cd client && npm start"
2021-01-21T02:58:16.280517+00:00 app[web.1]: 
2021-01-21T02:58:16.315403+00:00 app[web.1]: sh: 1: concurrently: not found
2021-01-21T02:58:16.324927+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2021-01-21T02:58:16.325250+00:00 app[web.1]: npm ERR! syscall spawn
2021-01-21T02:58:16.325482+00:00 app[web.1]: npm ERR! file sh
2021-01-21T02:58:16.325801+00:00 app[web.1]: npm ERR! errno ENOENT
2021-01-21T02:58:16.328183+00:00 app[web.1]: npm ERR! tabletop-notetaker@1.0.0 start:dev: `concurrently "cd server && npm run watch" "cd client && npm start"`
2021-01-21T02:58:16.328327+00:00 app[web.1]: npm ERR! spawn ENOENT
2021-01-21T02:58:16.328513+00:00 app[web.1]: npm ERR! 
2021-01-21T02:58:16.328661+00:00 app[web.1]: npm ERR! Failed at the tabletop-notetaker@1.0.0 start:dev script.
2021-01-21T02:58:16.328791+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2021-01-21T02:58:16.341315+00:00 app[web.1]: 
2021-01-21T02:58:16.344111+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2021-01-21T02:58:16.344340+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2021-01-21T02_58_16_329Z-debug.log
2021-01-21T02:58:16.362548+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2021-01-21T02:58:16.363068+00:00 app[web.1]: npm ERR! errno 1
2021-01-21T02:58:16.364996+00:00 app[web.1]: npm ERR! tabletop-notetaker@1.0.0 start: `if-env NODE_ENV=production && npm run start:prod || npm run start:dev`
2021-01-21T02:58:16.365305+00:00 app[web.1]: npm ERR! Exit status 1
2021-01-21T02:58:16.365628+00:00 app[web.1]: npm ERR! 
2021-01-21T02:58:16.365882+00:00 app[web.1]: npm ERR! Failed at the tabletop-notetaker@1.0.0 start script.
2021-01-21T02:58:16.366109+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2021-01-21T02:58:16.375190+00:00 app[web.1]: 
2021-01-21T02:58:16.378852+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2021-01-21T02:58:16.379062+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2021-01-21T02_58_16_367Z-debug.log
2021-01-21T02:58:16.448909+00:00 heroku[web.1]: Process exited with status 1
*/


/* this worked on a simpel app with no database:
const express = require('express');
// const favicon = require('express-favicon'); //look this up
const { dirname } = require('path');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico')); //is this needed?
// if using this need to npm i express-favicon
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res){
  return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
*/

