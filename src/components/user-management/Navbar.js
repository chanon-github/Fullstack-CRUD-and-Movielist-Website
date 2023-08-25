'use client'
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useRouter } from 'next/navigation'
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import JScookies from "js-cookie";
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const onLogout = () => {
    JScookies.remove('token') 
    JScookies.set('isLogined', false)

    router.push('/user/login');

  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link href={"/movie"} style={{textDecoration:'none'}}>
                  <Typography textAlign="center" style={{color:'black'}}>
                    {"Movie List"}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu()
                  onLogout()
                }}
              >
                <Typography textAlign="center">{"Log out"}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
