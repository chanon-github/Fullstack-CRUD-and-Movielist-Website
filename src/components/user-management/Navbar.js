'use client'
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import "./menu.css";
import { useRouter } from 'next/navigation'

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    width: '100%',

    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = () => {
  const router = useRouter()

  const onLogout = () => {
    localStorage.removeItem('token');
    router.push('/user/login');

  };

  return (
    <AppBar position="fixed" open={true}>
      <Toolbar>
        <div className="navbar-container">
          <div>
            <Typography variant="h6" noWrap component="div">
              User Management
            </Typography>
          </div>
          <div>
      
            <IconButton
              style={{color:'white'}}
              onClick={(e) => {
                onLogout();
              }}
            >
              <LogoutIcon />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
