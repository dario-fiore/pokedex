import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';

/**
 * HOC Used to provide to all children component apollo client connections
 */
const WithConnection: React.FC = props => {
  const buildApolloClient = () => {
    //[TODO] - Use process.env variable
    return new ApolloClient<unknown>({
      uri: 'http://localhost:4000',
    });
  };

  return (
    <ApolloProvider client={buildApolloClient()}>
      <div>{props.children}</div>
    </ApolloProvider>
  );
};

export default WithConnection;
