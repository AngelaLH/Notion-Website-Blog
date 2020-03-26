module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/website-icon.png"},
    },{
      plugin: require('../node_modules/gatsby-source-notion-database/gatsby-browser.js'),
      options: {"plugins":[],"sourceConfig":[{"name":"posts","table":"https://www.notion.so/angelas/402f07d9a2dc4b6da5a2dd2de9838354?v=c124e6391ac84fd58b39560c5c2c93f1","cacheType":"html"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
