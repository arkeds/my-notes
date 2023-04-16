import { useState } from "react";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        sx={{
          marginTop: "3rem",
        }}
      >
        <NoteForm />
      </Container>
    </div>
  );
}

export default App;
