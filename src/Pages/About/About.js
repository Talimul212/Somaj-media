import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>Name:{user?.displayName}</p>
          <p>Emnail:{user?.email}</p>
          <p>University:</p>
          <p>Address: </p>
          
        </div>
      </div>
    );
};

export default About;