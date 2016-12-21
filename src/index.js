const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema, root } = require('./schema')
const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(3000)
