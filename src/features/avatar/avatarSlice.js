import { createSlice } from '@reduxjs/toolkit';

export const avatarSlice = createSlice({
  name: 'avatar',

  initialState: {
    gender: 'male',
    hair: '7B5B18',
    skin: 'FCD7B8',
    clothe: 'B2C7C7',
  },

  reducers: {
    changeGender: (state, action) => {
      // if the gender change, we modify the value in the state. otherwise, we don't do anything
      if (action.payload !== state.gender) {
        state.gender = action.payload;
      }
    },
    changeHair: (state, action) => {
      if (action.payload !== state.hair) {
        state.hair = action.payload;
      }
    },
    changeSkin: (state, action) => {
      if (action.payload !== state.skin) {
        state.skin = action.payload;
      }
    },
    changeClothe: (state, action) => {
      if (action.payload !== state.clothe) {
        state.clothe = action.payload;
      }
    }
  },
});

export const {
  changeGender,
  changeHair,
  changeSkin,
  changeClothe
} = avatarSlice.actions;

export default avatarSlice.reducer;