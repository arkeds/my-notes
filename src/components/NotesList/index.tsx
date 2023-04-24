import { IconButton, Paper } from "@mui/material";
import { FC, ReactNode } from "react";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useNotesStore from "../../store/useNotesStore";
import useDialogStore from "../../store/useDialogStore";
import EditNoteDialog from "../EditNoteDialog";

const NotesList: FC = () => {
  const { notes, deleteNote, selectForEdit, getForEdit } = useNotesStore();

  const hasNoteForEdit = getForEdit();
  const { setVisible } = useDialogStore();

  const onSelectForUpdate = (noteId: string) => {
    selectForEdit(noteId);
    setVisible(true);
  };
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "1rem",
        }}
      >
        {notes.map((n) => (
          <Grid key={n.id} item lg={4} md={3}>
            <Paper
              elevation={4}
              sx={{
                padding: "1rem",
                textAlign: "left",
              }}
            >
              <p>{n.text}</p>
              <div>
                <IconButton
                  color="warning"
                  component="label"
                  onClick={() => onSelectForUpdate(n.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  component="label"
                  onClick={() => deleteNote(n.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {hasNoteForEdit && <EditNoteDialog />}
    </>
  );
};

export default NotesList;
