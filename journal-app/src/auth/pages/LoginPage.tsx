import { Google, Login } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import {Link as RouterLink} from "react-router";
import AuthLayout from "../layout/AuthLayout";
const LoginPage = () => {
  return (

    <AuthLayout title="Login">    
        <form>
          <Grid container>
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

            <Grid container size={{ xs: 12, sm: 12, md: 12 }} mb={2}  >
              <Grid size={{ xs: 12, sm: 6, md: 6 }} padding={1} mt={2}>
                <Button variant="contained" fullWidth>
                  <Login /> <Typography ml={1}>Login</Typography>
                </Button>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}  padding={1} mt={2}>
                <Button variant="contained" fullWidth>
                  <Google /> <Typography ml={1}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

          <Grid container direction='row' justifyContent='end' >
            <Link color='inherit' component={RouterLink} to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
          
          </Grid>
        </form>
        </AuthLayout>
  );
};

export default LoginPage;
