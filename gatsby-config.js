module.exports = {
  siteMetadata: {
    title: "Angela Hollings Website",
    author: "Angela Hollings",
    description: "My Portfolio and Blog"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/angelas/402f07d9a2dc4b6da5a2dd2de9838354?v=c124e6391ac84fd58b39560c5c2c93f1',
            cacheType: 'html'
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
