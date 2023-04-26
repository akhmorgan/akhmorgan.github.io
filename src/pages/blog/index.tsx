import React from "react";
import { graphql, Link } from "gatsby";
import { BlogCard } from "../../components/blog-card";

const isPostPublished = (post) => {
  return post.frontmatter.date.includes("ago");
};

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <div>
      <h1>My blog posts</h1>

      {posts.map(
        (post) =>
          isPostPublished(post) && (
            <BlogCard key={post.id} post={post}></BlogCard>
          )
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;
