import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
    uri: 'https://584d-105-27-235-40.ngrok-free.app/graphql',
    cache: new InMemoryCache()
});
