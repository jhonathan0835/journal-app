import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";

interface NavBarProps {
  drawerWidth: number;
}

const NavBar = ({ drawerWidth }: NavBarProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{
            mr: 2,
            display: { sm: "none" },
          }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">
            MyApp
          </Typography>
        </Grid>

        {/* Logout button moved to the end */}
        <IconButton color="error" sx={{ ml: 'auto' }}>
          <LogoutOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;