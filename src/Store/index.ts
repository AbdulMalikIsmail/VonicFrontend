import create from "zustand";

interface CardItems {
  id: string | number;
  name: string;
  qty: number;
}

interface ZustandState {
    searchTerm: string;
    updateSearchTerm: (text: string) => void;
    cartList: CardItems[];
    updateCart: (items: CardItems[]) => void;
}



export const useStore = create<ZustandState>((set) => ({
  // initial state
  searchTerm: '',
  // methods for manipulating state
  updateSearchTerm: (text: string) => {
    set(() => ({
        searchTerm: text
    }));
  },
  cartList: [],
  // methods for manipulating state
  updateCart: (items: []) => {
    set(() => ({
      cartList: items
    }));
  },
}));