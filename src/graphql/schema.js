import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const counter = {
  id: 1,
  currentCount: 0,
  timestamp: 'NA',
};

const CounterType = new GraphQLObjectType({
  name: 'Counter',
  fields: {
    id: { type: GraphQLID },
    currentCount: { type: GraphQLInt },
    timestamp: { type: GraphQLString },
  },
});

const QueryRootType = new GraphQLObjectType({
  name: 'query',
  fields: {
    counter: {
      type: CounterType,
      resolve() {
        return counter;
      },
    },
  },
});

const MutationRootType = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    increaseCount: {
      type: CounterType,
      resolve() {
        counter.currentCount += 1;
        return counter;
      },
    },
    updateTimestamp: {
      type: CounterType,
      resolve() {
        counter.timestamp = new Date().toString();
        return counter;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryRootType,
  mutation: MutationRootType,
});
