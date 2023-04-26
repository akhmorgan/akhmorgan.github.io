import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Adam Morgan's Personal Site",
    description:
      "This is my personal site. It has a bit of information about me, and also some blog posts I've written.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/blog/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 100,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
};

export default config;
