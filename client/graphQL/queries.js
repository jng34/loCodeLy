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

const GET_USERS_IN_ZIP = gql`
  query ($zipCode: String!) {
    zip (zipCode: $zipCode) {
      users {
        id
        name
        email
        techStack
        bio
      }
    }
  }
`

const GET_CAFES_IN_ZIPS = gql`
  query ($zipsArray: [ZipInput!]! ) {
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

export { GET_SINGLE_USER, GET_USERS_IN_ZIP, GET_CAFES_IN_ZIPS, GET_CAFES }