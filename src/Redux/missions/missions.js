import * as apiCalls from '../../Api/missionsApi';

const FETCH_MISSIONS = 'missionStore/missions/fetchMissions';

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

const missionsReducer = (state = initialMissionState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default  missionsReducer ;
