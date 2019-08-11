import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About us" />
            <div>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    A eius vel aliquam sint hic dicta id consequatur illo, 
                    aspernatur culpa at quos, praesentium necessitatibus distinctio 
                    libero iure deserunt odit itaque!</p>
            </div>
        </Layout>
        
    );
};

export default AboutPage;
