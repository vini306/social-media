import { gql } from 'apollo-server';

const typedefs = gql`
    type Post{
        id: String!
        body: String!
        username: String!
    }
    type Query{
        getPosts: [Post] 
    }
`;

export default typedefs;
