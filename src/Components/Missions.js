import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMissions } from '../Redux/missions/missions';
import Mission from './Mission';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 1) {
      dispatch(fetchAllMissions());
    }
  }, [dispatch]);
  return (
    <div className="missions">
      <table>
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td>Are you Joined</td>
          </tr>
        </thead>
        <tbody>
          {
          missions.map((mission) => (<Mission key={mission.mission_id} mission={mission} />))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
