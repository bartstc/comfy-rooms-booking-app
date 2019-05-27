import React from 'react';

import {Main} from './Layout.styles';

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

export default Layout;