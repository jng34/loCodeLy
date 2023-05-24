const graphql = require('graphql')
const _ = require('lodash')
const User = require('../models/User')
const Zip = require('../models/Zip')
const Cafe = require('../models/Cafe')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = graphql


// Model Types
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    bio: { type: GraphQLString },
    techStack: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    localCafes: {
      type: new GraphQLList(CafeType),
      resolve(parent, args){
        return Cafe.find({ zipCode: parent.zipCode })
      }
    } 
  })
});

const ZipType = new GraphQLObjectType({
  name: "Zip",
  fields: () => ({
    id: { type: GraphQLID },
    zipCode: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({ zipCode: parent.zipCode });
      },
    },
    cafes: {
      type: new GraphQLList(CafeType),
      resolve(parent, args) {
        return Cafe.find({ zipCode: parent.zipCode });
      },
    }
  })
});

const CafeType = new GraphQLObjectType({
  name: "Cafe",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    url: { type: GraphQLString },
    zipCode: { type: GraphQLString }
  })
});


// GraphQL queries - GET reqs
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user:{
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },

    users: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.find({});
      },
    },

    zip: {
      type: ZipType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Zip.findById(args.id);
      },
    },

    zips: {
      type: new GraphQLList(ZipType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Zip.find({});
      },
    },

    cafe: {
      type: CafeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Cafe.findById(args.id);
      },
    },

    cafes: {
      type: new GraphQLList(CafeType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Cafe.find({});
      },
    },
  },
});


// Hooked up to frontend
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    addUser:{
      type: UserType,
      args:{
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        zipCode: { type: new GraphQLNonNull(GraphQLString) },
        bio: { type: new GraphQLNonNull(GraphQLString) },
        techStack: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
          zipCode: args.zipCode,
          bio: args.bio,
          techStack: args.techStack
        })
        return user.save()
      }
    },

    addZip:{
      type: ZipType,
      args:{
        zipCode: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let zip = new Zip({
          zipCode: args.zipCode
        })
        return zip.save()
      }
    },
    
    addCafe:{
      type: CafeType,
      args:{
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        url: { type: new GraphQLNonNull(GraphQLString) },
        zipCode: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let cafe = new Cafe({
          name: args.name,
          address: args.address,
          url: args.url,
          zipCode: args.zipCode
        })
        return cafe.save()
      }
    },
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})