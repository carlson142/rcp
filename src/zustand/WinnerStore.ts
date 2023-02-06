import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  winCount: number;
  addOne: () => void;
  minusOne: () => void;
}

export const useWinner = create<Store>()((set) => ({
  winCount: 0,
  addOne: () => {},
  minusOne: () => {},
}));
