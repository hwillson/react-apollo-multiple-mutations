import React from 'react';
import { Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';

const INCREASE_COUNT = gql`
  mutation increaseCount {
    increaseCount {
      id
      currentCount
      timestamp
    }
  }
`;

const UPDATE_TIMESTAMP = gql`
  mutation updateTimestamp {
    updateTimestamp {
      id
      currentCount
      timestamp
    }
  }
`;

const increaseCount = ({ render }) => (
  <Mutation mutation={INCREASE_COUNT}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
);

const updateTimestamp = ({ render }) => (
  <Mutation mutation={UPDATE_TIMESTAMP}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)

const Composed = adopt({
  increaseCount,
  updateTimestamp,
});

export const IncreaseCountButton = () => (
  <Composed>
    {(mutations) => {
      return (
        <button
          type="button"
          onClick={() => {
            mutations.increaseCount.mutation();
            mutations.updateTimestamp.mutation();
          }}
        >
          Increase count
        </button>
      );
    }}
  </Composed>
);
