export const imports = {
  'src/ButtonStyled/ButtonStyled.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-button-styled-button-styled" */ 'src/ButtonStyled/ButtonStyled.mdx'
    ),
  'src/IglooAppbar/IglooAppbar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-igloo-appbar-igloo-appbar" */ 'src/IglooAppbar/IglooAppbar.mdx'
    ),
  'src/IglooSideNavigation/IglooSideNavigation.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-igloo-side-navigation-igloo-side-navigation" */ 'src/IglooSideNavigation/IglooSideNavigation.mdx'
    ),
}
