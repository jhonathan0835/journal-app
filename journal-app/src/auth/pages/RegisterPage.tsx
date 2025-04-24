import { Login } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import AuthLayout from "../layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Crear una cuenta">
      <form>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 12 }} mb={2}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12 }} mb={2}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }} mb={2}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
            />
          </Grid>

          <Grid container size={{ xs: 12, sm: 12, md: 12 }} mb={2}>
            <Grid size={{ xs: 12 }} padding={1} mt={2}>
              <Button variant="contained" fullWidth>
                <Login /> <Typography ml={1}>Crear cuenta</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end" >
          <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
          <Link color="inherit" component={RouterLink} to="/auth/login">
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;