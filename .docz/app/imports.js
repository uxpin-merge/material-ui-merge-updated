export const imports = {
  'src/ComponentTest.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-component-test" */ 'src/ComponentTest.mdx'
    ),
}
