import { createAsyncThunk } from '@reduxjs/toolkit';

const ALL_ROCKETS = 'space travelers/redux/rockets/ALL_ROCKETS';
const RESERVE_ROCKET = 'space travelers/redux/rockets/RESERVE_ROCKET';

export const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${ALL_ROCKETS}/fulfilled`:
      return action.payload;
    case RESERVE_ROCKET:
      return [...state.map((rocket) => (
        rocket.id === action.id ? { ...rocket, reserved: !rocket.reserved } : rocket))];
    default:
      return state;
  }
};

export const fetchRockets = createAsyncThunk(
  ALL_ROCKETS, async () => {
    let data;
    await fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((json) => {
        data = [...json];
      });
    // eslint-disable-next-line no-param-reassign
    data.forEach((i) => { i.reserved = false; });
    return data;
  },
);

export const reservation = (id) => ({
  type: RESERVE_ROCKET,
  id,
});
