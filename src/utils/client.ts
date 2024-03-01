import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
    uri: 'https://e7b3-105-29-164-179.ngrok-free.app/graphql',
    cache: new InMemoryCache()
});
