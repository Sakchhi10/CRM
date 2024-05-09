import React, { useState } from "react";

import {

  Box,

  AppBar,

  Menu,
  
  Toolbar,

  Typography,

  IconButton,

  MenuItem,

  Button,

} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

import { v4 as uuidv } from "uuid";

import MenuIcon from '@mui/icons-material/Menu';


const pages = [

  { name: "Home", to: "/" },

  { name: "About", to: "#about" },

  { name: "Services", to: "#services" },

  { name: "Contact", to: "#contact" },

];
 
const Navbar = () => {

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState();

  const handleOpenNavMenu = (event) => {

    setAnchorElNav(event.currentTarget);

  };
 
  const handleCloseNavMenu = () => {

    setAnchorElNav(null);

  };
 
  return (

    <Box sx={{ display: "flex" }}>

      <AppBar component={"nav"} color="inherit">

        <Toolbar>

          <Box

            sx={{

              display: { xs: "none", md: "flex" },

              cursor: "pointer",

              textTransform: "uppercase",

              gap: 1,

            }}

          >

            <img

              src="/assets/justinTimetrans.png"

              alt="logo"

              height={"30px"}

              style={{ objectFit: "contain" }}

              loading="lazy"

            />

            <Typography color="primary" variant="h4" noWrap>

              Just In Time

            </Typography>

          </Box>

          <Box

            sx={{

              display: {

                xs: "flex",

                md: "none",

              },

            }}

          >

            <IconButton

              sx={{

                padding: 0,

              }}

              size="large"

              aria-label="menu-appbar"

              aria-controls="menu-appbar"

              aria-haspopup="true"

              onClick={handleOpenNavMenu}

              color="primary"

            >

              <MenuIcon fontSize="large" />

            </IconButton>

            <Menu

              id="menu-appbar"

              anchorEl={anchorElNav}

              anchorOrigin={{

                vertical: "bottom",

                horizontal: "left",

              }}

              keepMounted

              transformOrigin={{

                vertical: "top",

                horizontal: "left",

              }}

              open={Boolean(anchorElNav)}

              onClose={handleCloseNavMenu}

              sx={{

                display: { xs: "block", md: "none" },

              }}

            >

              {pages?.map((page) => (

                <MenuItem key={uuidv()} onClick={handleCloseNavMenu}>

                  <Link to={page.to}>

                    <Typography

                      textAlign="center"

                      variant="body2"

                      color={"primary"}

                    >

                      {page.name}

                    </Typography>

                  </Link>

                </MenuItem>

              ))}

            </Menu>

          </Box>

          <Box

            sx={{

              display: { xs: "flex", md: "none" },

              flexGrow: 1,

              justifyContent: "center",

              alignItems: "center",

            }}

          >

            <img

              src="/assets/justinTimetrans.png"

              alt="logo"

              height={"40px"}

              style={{ objectFit: "contain" }}

              loading="lazy"

            />
 
            <Typography color="primary" variant="h3" noWrap>

              Just In Time

            </Typography>

          </Box>

          <Box

            sx={{

              flexGrow: 1,

              display: { xs: "none", md: "flex" },

              justifyContent: "end",

              padding: "0 20px",

              gap: 1,

            }}

          >

            {pages?.map((page) => (

              <Button

                key={uuidv()}

                onClick={() => navigate(page.to)}

                sx={{ my: 2, color: "primary", display: "block" }}

              >

                <Typography> {page.name}</Typography>

              </Button>

            ))}

          </Box>
 
          <Box sx={{ flexGrow: 0 }}>

            <Button

              onClick={() => navigate("/login")}

              variant="outlined"

              sx={{ color: "primary" }}

            >

              {" "}

              Login

            </Button>

          </Box>

        </Toolbar>

      </AppBar>

    </Box>

  );

};

export default Navbar;