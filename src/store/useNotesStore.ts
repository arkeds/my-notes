import { create } from "zustand";

export interface INote {
  id: string;
  text: string;
}

interface INotesStore {
  notes: INote[];
  forEdit: string | null;
  addNote: (note: INote) => void;
  countNotes: () => number;
  deleteNote: (id: string) => void;
  updateNote: (id: string, text: string) => void;
  selectForEdit: (id: string) => void;
  getForEdit: () => INote | null;
}

const useNotesStore = create<INotesStore>((set, get) => ({
  notes: [],
  forEdit: null,
  addNote: (note: INote) => set((state) => ({ notes: [...state.notes, note] })),
  countNotes: () => get().notes.length,
  deleteNote: (id: string) => {
    const newNotes = get().notes.filter((note) => note.id !== id);
    set(() => ({ notes: [...newNotes] }));
  },
  updateNote: (id: string, text: string) => {
    const noteToUpdate = get().notes.find((note) => note.id === id);
    const noteIndex = get().notes.indexOf(noteToUpdate!);
    const notesUpdated = get().notes.map((note: INote, index) => {
      if (noteIndex === index) {
        return {
          id: id,
          text: text,
        };
      }
      return note;
    });
    set(() => ({ notes: notesUpdated }));
  },
  selectForEdit: (id: string) => set(() => ({ forEdit: id })),
  getForEdit: (): INote | null => {
    if (get().forEdit) {
      return get().notes.find((n) => n.id === get().forEdit)!;
    }
    return null;
  },
}));

export default useNotesStore;
