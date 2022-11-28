import { buildSchema } from 'graphql'
import { generateQueries } from '../src/support/generateQueries'

it('generateQueries', async () => {
    const q = generateQueries({
        schema,
        packageName: 'genql',
    })
    console.log(q)
})

const schema = buildSchema(`
interface Node {
    id: ID
  }
  
  enum Choice {
    ONE,
    TWO,
    THREE
  }
  
  type User implements Node {
    name: String
    company(id: String): Company
    employerCompany: Company
    pastEmployers(max: Int! = 1): [Company]
    id: ID
  }
  
  type DirectorConnection {
    ceos: [User],
    cursor: ID
  }
  
  type Nested {
    user: User
  }
  
  type Company implements Node {
    name: String
    nested: Nested
    legalForm: String
    ceo: User
    id: ID
    employees(limit: Int! = 1): [User]
    directors(limit: Int! = 1): DirectorConnection,
    choice: Choice
  }
  
  type Query {
    user(username: String!, choice: Choice!): User
    users(limit: Int! = 1, first: Int = 1, last: Int = 1): [User]
    company(id: String!, max: Int! = 1): Company
    node(id: ID): Node
    other(_id: ID!): String
  }
  
  schema {
    query: Query
  }`)
