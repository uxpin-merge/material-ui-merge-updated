import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Icon from '@material-ui/core/Icon';
import { Root, Header, Nav, Content, Footer } from './sections';

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
  "xs": true,
  "sm": false,
  "md": true
},
"headerPosition": {
  "xs": "sticky",
  "sm": "relative",
  "md": "relative"
},
"squeezed": {
  "xs": false,
  "sm": false,
  "md": false
},
"footerShrink": {
  "xs": false,
  "sm": false,
  "md": true
}
};

const App = () => (
  <Root config={config} style={{ minHeight: "100vh" }}>
    <CssBaseline />
    <Header
      menuIcon={{
        inactive: <Icon>menu</Icon>,
        active: <Icon>chevron_left</Icon>
      }}
    >
        {/* header goes here */}
    </Header>
    <Nav
      collapsedIcon={{
        inactive: <Icon>chevron_left</Icon>,
        active: <Icon>chevron_right</Icon>
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

export default App
