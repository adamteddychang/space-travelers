

const initialMissionState = [{
  mission_id: '',
  mission_name: '',
  description: '',
  joined: false,
}];

const missionsReducer = (state = initialMissionState, action) => ([state, action.payload]);

export default { missionsReducer };
