import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql/type';

var users = [
  {
    "id": 1,
    "firstname": "first name 01",
    "lastname": "last name 01",
    "age": 10
  },
  {
    "id": 2,
    "firstname": "first name 02",
    "lastname": "last name 02",
    "age": 20
  },
  {
    "id": 3,
    "firstname": "first name 03",
    "lastname": "last name 03",
    "age": 30
  }
];

var UserType = new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: GraphQLInt
      },
      firstname: {
        type: GraphQLString
      },
      lastname: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      }
    }
  }
});

var queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: function () {
    return {
      allUser: {
        description: "Get all user",
        type: new GraphQLList(UserType),
        resolve: function () {
          return users;
        }
      }
    }
  }
});

let schema = new GraphQLSchema({
  query: queryType
});

export default schema;
