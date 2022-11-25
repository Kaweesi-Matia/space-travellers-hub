import axios from 'axios';

const GET_MISSION = 'GET_MISSION';
const JOIN_MISSION = 'space-travellers-hub/redux/JOIN_MISSION';
const LEAVE_MISSION = 'space-travellers-hub/redux/LEAVE_MISSION';
const baseUrl = 'https://api.spacexdata.com/v3/missions';
const missions = [];

export const joinMission = (id) => (dispatch) => dispatch({
  type: JOIN_MISSION,
  payload: id,
});

export const cancelMission = (id) => (dispatch) => dispatch({
  type: LEAVE_MISSION,
  payload: id,
});

export const fetchMissionData = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}`);
  return dispatch({ type: GET_MISSION, payload: response.data });
};

const missionReducer = (state = missions, action) => {
  switch (action.type) {
    case GET_MISSION:
      return action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        joined: false,
      }));

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: true };
        }
        return { ...mission };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: false };
        }
        return { ...mission };
      });
    default:
      return state;
  }
};

export default missionReducer;
