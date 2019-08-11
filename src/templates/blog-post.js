import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Template = ({ data }) => {

    const post = data.markdownRemark;
    const { title, date, author } = post.frontmatter;

    return (
        <Layout>
            <SEO title="About us" />
            <div>
                <Link to="/blog">Go back</Link>
                <hr/>
                <h1>{ title }</h1>
                <h4>
                    Posted by { author } on { date }
                </h4>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
        </Layout>
    );
};


export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter{
                path
                title
                author
                date
            }
        }
    }
`

export default Template;
