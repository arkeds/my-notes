import { create } from "zustand";

interface IDialogStore {
  visible: boolean;
  setVisible: (v: boolean) => void;
}

const useDialogStore = create<IDialogStore>((set) => ({
  visible: false,
  noteId: null,
  setVisible: (v: boolean) => set(() => ({ visible: v })),
}));

export default useDialogStore;
