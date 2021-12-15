import React from 'react';
import { useSelector } from 'react-redux';

const Myrocket = () => {
  const myRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  return (
    <div className="My-Rockets">
      <h2>My Rockets</h2>
      {
        (myRockets.length === 0)
          ? (
            <ul className="ul-contain-miss">
              <li>No Rockets Reserved</li>
            </ul>
          )
          : (
            <ul className="ul-contain-miss">
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
