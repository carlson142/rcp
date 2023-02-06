import { create } from "zustand";

interface State {
  item: string;
  selectItem: (selectedItem: string) => void;
}

export const useSelectItem = create<State>()((set) => ({
  item: "",
  selectItem: (selectedItem) => {
    set(() => ({
      item: selectedItem,
    }));
  },
}));
