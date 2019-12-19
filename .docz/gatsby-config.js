const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Cb React Notifications',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['Introduction', 'Features', 'Props', 'Component Structure'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'D:\\office\\notifications-docs\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Cb React Notifications',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3003,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\office\\notifications-docs',
          templates:
            'D:\\office\\notifications-docs\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\office\\notifications-docs\\.docz',
          cache: 'D:\\office\\notifications-docs\\.docz\\.cache',
          app: 'D:\\office\\notifications-docs\\.docz\\app',
          appPackageJson: 'D:\\office\\notifications-docs\\package.json',
          gatsbyConfig: 'D:\\office\\notifications-docs\\gatsby-config.js',
          gatsbyBrowser: 'D:\\office\\notifications-docs\\gatsby-browser.js',
          gatsbyNode: 'D:\\office\\notifications-docs\\gatsby-node.js',
          gatsbySSR: 'D:\\office\\notifications-docs\\gatsby-ssr.js',
          importsJs: 'D:\\office\\notifications-docs\\.docz\\app\\imports.js',
          rootJs: 'D:\\office\\notifications-docs\\.docz\\app\\root.jsx',
          indexJs: 'D:\\office\\notifications-docs\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\office\\notifications-docs\\.docz\\app\\index.html',
          db: 'D:\\office\\notifications-docs\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
