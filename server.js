import { GraphQLServer } from 'graphql-yoga';
import './src/env';
import schema from './schema';

const server = new GraphQLServer({ schema });

server.start({ port: 4000 }, () =>
  console.log('🕺Public Trainer Server is Running🕺')
);
