import React from "react";
import { graphql, Link } from "gatsby";
import { BlogCard } from "@components/blog-card";

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <div>
      <h1>My blog posts</h1>
      <Link to="/blog/tags">by tags</Link>

      {posts.map((post) => (
        <BlogCard key={post.id} post={post}></BlogCard>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query BlogQuery($currentDate: Date!) {
    blog: allMarkdownRemark(
      filter: { frontmatter: { date: { lte: $currentDate } } }
      limit: 2000
    ) {
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
