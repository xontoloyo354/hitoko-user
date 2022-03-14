import Layout from "@components/Layout";
import { Container } from "@material-ui/core";
import React from "react";
import VerifOTP from "./components/VerifOTP";

const index = () => {
  return (
    <Layout>
      <Container>
        <VerifOTP />
      </Container>
    </Layout>
  );
};

export default index;
