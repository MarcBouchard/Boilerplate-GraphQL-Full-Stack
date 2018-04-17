// -------------------------------------- Global Imports --
import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// ------------------------------------ Relative Imports --
import './styles/index.css'
import typeDefs from './typeDefs'
import { defaults, resolvers } from './resolvers'
import registerServiceWorker from './registerServiceWorker'

// ----------------------------------- Component Imports --
import App from './components/App'

// --------------------------------- ApolloClient Config --
const client = new ApolloClient({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
})

// -------------------------------- Render App Component --
render(wrapApp(), document.getElementById('root'))
registerServiceWorker()

// ********************************************************
function wrapApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
