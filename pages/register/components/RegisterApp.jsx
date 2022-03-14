import {
  Button,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import {
  ArrowBackTwoTone,
  EuroOutlined,
  PersonOutline,
  PhoneOutlined,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

import React from "react";

const style = makeStyles((theme) => ({
  iconK: {
    color: "#ED0A2A",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 20,
  },
  text: {
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  input: {
    paddingTop: 10,
  },
  icon: {
    color: "#7A7A7A",
  },
  inputField: {
    width: "90%",
    marginTop: 10,
    borderRadius: 100,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  btnCSS: {
    marginTop: 20,
    borderRadius: 100,
    background: theme.palette.primary.main,
    color: theme.palette.text.white,
    width: "90%",
    padding: 10,
    fontWeight: "600",
    "&:hover": {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  Height: {
    height: "60vh",
  },
}));

function RegisterApp() {
  const classes = style();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.iconK}>
          <Link href="/register">
            <ArrowBackTwoTone />
          </Link>
        </div>
        <Typography className={classes.text}>Daftar Baru</Typography>
      </div>
      <div className={classes.main}>
        <div className={classes.input}>
          <OutlinedInput
            fullWidth
            className={classes.inputField}
            type="text"
            placeholder="Nama Lengkap"
            startAdornment={
              <InputAdornment position="start" className={classes.icon}>
                <PersonOutline />
              </InputAdornment>
            }
          />
        </div>
        <div className={classes.input}>
          <OutlinedInput
            fullWidth
            className={classes.inputField}
            type="number"
            placeholder="Nomer Hp"
            startAdornment={
              <InputAdornment position="start" className={classes.icon}>
                <PhoneOutlined />
              </InputAdornment>
            }
          />
        </div>
        <div className={classes.input}>
          <OutlinedInput
            fullWidth
            className={classes.inputField}
            type="text"
            placeholder="Kode Referal (Optional)"
            startAdornment={
              <InputAdornment position="start" className={classes.icon}>
                <EuroOutlined />
              </InputAdornment>
            }
          />
        </div>
        <div className={classes.Height}></div>
        <center>
          <Link href="/verifikasi">
            <Button fullWidth type="submit" className={classes.btnCSS}>
              Daftar
            </Button>
          </Link>
        </center>
      </div>
    </>
  );
}

export default RegisterApp;
