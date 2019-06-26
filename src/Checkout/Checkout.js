import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import "./style.css";

function Checkout() {
  return (
    <div className="container">
      <h1>Checkout</h1>
      <h4>Shipping Address</h4>
      <div className="name">
        <TextField
          className="first-name"
          id="standard-dense"
          label="First name*"
          margin="dense"
        />
        <TextField
          className="last-name"
          id="standard-dense"
          label="Last name*"
          margin="dense"
        />
      </div>
      <div>
        <TextField
          className="Address"
          id="standard-dense"
          label="Address line1*"
          margin="dense"
        />
        <br />
        <TextField
          className="Address"
          id="standard-dense"
          label="Address line2*"
          margin="dense"
        />
      </div>
      <div className="name">
        <TextField
          className="first-name"
          id="standard-dense"
          label="City*"
          margin="dense"
        />
        <TextField
          className="last-name"
          id="standard-dense"
          label="State/Province/Region*"
          margin="dense"
        />
      </div>
      <div className="name">
        <TextField
          className="first-name"
          id="standard-dense"
          label="Zip / Postal code*"
          margin="dense"
        />
        <TextField
          className="last-name"
          id="standard-dense"
          label="Country*"
          margin="dense"
        />
      </div>
      <div>
        <FormControlLabel
          control={<Checkbox value="checkedA" />}
          label="Use this address for payment details"
        />
      </div>
      <div>
        <Button variant="contained" size="small" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}
export default Checkout;
