const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\Users\\angel\\Downloads\\Projects\\Content review\\Actual Notion\\gatsby-starter-strata-notion\\src\\templates\\blogPost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\angel\\Downloads\\Projects\\Content review\\Actual Notion\\gatsby-starter-strata-notion\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\angel\\Downloads\\Projects\\Content review\\Actual Notion\\gatsby-starter-strata-notion\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\angel\\Downloads\\Projects\\Content review\\Actual Notion\\gatsby-starter-strata-notion\\src\\pages\\blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\angel\\Downloads\\Projects\\Content review\\Actual Notion\\gatsby-starter-strata-notion\\src\\pages\\index.js"))),
  "component---src-pages-subscribe-js": hot(preferDefault(require("C:\\Users\\angel\\Downloads\\Projects\\Content review\\Actual Notion\\gatsby-starter-strata-notion\\src\\pages\\subscribe.js")))
}

