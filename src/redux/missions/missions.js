import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOADMISSION = 'spacetravellers/missions/LOADMISSION';
const JOINMISSION = 'spacetravellers/missions/JOINMISSION';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOADMISSION}/fulfilled`:
      return action.payload.data;
    case `${JOINMISSION}/fulfilled`: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, joinmission: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export const fetchApi = createAsyncThunk(LOADMISSION, async () => {
  const res = await axios.get('https://api.spacexdata.com/v3/missions');
  let { data } = res;
  data = data.map((mission) => ({
    id: mission.mission_id,
    mission: mission.mission_name,
    description: mission.description,
    joinmission: false,
  }));

  return { data };
});

export const JoinMission = (id) => ({
  type: JOINMISSION,
  payload: id,
});
