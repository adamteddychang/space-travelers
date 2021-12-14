import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join_mission } from '../Redux/missions/missions';

function Mission(props) {
  const { mission } = props;
  const dispatch = useDispatch();
  
  const joinMission = () => {
    dispatch(join_mission(mission.mission_id));   
    
  }
  return (
    <tr key={mission.mission_id}>
      
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>Active</td>
      
      <td>
        <div>
        {mission.joined === false || mission.joined === undefined
        ? <button type="button" className="Join" onClick={joinMission}>Join</button>
        : <button type="button" className="Leave">Leave</button>
    }
    </div>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};


export default Mission;
