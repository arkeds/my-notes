import { IconButton, Paper } from "@mui/material";
import { FC, ReactNode } from "react";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useNotesStore from "../../store/useNotesStore";

const NotesList: FC = () => {
  const { notes, deleteNote } = useNotesStore();
  return (
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
  );
};

export default NotesList;
