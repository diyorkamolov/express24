import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid"; // Import Grid
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

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
  const [open, setOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClear = () => setSearchValue("");
  const toggleLanguages = () => setShowLanguages(!showLanguages);
  const toggleLogin = () => setShowLogin(!showLogin);

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

                <Box sx={{ position: "relative", width: "35%" }}>
                  <SearchIcon
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      color: "gray",
                    }}
                  />
                  <input
                    style={{
                      width: "100%",
                      height: "6vh",
                      borderRadius: "10px",
                      border: "1px solid gray",
                      paddingLeft: "40px",
                      textAlign: "center",
                      borderColor: "gray",
                    }}
                    type="text"
                    placeholder="Muassasa,taom,tovar va oshxona"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {searchValue && (
                    <ClearIcon
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                        cursor: "pointer",
                      }}
                      onClick={handleClear}
                    />
                  )}
                </Box>
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
            <Grid item xs={2}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <Button color="inherit" startIcon={<LanguageIcon />} onClick={toggleLanguages}>
                  English
                </Button>
                <Button color="inherit" startIcon={<AccountCircleIcon />} onClick={toggleLogin}>
                  Profile
                </Button>
              </Box>
            </Grid>
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

          {showLanguages && (
            <Box sx={{ position: "absolute", top: "100%", right: 0, mt: 1, p: 1, bgcolor: "#fff", boxShadow: 2 }}>
              <Button color="inherit" startIcon={<LanguageIcon />}>
                Uzbek
              </Button>
              <Button color="inherit" startIcon={<LanguageIcon />}>
                Russian
              </Button>
            </Box>
          )}

          {showLogin && (
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={showLogin}
              onClose={toggleLogin}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={showLogin}>
                <Box sx={style}>
                  <Typography id="transition-modal-title" variant="h6" component="h2">
                    Login
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {/* Your login form goes here */}
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
