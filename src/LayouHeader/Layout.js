import React from 'react';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import MenuIcon from '@material-ui/icons/Menu';
  import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
  import ChevronRightIcon from '@material-ui/icons/ChevronRight';
  import { Root, Header, Nav, Content, Footer } from './';
  import PropTypes from 'prop-types';
  import IglooHeader from '../IglooLargeHeader/IglooLargeHeader'
  
  const config = {
  "navAnchor": "left",
  "navVariant": {
    "xs": "temporary",
    "sm": "persistent",
    "md": "permanent"
  },
  "navWidth": {
    "xs": 240,
    "sm": 256,
    "md": 256
  },
  "collapsible": {
    "xs": false,
    "sm": false,
    "md": true
  },
  "collapsedWidth": {
    "xs": 64,
    "sm": 64,
    "md": 64
  },
  "clipped": {
    "xs": false,
    "sm": false,
    "md": false
  },
  "headerPosition": {
    "xs": "relative",
    "sm": "relative",
    "md": "relative"
  },
  "squeezed": {
    "xs": false,
    "sm": false,
    "md": true
  },
  "footerShrink": {
    "xs": false,
    "sm": false,
    "md": true
  }
};
  
  const Layout = () => (
    <Root config={config} style={{ minHeight: "100vh" }} width="lg">
      <CssBaseline />
      <Header
        menuIcon={{
          inactive: <MenuIcon />,
          active: <ChevronLeftIcon />
        }}
      >
          <IglooHeader/>
      </Header>
      <Nav
        collapsedIcon={{
          inactive: <ChevronLeftIcon />,
          active: <ChevronRightIcon />
        }}
        header={
          // you can provide fixed header inside nav
          // change null to some react element
          ctx => null
        }
      >
        {/* nav goes here */}
      </Nav>
      <Content>
        {/* content goes here */}
      </Content>
      <Footer>{/* footer goes here */}</Footer>
    </Root>
  )
  Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  }

  export default Layout
