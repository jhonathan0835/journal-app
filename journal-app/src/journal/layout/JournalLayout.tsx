import { Box } from "@mui/material"
import { ReactNode } from "react";
import NavBar from "../components/NavBar";

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
