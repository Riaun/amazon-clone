import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer' onClick={() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}>
            <div className='footer__backToTop'>
                Back To Top
            </div>
            <div className='footer__details'>
                <div className='footer__topic'>
                    <h3>Get to Know Us</h3>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Abut Amazon</p>
                    <p>Sustainability</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Tours</p>
                </div>
                <div className='footer__topic'>
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell on Amazon Business</p>
                    <p>Sell your apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise your Products</p>
                    <p>Self-Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                    <p>› See More Make Money <br /> with Us</p>
                </div>
                <div className='footer__topic'>
                    <h3>Amazon Payment Products</h3>
                    <p>Amazon Business Card</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                </div>
                <div className='footer__topic'>
                    <h3>Let Us help You</h3>
                    <p>Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Returns & Replacements</p>
                    <p>Manage Your Content and Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
