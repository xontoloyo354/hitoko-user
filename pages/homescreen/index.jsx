import Layout from "@components/Layout";
import { Container } from "@material-ui/core";
import React from "react";
import Home from "./components/Home";

const index = () => {
  return (
    <Layout>
      <Container>
        <Home />
      </Container>
    </Layout>
  );
};

export default index;
