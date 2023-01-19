module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
      endpoint: 'https://api-sa-east-1.hygraph.com/v2/cld3nphrd0pn601ue0fmpep5o/master'
      }
      },
      'gatsby-plugin-image',
  ],
}
