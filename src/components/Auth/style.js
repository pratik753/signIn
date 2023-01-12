import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    // maxWidth: "608px",
    width: "100%",
    marginRight: "-13rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  logo: {
    position: "absolute",
    width: "160px",
    height: "36.02px",
    left: "60px",
    top: "60px",
  },
  tex: {
    width: "55px",
    padding: ".5rem",
    height: "25px",
    margin: ".5rem",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "17px",

    /* identical to box height */
    textAlign: "center",

    background: "#F0F0F0",
    borderRadius: "10px",

    /* Text Primary */
    color: "#545454",
  },
  mainBox: {
    /* Auto layout */
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "40px 91px",
    gap: "24px",

    position: "absolute",
    width: "523px",
    height: "492px",
    left: "278px",
    top: "85px",

    /* White */
    background: "#FFFFFF",

    /* Normal box */
    boxShadow: "4px 4px 20px rgba(157, 157, 157, 0.12)",
    borderRadius: "15px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  centerText: {
    textAlign: "center",
    margin: "1rem",
  },
  centerText2: {
    textAlign: "center",
    margin: "1rem",
    color: "grey",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));
