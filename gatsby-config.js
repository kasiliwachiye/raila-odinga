require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Raila Odinga's Journey in Kenya`,
    description: `Raila Amolo Odinga is a Kenyan political leader whose career spans engineering, activism, and national reform.`,
    siteUrl: 'https://raila-odinga-path.netlify.app',
    image: '/og.png',
    twitterUsername: '@kasili_dev',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-VLKKYZ8HHP'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EAE4E4`,
        theme_color: `#121111`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
