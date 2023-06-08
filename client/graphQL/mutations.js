import { gql } from '@apollo/client';

const SIGN_UP_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $zipCode: String!, $bio: String!, $techStack: String!) {
    addUser(name: $name, email: $email, password: $password, zipCode: $zipCode, bio: $bio, techStack: $techStack) {
      name
      email
      zipCode
      bio
      techStack
    }
  }
`

export { SIGN_UP_USER }