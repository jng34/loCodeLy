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
      name
      address
      zipCode
      url
    }
  }
`

export { GET_USERS, GET_CAFES }