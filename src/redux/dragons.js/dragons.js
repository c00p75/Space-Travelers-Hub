import { createAsyncThunk } from '@reduxjs/toolkit';

const ALL_DRAGONS = 'space travelers/redux/rockets/ALL_DRAGONS';
const BOOK_DRAGONS = 'space travelers/redux/rockets/BOOK_DRAGONS';

export const dragonsReducer = (state = { status: 'default', dragons: [] }, action) => {
  switch (action.type) {
    case `${ALL_DRAGONS}/fulfilled`:
      return { status: 'succeeded', dragons: action.payload };

    case BOOK_DRAGONS: {
      const newState = state.dragons.map((dragon) => (
        dragon.id === action.id ? { ...dragon, booked: !dragon.booked } : dragon));
      return { ...state, dragons: newState };
    }

    default:
      return state;
  }
};

export const fetchDragons = createAsyncThunk(
  ALL_DRAGONS, async () => {
    const data = [];
    await fetch('https://api.spacexdata.com/v3/dragons')
      .then((res) => res.json())
      .then((json) => {
        json.forEach((i) => {
          data.push({
            id: i.id,
            name: i.name,
            type: i.type,
            flickr_images: i.flickr_images,
            description: i.description,
            reserved: false,
          });
        });
      });
    return data;
  },
);

export const booking = (id) => ({
  type: BOOK_DRAGONS,
  id,
});
