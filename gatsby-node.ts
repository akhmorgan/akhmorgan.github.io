const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);
const tagTemplate = path.resolve("./src/templates/tags.tsx");

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      postsRemark: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: "/blog" + node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const tags = result.data.tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

export const onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      currentDate: new Date().toISOString(),
    },
  });
};

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@node_modules": path.resolve(__dirname, "node_modules"),
      },
    },
  });
};
