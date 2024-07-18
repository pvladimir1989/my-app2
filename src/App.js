import "./App.css";
import { Button, Grid, Rating, Box } from "@mui/material";
import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Item } from "./Item";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState(2);
  console.log(value);
  return (
    <div className="App">
      <Button variant="text" style={{ color: open ? "red" : "green" }}>
        Text {open ? "привет" : "пока"}
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>

      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
