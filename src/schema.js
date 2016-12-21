const { buildSchema } = require('graphql')
const { getBestCombinations } = require('equipator')

const schema = buildSchema(`
  type Player {
    nick: String,
    name: String,
    gk: Boolean,
    score: Float!
  }

  type Team {
    players: [Player]!,
    score: Float!
  }

  type Match {
    team1: Team!
    team2: Team!
    diff: Float!
  }

  input PlayerInput {
    nick: String,
    name: String,
    gk: Boolean,
    score: Float!
  }

  type Query {
    match(players: [PlayerInput]!): Match!
  }
`)

const root = {
  match: ({ players }) => {
    return getBestCombinations(players)[0]
  }
}

module.exports = {
  schema,
  root
}
