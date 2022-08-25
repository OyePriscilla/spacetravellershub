import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOADMISSION = 'spacetravellers/missions/LOADMISSION';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOADMISSION}/fulfilled`:
      return action.payload.data;
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
  }));

  return { data };
});
