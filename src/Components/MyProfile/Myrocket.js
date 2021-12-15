import React from 'react';
import { useSelector } from 'react-redux';

const Myrocket = () => {
  const myRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  return (
    <div>
      <h2>My Missions</h2>
      {
        (myRockets.length === 0)
          ? <p>Empty</p>
          : (
            <ul>
              {
                myRockets.map((rocket) => (
                  <li key={rocket.rocket_id}>
                    {rocket.rocket_name}
                  </li>
                ))
              }
            </ul>
          )
      }
    </div>
  );
};

export default Myrocket;
