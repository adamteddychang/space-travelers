import * as apiCalls from '../../Api/rocketsApi';

const FETCH_ROCKETS = 'rocketStore/rocketactions/FETCH_ROCKETS';
const initialRocketState = [{
  id: '',
  rocket_name: '',
  lickr_images: '',
  description: '',
  reserved: false,
}];

export const fetchAllRockets = () => async (dispatch) => {
  const apiData = await apiCalls.fetchRocketsApi();
  const payload = Object.values(apiData).map((i) => i);
  dispatch({
    type: FETCH_ROCKETS,
    payload,
  });
};

const rocketsReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default { rocketsReducer };
