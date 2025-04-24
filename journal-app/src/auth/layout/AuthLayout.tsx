import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

const AuthLayout = ({children,title}: AuthLayoutProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.main",
        padding: 4,
        minHeight: "100vh",
      }}
    >
      <Grid
        className="box-shadow"
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          boxShadow: 2,
          width: { md: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }} align="center">
          {title}
        </Typography>
        {/* Van los hijos*/}
        {children}

      </Grid>
    </Grid>
  );
};

export default AuthLayout;
