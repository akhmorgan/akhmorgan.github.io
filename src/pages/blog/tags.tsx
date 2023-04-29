import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { Link, graphql } from "gatsby";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <h1>{title}</h1>
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag, index) => (
          <li key={index} className="row">
            <Link
              className="col-3"
              to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
            >
              {tag.fieldValue}
            </Link>
            <div className="col">
              <span className="badge bg-primary">{tag.totalCount}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query tagQuery($currentDate: Date!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { date: { lte: $currentDate } } }
      limit: 2000
    ) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
