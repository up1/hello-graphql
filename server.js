import express from 'express';
import schema from './myschema';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app  = express();
let PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

let server = app.listen(PORT, "127.0.0.1" , function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
