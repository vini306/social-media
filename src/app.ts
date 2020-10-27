import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './typedefs';
import MongoConfig from './config/mongo';

class App {
    public server:ApolloServer;

    private typeDefs;

    private resolvers;

    constructor() {
      this.database();
      this.resolvers = resolvers;
      this.typeDefs = typeDefs;
      this.server = new ApolloServer({
        typeDefs: this.typeDefs,
        resolvers: this.resolvers,
        tracing: true,
      });
    }

    private async database() {
      try {
        await mongoose.connect(`mongodb://${MongoConfig.host}:${MongoConfig.port}/social-media`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        });
        console.log('Connected to database');
      } catch (error) {
        console.log(error);
      }
    }
}
export default new App().server;
