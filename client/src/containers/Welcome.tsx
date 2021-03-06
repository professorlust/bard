import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Welcome from '../components/Welcome';

const GET_USERS = gql`
  {
    users {
      id
    }
  }
`;

export const WelcomeContainer = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return <Welcome user={data.user} />;
    }}
  </Query>
);
