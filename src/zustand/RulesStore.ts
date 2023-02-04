import { create } from "zustand";

interface IRules {
  open: boolean;
  openRules: () => void;
}

export const useRules = create<IRules>()((set) => ({
  open: false,
  openRules: () => {
    set((state) => ({ open: !state.open }));
  },
}));
