import React from 'react';
import PropTypes from 'prop-types';

import { Main } from './Layout.styles';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;