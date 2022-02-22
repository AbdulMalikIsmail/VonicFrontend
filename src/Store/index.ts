import create from "zustand";

interface TodoState {
    searchTerm: string;
    updateSearchTerm: (text: string) => void;
}

export const useStore = create<TodoState>((set) => ({
  // initial state
  searchTerm: '',
  // methods for manipulating state
  updateSearchTerm: (text: string) => {
    set(() => ({
        searchTerm: text
    }));
  },
}));