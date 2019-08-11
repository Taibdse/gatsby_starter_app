import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="About us" />
            <div>
                <h1>Latest Posts</h1>
                { data.allMarkdownRemark.edges.map(post => {
                    const { author, title, date, path } = post.node.frontmatter;
                    return (
                        <div>
                            <h3>{ title }</h3>
                            <small>Posted by { author } on { date }</small>
                            <br/><br/>
                            <Link to={path}>Read More</Link>
                            <br/><br/><br/>
                        </div>
                    )
                }) }
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogIndexQuery{
        allMarkdownRemark{
            edges{
                node{
                    id
                    frontmatter{
                        path
                        title
                        date
                        author
                    }
                    excerpt
                }
            }
        }
    }
`

export default BlogPage;
