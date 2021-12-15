import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  return (
    <div>
      <h2>My Missions</h2>
      {
        (myMissions.length === 0)
          ? <p>Empty</p>
          : (
            <ul>
              {
                myMissions.map((mission) => (
                  <li key={mission.mission_id}>
                    {mission.mission_name}
                  </li>
                ))
              }
            </ul>
          )
      }
    </div>
  );
};

export default MyMissions;