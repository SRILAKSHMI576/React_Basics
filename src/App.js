import React from "react";
import Checkout from "./Checkout/Checkout";
import Title from "./Ttitle/Title";

function App() {
  return (
    <div className="app">
      {/* <TextField
        className="field"
        id="outlined-name"
        label="Email Address"
        margin="normal"
        variant="outlined"
      />
      <br /> */}

      {/* <TextField
        className="field"
        id="outlined-name"
        label="Password"
        margin="normal"
        variant="outlined"
      />
      <br />

      <Button className="sign-up" variant="contained" color="primary">
        Sign Up
      </Button> */}
      <Title />
      <Checkout />
    </div>
  );
}

export default App;
