import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import { rocketsReducer } from './rockets/rockets';
import { dragonsReducer } from './dragons.js/dragons';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
