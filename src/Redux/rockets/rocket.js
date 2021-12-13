const FETCH_ROCKETS = 'rocketStore/rocketactions/FETCH_ROCKETS';
const initialRocketState = [{
  id: '',
  rocket_name: '',
  lickr_images: '',
  description: '',
  reserved: false,
}];

const rocketsReducer = (state = initialRocketState, action) => ([state, action.payload]);

export default { rocketsReducer };
