import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';

interface IWithConnectionProps {}

const WithConnection: React.FC<IWithConnectionProps> = props => {
  const buildApolloClient = () => {
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
