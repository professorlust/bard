import * as React from 'react';
import Adventures from '../components/Adventures';

import gql from 'graphql-tag';
import Adventure from 'Types';
import { Query } from 'react-apollo';

interface Adventures {
  adventures: Array<Adventure>;
}

const GET_ADVENTURES = gql`
  {
    adventures {
      title
    }
  }
`;

export default () => (
  <Query query={GET_ADVENTURES}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <Adventures adventures={data.adventures} />
      );
    }}
  </Query>
);