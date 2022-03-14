import Layout from "@components/Layout";
import { Container } from "@material-ui/core";
import React from "react";
import RegisterApp from "./components/RegisterApp";

function index() {
  return (
    <Layout>
      <Container>
        <RegisterApp />
      </Container>
    </Layout>
  );
}

export default index;
