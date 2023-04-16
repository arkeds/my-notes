import { create } from "zustand";

export interface INote {
  id: string;
  text: string;
}

interface INotesStore {
  notes: INote[];
  addNote: (note: INote) => void;
  countNotes: () => number;
  deleteNote: (id: string) => void;
}

const useNotesStore = create<INotesStore>((set, get) => ({
  notes: [],
  addNote: (note: INote) => set((state) => ({ notes: [...state.notes, note] })),
  countNotes: () => get().notes.length,
  deleteNote: (id: string) => {
    const newNotes = get().notes.filter((note) => note.id !== id);
    set(() => ({ notes: [...newNotes] }));
  },
}));

export default useNotesStore;
