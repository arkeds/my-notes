import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useDialogStore from "../../store/useDialogStore";
import useNotesStore, { INote } from "../../store/useNotesStore";

const EditNoteDialog = () => {
  const { visible, setVisible } = useDialogStore();
  const { getForEdit, updateNote, forEdit } = useNotesStore();

  const noteForEdit = getForEdit();

  const noteText = noteForEdit ? noteForEdit.text : "";
  const [noteDetails, setNoteDetails] = useState<string>(noteText);

  const handClose = () => {
    setVisible(false);
  };

  const handleUpdate = () => {
    if (forEdit) {
      updateNote(forEdit, noteDetails);
    }
    handClose();
  };

  return (
    <Dialog open={visible} onClose={handClose} maxWidth="md">
      <DialogTitle>Edit Note</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          multiline
          rows={3}
          id="note-edit-form"
          label="Email Address"
          type="text"
          fullWidth
          variant="standard"
          value={noteDetails}
          onChange={(e) => setNoteDetails(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handClose}>Cancel</Button>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditNoteDialog;
