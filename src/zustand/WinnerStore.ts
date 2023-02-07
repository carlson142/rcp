import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  winCount: number;
  addOne: () => void;
  minusOne: () => void;
  resetGame: () => void;
}

export const useWinner = create<Store>()(
  persist(
    (set) => ({
      winCount: 0,
      addOne: () => {
        set((state) => ({ winCount: state.winCount + 1 }));
      },
      minusOne: () => {
        set((state) => ({ winCount: state.winCount - 1 }));
      },
      resetGame: () => {
        set({ winCount: 0 });
      },
    }),
    {
      name: "win-count-storage",
    }
  )
);
