import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
const themeStore = (set, get) => ({
  mode: 'dark',
  changeMode: () =>
    set((state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = 'light';
      }
    }),
});

const useThemeStore = create(
  persist(immer(themeStore), {
    name: 'theme',
    getStorage: () => localStorage,
  })
);

export default useThemeStore;
