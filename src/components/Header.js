import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1><br /><strong>Angela Hollings</strong><br /> 
                    A lover of personal development and empowering others to excel at what they love doing</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
