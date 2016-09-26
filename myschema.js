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
        description: 'Get all user',
        type: new GraphQLList(UserType),
        resolve: function () {
          return users;
        }
      }
    }
  }
});

var addUser = {
  type: new GraphQLList(UserType),
  description: 'Add new user',
  args: {
    id: {
      name: 'User ID',
      type: new GraphQLNonNull(GraphQLInt)
    },
    firstname: {
      name: 'Firstname',
      type: new GraphQLNonNull(GraphQLString)
    },
    lastname: {
      name: 'Lastname',
      type: new GraphQLNonNull(GraphQLString)
    },
    age: {
      name: 'Age',
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: function(root, {id, firstname, lastname, age}) {
    users.push({
      id: id,
      firstname: firstname,
      lastname: lastname,
      age: age
    });
    return users;
  }
};

var mutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    addUser: addUser
  }
});

let schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

export default schema;
