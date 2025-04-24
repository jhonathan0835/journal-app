import { TurnedInNot } from "@mui/icons-material";
import { Box, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from "@mui/material";

interface SideBarProps {
  drawerWidth: number;
}

const SideBar = ({ drawerWidth }: SideBarProps) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ p: 2 }}>
            Jhonathan RR.
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {[
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>

                <Grid container>
                    <ListItemText primary={text} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                    </Typography>

                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;