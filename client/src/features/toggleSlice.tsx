import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  backgroundColor: string;
}

const initialState: ThemeState = {
  backgroundColor: 'white',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleBackgroundColor: (state) => {
      state.backgroundColor = state.backgroundColor === 'white' ? 'black' : 'white';
    },
  },
});

export const { toggleBackgroundColor } = themeSlice.actions;
export default themeSlice.reducer;







