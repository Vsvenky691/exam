import React from "react";
import { useContext, AuthContext,Redirect } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import firebaseConfig from "../config.js";
const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  const [errorMessage,serErrorMessage]=("");
  return (
    <>
      <Typography>Sign in with Email</Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TextField
            id="outlined-password-input"
            label="Email"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </CardContent>
        <CardActions>
          <Fab variant="extended" size="small" color="primary" aria-label="add">
            Submit
          </Fab>
          <Link href="#" underline="none">
            {"Forgot Password ?"}
          </Link>
          <Typography>{errorMessage}</Typography>
        </CardActions>
      </Card>
    </>
  );
};
export default LoginPage;

