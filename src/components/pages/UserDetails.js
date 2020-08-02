import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>
        This is the UserDetails {params.id} - {params.name} page...
      </h1>
    </div>
  );
};

export default UserDetails;
