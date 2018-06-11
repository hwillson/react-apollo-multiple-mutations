import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const Counter = () => (
  <Query
    query={gql`
      query getCounter {
        counter {
          id
          currentCount
          timestamp
        }
      }
    `}
  >
    {({ loading, data }) => {
      let content;
      if (loading) {
        content = <p>Loading…</p>;
      } else {
        const { currentCount, timestamp } = data.counter;
        content = (
          <Fragment>
            <p>
              Current count: {currentCount}
            </p>
            <p>
              Timestamp: {timestamp}
            </p>
          </Fragment>
        );
      }
      return content;
    }}
  </Query>
);
