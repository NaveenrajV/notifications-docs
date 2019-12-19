// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-docs-features-mdx": () => import("./../../src/docs/Features.mdx" /* webpackChunkName: "component---src-docs-features-mdx" */),
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-docs-introduction-mdx": () => import("./../../src/docs/Introduction.mdx" /* webpackChunkName: "component---src-docs-introduction-mdx" */),
  "component---src-docs-props-mdx": () => import("./../../src/docs/Props.mdx" /* webpackChunkName: "component---src-docs-props-mdx" */),
  "component---src-docs-structure-mdx": () => import("./../../src/docs/Structure.mdx" /* webpackChunkName: "component---src-docs-structure-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

