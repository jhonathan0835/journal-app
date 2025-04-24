import { Box } from "@mui/material"
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

interface AuthLayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const JournalLayout = ({children}:AuthLayoutProps) => {
  return (

    <Box>

        {/* NavBar */}
        <NavBar drawerWidth={drawerWidth} />

        {/* Sidebar */}

        <SideBar drawerWidth={drawerWidth} />

        <Box 
        component='main'
        sx={{flexGrow: 1, p: 3}}
        >
            {/* Toolbar */}
            {children}

        </Box>

    </Box>


  )
}

export default JournalLayout
