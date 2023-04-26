import { Link } from "gatsby";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Link to="/blog">Read my blog</Link>
    </div>
  );
}
