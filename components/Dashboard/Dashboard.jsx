import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AssignmentInd, ArrowRightAlt, Store, CheckCircle, Forum, Person, HourglassEmpty } from '@material-ui/icons';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import DriverStatus from './DriverStatus';

const useStyles = makeStyles((theme) => ({
  box: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[400],
    padding: 15,
    marginTop: 15,
  },
  boxInactive: {
    padding: 15,
    marginTop: 15,
  },
  illustration: {
    marginTop: 30,
    fontSize: 130,
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
  description: {
    fontWeight: '600',
    fontSize: 14,
    marginTop: 10,
    color: theme.palette.grey[400],
  },
  description2: {
    fontWeight: '600',
    fontSize: 14,
    marginTop: 5,
    color: theme.palette.grey[400],
  },
  uploadBtn: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffff',
    textTransform: 'none',
    width: '100%',
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '600',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  cardSuccess: {
    backgroundColor: theme.palette.secondary[300],
    marginTop: 20,
    paddingTop: 13,
    paddingBottom: 10,
  },
  fontSuccess: {
    color: theme.palette.secondary.main,
    fontWeight: '600',
  },
  iconCheck: {
    fontSize: 60,
    color: '#ffff',
  },
  buttonCS: {
    marginTop: 25,
    width: '100%',
    padding: 10,
    fontWeight: '600',
    border: `1px solid ${theme.palette.secondary.grey}`,
  },
}));

const Dashboard = (props) => {
  const { status } = props;
  const classes = useStyles();
  const isMobileShort = useMediaQuery({ query: '(max-width: 400px)' });

  if (status === 'VERIFIED') {
    return (
      <Container>
        <DriverStatus status={status} />
        <Box className={classes.cardSuccess}>
          <Grid container alignItems="center">
            <Grid item xs={isMobileShort ? 3 : 2}>
              <center><CheckCircle className={classes.iconCheck} /></center>
            </Grid>
            <Grid item xs={isMobileShort ? 9 : 10}>
              <Typography className={classes.fontSuccess}>Selamat Akun Anda Susah Diverifikasi</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.box}>
          <center>
            <Store className={classes.illustration} />
            <Typography className={classes.title}>Menunggu Admin Mengaturkan Penempatan Merchant untuk Anda</Typography>
            <Typography className={classes.description}>Kami akan mengaturkan toko / merchant yang akan bekerja sama dengan anda</Typography>
            <Typography className={classes.description2}>Jika lebih dari 5 hari kerja silahkan hubungi admin</Typography>
          </center>
          <Button variant="outlined" className={classes.buttonCS} startIcon={<Forum />}>Hubungi CS</Button>
        </Box>
      </Container>
    );
  }

  if (status === 'INACTIVE') {
    return (
      <Container>
        <Box className={classes.boxInactive}>
          <center>
            <Person className={classes.illustration} style={{ color: 'grey' }} />
            <Typography className={classes.title}>Akun Anda telah dinonaktifkan</Typography>
            <Typography className={classes.description2}>Untuk mengaktifkan Akun ini lagi silahkan hubungi Admin</Typography>
          </center>
          <Button variant="outlined" className={classes.buttonCS} startIcon={<Forum />}>Hubungi CS</Button>
        </Box>
      </Container>
    );
  }

  if (status === 'UNVERIFIED') {
    return (
      <Container>
        <DriverStatus status={status} />
        <Box className={classes.box}>
          <center>
            <HourglassEmpty className={classes.illustration} />
            <Typography className={classes.title}>Menunggu Data Anda Verifikasi Oleh Admin</Typography>
            <Typography className={classes.description}>Data anda sudah kami simpan. Selanjutnya silahkan tunggu diverifikasi & dihubungi admin</Typography>
            <Typography className={classes.description2}>Paling lama 3-5 hari kerja</Typography>
          </center>
        </Box>
      </Container>
    );
  }

  if (status === 'PENDING') {
    return (
      <Container>
        <DriverStatus status={status} />
        <Box className={classes.box}>
          <center>
            <AssignmentInd className={classes.illustration} />
            <Typography className={classes.title}>Lengkapi Surat-surat penting untuk data anda!</Typography>
            <Typography className={classes.description}>Upload scan KTP, SIM & STNK dengan format PDF</Typography>
          </center>
          <Link href="/daftar-driver">
            <Button variant="contained" className={classes.uploadBtn}>Upload Sekarang <ArrowRightAlt /></Button>
          </Link>
        </Box>
      </Container>
    );
  }

  return (<Container />);
};

export default Dashboard;
