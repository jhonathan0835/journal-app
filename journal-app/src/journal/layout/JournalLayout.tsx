import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

interface JournalLayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* NavBar */}
      <NavBar drawerWidth={drawerWidth} />

      {/* SideBar */}
      <SideBar drawerWidth={drawerWidth} />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "64px", // Margin top for the navbar (default AppBar height)
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
