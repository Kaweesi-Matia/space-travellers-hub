import axios from 'axios';

const SHOW_ROCKET = 'space-travellers-hub/redux/SHOW_ROCKET';
const RESERVE_ROCKET = 'space-travellers-hub/redux/RESERVE_ROCKET';
const REMOVE_RESERVED = 'space-travellers-hub/redux/REMOVE_RESERVED';
const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const rockets = [];

export const reserveRocket = (id) => (dispatch) => dispatch({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelReserved = (id) => (dispatch) => dispatch({
  type: REMOVE_RESERVED,
  payload: id,
});

export const fetchRocketData = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}`);
  return dispatch({ type: SHOW_ROCKET, payload: response.data });
};

const rocketReducer = (state = rockets, action) => {
  switch (action.type) {
    case SHOW_ROCKET:
      return action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        description: rocket.description,
        image: rocket.flickr_images,
        reserved: false,
      }));

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    case REMOVE_RESERVED:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return { ...rocket };
      });
    default:
      return state;
  }
};

export default rocketReducer;
