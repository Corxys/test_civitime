import { configureStore } from '@reduxjs/toolkit';

import avatarReducer from '../features/avatar/avatarSlice';

const store = configureStore({
  reducer: {
    avatar: avatarReducer,
  },
});

export default store;