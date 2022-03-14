import { Button, OutlinedInput, Typography } from "@material-ui/core";
import { ArrowBackTwoTone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { React, useState } from "react";
import Link from "next/link";

const style = makeStyles((theme) => ({
  iconK: {
    color: "#ED0A2A",
    cursor: "pointer",
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
  img: {
    paddingTop: 40,
  },
  main: {
    backgroundColor: "rgb(255 255 255)",
  },
  inputField: {
    width: 70,
    height: 70,
    borderRadius: "16px",
    alignItems: "center",
    border: "none",
    backgroundColor: "rgb(250 250 250)",
    margin: 10,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  btnVerif: {
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
    paddingTop: "30vh",
  },
}));

const Verifikasi = () => {
  const classes = style();

  const [otp, setOtp] = useState(new Array(4).fill("-"));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.iconK}>
          <Link href="/register">
            <ArrowBackTwoTone />
          </Link>
        </div>
        <Typography className={classes.text}>Verifikasi OTP</Typography>
      </div>
      <div className={classes.main}>
        <center className={classes.img}>
          <Image src="/assets/otp_1.png" alt="logo" width="163" height={165} />
          <Typography
            style={{
              fontWeight: "bold",
              margin: 20,
            }}
          >
            Verifikasi Kode OTP
          </Typography>
          <Typography
            style={{
              width: "80%",
            }}
          >
            Masukkan nomor OTP yang telah kami kirim ke nomor telepon anda
          </Typography>
          <div>
            <div>
              {otp.map((data, index) => {
                return (
                  <input
                    style={{
                      textAlign: "center",
                    }}
                    maxLength="1"
                    className={classes.inputField}
                    type="text"
                    name="otp"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
              <p>OTP Entered - {otp.join("")}</p>
            </div>
            <div className={classes.Height}></div>
            <Button
              fullWidth
              className={classes.btnVerif}
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </Button>
          </div>
        </center>
      </div>
    </>
  );
};

export default Verifikasi;
