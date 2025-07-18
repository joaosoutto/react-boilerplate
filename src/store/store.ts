import { IProduct } from "@/components/Products/types";
import { create } from "zustand";

interface IStoreState {
  setState: (key: string, data: object) => void;
  favoriteProducts: IProduct[];
  setFavoriteProducts: (data: IProduct[]) => void;
  resetFavoriteProducts: () => void;
}

const initialState = {
  favoriteProducts: [],
};

const useStore = create<IStoreState>((set) => ({
  ...initialState,
  setState: (key: string, data: object) => {
    set((state) => ({ ...state, [key]: data }));
  },
  setFavoriteProducts: (data: IProduct[]) => {
    set((state) => ({ ...state, favoriteProducts: data }));
  },
  resetFavoriteProducts: () => {
    set((state) => ({
      ...state,
      favoriteProducts: initialState.favoriteProducts,
    }));
  },
}));

export default useStore;
