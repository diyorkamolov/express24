import AppBar from "@mui/material/AppBar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid"; // Import Grid
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";

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

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#fff", boxShadow: 2, color: "#000" }}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2}>
              <img
                style={{ width: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5xwqoVUsUDErUWcjlGijv6Klq5K8aJZTFQ&usqp=CAU"
                alt=""
              />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/photos"}>Photos</NavLink>
                
                <input
                  style={{
                    width: "35%",
                    height: "6vh",
                    borderRadius: "10px",
                    border: "1px solid gray",
                    textAlign: "center",
                  }}
                  type="text"
                  placeholder="taom,tovar,oshxona"
                />
                <button
                  style={{
                    height: "6vh",
                    width: "10%",
                    borderRadius: "10px",
                    color: "black",
                    backgroundColor: "yellow",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  Topish
                </button>
                <Button
                  style={{
                    width: "330px",
                    height: "6vh",
                    backgroundColor: "#f5f5dc",
                    color: "black",
                    borderRadius: "10px",
                  }}
                  onClick={handleOpen}
                >
                  Toshkent, Yunusobod
                </Button>
              </Box>
            </Grid>
            <Grid item xs={2} />
          </Grid>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Fade>
          </Modal>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
