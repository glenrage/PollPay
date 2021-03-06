import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>

      <Navbar />
      {props.children}
    </Container>
  );
};
