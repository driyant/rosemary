import { create } from "zustand";

const useIndexStore = create((set) => ({
  categories: [],
  menu: [],
  setCategories: (newCategories) => set({ categories: newCategories }),
  setMenu: (newMenu) => set({ menu: newMenu }),
  openingHours: [],
  setOpeningHours: (newOpeningHours) => set({ openingHours: newOpeningHours }),
}));

export default useIndexStore;
