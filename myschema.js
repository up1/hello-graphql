import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql/type';

var scores = [1,2,3,4,10];

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'getHighestScore',
    fields: {
      score: {
        type: GraphQLInt,
        description: 'Your Score',
        resolve: function() {
          return Math.max.apply(null, scores);
        }
      }
    }
  })
});

export default schema;
