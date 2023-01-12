import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyle from "./style";
import "./cssFile.css";
import logo from "../../assets/wobot-logo_blue 1.png";
import smallLogo from "../../assets/Solid_lines.png";
// import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import Input from "./Input";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyle();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () =>
    setShowPassword((preShowPassword) => !preShowPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // dispatch(signup(formData, history));
    } else {
      // dispatch(signin(formData, history));
    }
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    // setIsSignup((preIsSignup) => !preIsSignup);
    // setShowPassword(false);
  };
  return (
    <div component="main" maxWidth="xs">
      <Container component="main" maxWidth="xs">
        <img src={logo} className={classes.logo} />
        <Paper className={classes.paper} elevation={12}>
          <img src={smallLogo} className={classes.dlogo} />
          {/* <Avatar className={classes.avatar}> */}
          {/* <LockOpenOutlined /> */}
          {/* </Avatar> */}
          <Typography variant="h5" className={classes.centerText}>
            It’s a delight to have you onboard
          </Typography>
          <Typography variant="body1" className={classes.centerText2}>
            Help us know you better. (This is how we optimize Wobot as per your
            business needs)
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <TextField
                //  name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="Company Name"
                label="Company Name"
                // handleChange={handleChange}
                type="name"
              />
              <InputLabel id="demo-simple-select-label">Industry</InputLabel>
              <Select
                xs={12}
                labelId="Industry"
                id="Industry"
                // value={age}
                fullWidth
                label="Industry"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Industry 1</MenuItem>
                <MenuItem value={20}>Industry 2</MenuItem>
                <MenuItem value={30}>Industry 3</MenuItem>
              </Select>
            </Grid>
            <Typography variant="h6" className={classes.centerText}>
              Company Size
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.tex}>
                1-20
              </Typography>
              <Typography variant="h5" className={classes.tex}>
                21-50
              </Typography>
              <Typography variant="h5" className={classes.tex}>
                51-200
              </Typography>
              <Typography variant="h5" className={classes.tex}>
                201-500
              </Typography>
              <Typography variant="h5" className={classes.tex}>
                500+
              </Typography>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {"Get Start"}
            </Button>
          </form>
        </Paper>
        <Grid container justify="flex-end">
          <Grid item>
            <Typography style={{ marginTop: "6rem", marginBottom: "5rem" }}>
              Terms of use | Privacy policy{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Auth;
