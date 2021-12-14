import * as apiCalls from '../../Api/missionsApi';
import rocketsApi from '../../Api/rocketsApi';

const FETCH_MISSIONS = 'missionStore/missions/fetchMissions';
const JOIN_MISSION = 'missionStore/missions/JOIN_MISSION';
const LEAVE_MISSION = 'missionStore/missions/LEAVE_MISSION';

const initialMissionState = [{
  mission_id: '',
  mission_name: '',
  description: '',
  joined: false,
}];

export const fetchAllMissions = () => async (dispatch) => {
  const apiData = await apiCalls.fetchMissionsApi();
  const payload = Object.values(apiData).map((i) => i);
  dispatch({
    type: FETCH_MISSIONS,
    payload,
  });
};

export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  missionId,
});

export const leaveMission = (missionId) =>({
  type: LEAVE_MISSION,
  missionId,
});

const missionsReducer = (state = initialMissionState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.missionId) {
          return mission;
        }
        return { ...mission, joined: true };
      });

    case LEAVE_MISSION:
      return state.map((mission)=>{
        if(mission.mission_id !== action.missionId) {
          return mission;
        }
        return { ...mission, joined: false}
      });   
    
    default:
      return state;
  }
};

export default missionsReducer;
