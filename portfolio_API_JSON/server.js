//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/portfolio_FE'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/portfolio_FE'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);

// /* ,"heroku-postbuild": "ng build --prod" y "start": "node server.js",  <---- para el scripts en package.json*/