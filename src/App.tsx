import { useState } from "react";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        sx={{
          marginTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <NoteForm />
        <NotesList />
      </Container>
    </div>
  );
}

export default App;
