import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";

function App() {
  return (
    <div className="app">
      <TextField
        className="field"
        id="outlined-name"
        label="Email Address"
        margin="normal"
        variant="outlined"
      />
      <br />

      <TextField
        className="field"
        id="outlined-name"
        label="Password"
        margin="normal"
        variant="outlined"
      />
      <br />

      <Button className="sign-up" variant="contained" color="primary">
        Sign Up
      </Button>
    </div>
  );
}

export default App;
