import { FormEvent, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { v4 } from "uuid";

import useNotesStore, { INote } from "../../store/useNotesStore";

const NoteForm = () => {
  const { addNote, notes } = useNotesStore();
  const [note, setNote] = useState<string>("");

  const onSubmitNote = (event: FormEvent) => {
    event.preventDefault();

    const newNote: INote = {
      id: v4(),
      text: note,
    };

    addNote(newNote);
    setNote("");
  };

  return (
    <form onSubmit={(e) => onSubmitNote(e)}>
      <TextField
        label="Note"
        multiline
        rows={4}
        value={note}
        fullWidth
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNote(e.target.value)
        }
      />
      <Button
        sx={{
          margin: "1rem 0",
        }}
        variant="contained"
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export default NoteForm;
