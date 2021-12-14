import * as apiCalls from '../../Api/rocketsApi';

const FETCH_ROCKETS = 'rocketStore/rockets/FETCH_ROCKETS';
const BOOK_ROCKET = 'rocketStore/rockets/BOOK_ROCKET';
const CANCEL_ROCKET = 'rocketStore/rockets/CANCEL_ROCKET';
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

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

export const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  id,
});

const rocketsReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default rocketsReducer;
