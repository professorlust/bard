import * as express from 'express';
import * as bodyParser from 'body-parser';
import schema from './data/schema';

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();

app.use(
  '/graphql', 
  bodyParser.json(), 
  graphqlExpress({ schema })
);

app.get(
  '/graphiql', 
  graphiqlExpress({ 
    endpointURL: '/graphql' 
  })
);

app.listen(8080);