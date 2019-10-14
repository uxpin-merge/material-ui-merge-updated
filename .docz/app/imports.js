export const imports = {
  'src/ButtonStyled/ButtonStyled.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-button-styled-button-styled" */ 'src/ButtonStyled/ButtonStyled.mdx'
    ),
  'src/IFrame/IFrame.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-i-frame-i-frame" */ 'src/IFrame/IFrame.mdx'
    ),
  'src/IglooAppbar/IglooAppbar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-igloo-appbar-igloo-appbar" */ 'src/IglooAppbar/IglooAppbar.mdx'
    ),
  'src/IglooHeader/IglooHeader.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-igloo-header-igloo-header" */ 'src/IglooHeader/IglooHeader.mdx'
    ),
  'src/IglooSideNavigation/IglooSideNavigation.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-igloo-side-navigation-igloo-side-navigation" */ 'src/IglooSideNavigation/IglooSideNavigation.mdx'
    ),
}
