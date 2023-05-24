import { gql } from '@apollo/client';

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
  mutation SignUp($name: String!, $email: String!, $password: String!, $zipCode: String!, $bio: String!, $techStack: String!) {
    addUser(name: $name, email: $email, password: $password, zipCode: $zipCode, bio: $bio, techStack: $techStack) {
      name
      email
      zipCode
      bio
      techStack
    }
  }
`

export { GET_USERS, GET_CAFES, SIGN_UP_USER }