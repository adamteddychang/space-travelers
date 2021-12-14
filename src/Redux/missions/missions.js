import * as apiCalls from '../../Api/missionsApi';

const FETCH_MISSIONS = 'missionStore/missions/fetchMissions';
const JOIN_MISSION = 'missionStore/missions/JOIN_MISSION'

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

export const join_mission = (mission_id) =>({
  type: JOIN_MISSION,
  mission_id,
});


const missionsReducer = (state = initialMissionState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;

    case JOIN_MISSION:
      return state.map((mission)=>{
        
        if(mission.mission_id !== action.mission_id){ 
        return mission;}
        return { ...mission, joined:  true };
      });
    default:
      return state;

  }
};

export default missionsReducer;
