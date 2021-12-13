import * as apiCalls from '../../Api/missionsApi';

const FetchMissions = 'missionStore/missionactions/fetchMissions';

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
    type: FetchMissions,
    payload,
  });
};

const missionsReducer = (state = initialMissionState, action) => {
  switch (action.type) {
    case FetchMissions:
      return action.payload;
    default:
      return state;
  }
};

export default { missionsReducer };
