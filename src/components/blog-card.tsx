import { Link } from "gatsby";
import React from "react";

export const BlogCard = (props) => {
  const post = props.post;
  return (
    <article key={post.id}>
      <Link to={"/blog" + post.fields.slug}>
        <h2>{post.frontmatter.title}</h2>
      </Link>
      <small>
        {post.frontmatter.author}, {post.frontmatter.date}
      </small>
      <p>{post.excerpt}</p>
    </article>
  );
};
