import { gql } from '@apollo/client';

const GET_SINGLE_USER = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      name
      email
      bio
      techStack
      zipCode
    }
  }
`

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      bio
      techStack
      zipCode
    }
  }
`
// const GET_CAFES_IN_ZIP = gql`
//   query ($zipCodes: [String!]!) {
//     zips (zipCodes: $zipCode) {
//       zipCode
//       cafes {
//         id
//         name
//         address
//         zipCode
//         url
//       }
//     }
//   }
// `
const GET_CAFES_IN_ZIP = gql`
  query ($zipsArray: [String!]!) {
    zips (zipsArray: $zipsArray) {
      cafes {
        id
        name
        address
        zipCode
        url
      }
    }
  }
`

const GET_CAFES = gql`
  query GetCafes {
    cafes {
      id
      name
      address
      zipCode
      url
    }
  }
`

const SIGN_UP_USER = gql`
  mutation ($name: String!, $email: String!, $password: String!, $zipCode: String!, $bio: String!, $techStack: String!) {
    addUser(name: $name, email: $email, password: $password, zipCode: $zipCode, bio: $bio, techStack: $techStack) {
      name
      email
      zipCode
      bio
      techStack
    }
  }
`

export { GET_SINGLE_USER, GET_USERS, GET_CAFES_IN_ZIP, GET_CAFES, SIGN_UP_USER }