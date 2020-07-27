import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Main from './src/Main'

const httpLink = createHttpLink({
  uri: 'http://10.0.2.2:4001/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: await AsyncStorage.getItem('token'),
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider
      client={client}
    >
      <Main />
    </ApolloProvider>
  )
}

export default App;
