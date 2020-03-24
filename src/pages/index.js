import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Angela Hollings"
        const siteDescription = "Angela Hollings Personal Website"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Who Am I?</h2>
                        </header>
                        <p>I am a Computer Engineering Student who is passionate about using my University experience to empower others as a passionate Toastmaster, Women in Engineering leader, Robogals leader, and Life Beyond Lectures co-founder</p>
                        <ul className="actions">
                            <li><a href="https://www.notion.so/angelas/Angela-Hollings-130fcff2af0343ff8d9e21f282b41934" target="_blank" className="button">My Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
						<header className="major">
                        <h2>Improve your effectiveness with evidence based and actionable resources</h2>
						</header>
                        <p>A blog featuring collections of the best resources I have found related to productivity, personal development, and rationality as well as ideas from my research</p>
                        <ul className="actions">
                            <li><Link to={`blog`} className="button">All Articles</Link></li>
                        </ul>
                    </section>


                </div>

            </Layout>
        )
    }
}

export default HomeIndex