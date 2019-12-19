const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\office\\notifications-docs\\.docz\\.cache\\dev-404-page.js"))),
  "component---src-docs-features-mdx": hot(preferDefault(require("D:\\office\\notifications-docs\\src\\docs\\Features.mdx"))),
  "component---readme-md": hot(preferDefault(require("D:\\office\\notifications-docs\\README.md"))),
  "component---src-docs-introduction-mdx": hot(preferDefault(require("D:\\office\\notifications-docs\\src\\docs\\Introduction.mdx"))),
  "component---src-docs-props-mdx": hot(preferDefault(require("D:\\office\\notifications-docs\\src\\docs\\Props.mdx"))),
  "component---src-docs-structure-mdx": hot(preferDefault(require("D:\\office\\notifications-docs\\src\\docs\\Structure.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\office\\notifications-docs\\.docz\\src\\pages\\404.js")))
}

