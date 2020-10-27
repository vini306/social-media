import { ApolloServer, gql } from 'apollo-server';
import { graphql } from  'graphql';

const typeDefs = gql`
    type Query{
        sayHi: String! 
    }
`;

const resolvers = {
    Query:  {
        sayHi: () => 'Hello Wold'
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
});

server.listen({port:  3000}).then( res => console.log(`Server is running at ${res.url}`));
