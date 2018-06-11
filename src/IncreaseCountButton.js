import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const increaseCount = gql`
  mutation increaseCount {
    increaseCount {
      id
      currentCount
      timestamp
    }
  }
`;

const updateTimestamp = gql`
  mutation updateTimestamp {
    updateTimestamp {
      id
      currentCount
      timestamp
    }
  }
`;

export const IncreaseCountButton = () => (
  <Mutation mutation={increaseCount}>
    {(increaseCount, { data }) => (
      <Mutation mutation={updateTimestamp}>
        {(updateTimestamp, { data }) => (
          <button
            type="button"
            onClick={() => {
              increaseCount();
              updateTimestamp();
            }}
          >
            Increase count
          </button>
        )}
      </Mutation>
    )}
  </Mutation>
);
