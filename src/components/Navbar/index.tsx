import { Box, Button, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import useNotesStore from "../../store/useNotesStore";

const Navbar = () => {
  const { countNotes } = useNotesStore();

  const total = countNotes();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="h6" sx={{ flexGrow: 1 }}>
            My Notes
          </Typography>
          <Typography variant="h6" noWrap component="h6">
            Total Notes: {total}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
