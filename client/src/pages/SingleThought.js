import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';
import ReactionList from '../components/ReactionList';

const SingleThought = props => {
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId }
  })

  const { createdAt, reactionCount, reactions, thoughtText, username } = data?.thought || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <Link
            to={`/profile/${username}`}
            style={{ fontWeight: 700 }}
            className="text-light"
          >
            {username}
          </Link>{' '}
          thought on {createdAt}
        </p>
        <div className="card-body">
          <p>{thoughtText}</p>
        </div>
      </div>
      {reactionCount ? <ReactionList reactions={reactions} /> : ''}
    </div>
  );
};

export default SingleThought;
