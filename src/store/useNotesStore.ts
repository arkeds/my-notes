import { create } from "zustand";

export interface INote {
  id: string;
  text: string;
}

interface INotesStore {
  notes: INote[];
  addNote: (note: INote) => void;
  countNotes: () => number;
}

const useNotesStore = create<INotesStore>((set, get) => ({
  notes: [],
  addNote: (note: INote) => set((state) => ({ notes: [...state.notes, note] })),
  countNotes: () => get().notes.length,
}));

export default useNotesStore;
