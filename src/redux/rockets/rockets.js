import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'spacetravellershub/rockets/FETCH_ROCKETS';
const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';

// Initial state
const rockets = [];

// Rocket reducer
const rocketsReducer = (state = rockets, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${FETCH_ROCKETS}/fulfilled`:
      return payload.data;
    default:
      return state;
  }
};

export const fetchRockects = createAsyncThunk(FETCH_ROCKETS, async () => {
  const res = await axios.get(ROCKETS_URL);
  let { data } = res;
  data = data.map((info) => ({
    id: info.id,
    name: info.rocket_name,
    description: info.description,
    image: info.flickr_images[0],
  }));

  return { data };
});

export default rocketsReducer;
