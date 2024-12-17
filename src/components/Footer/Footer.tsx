import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='container'>
                <p className='text'>
                    Copyright © {currentYear} Anime JS by Supakorn.
                </p>
                <ul className='links'>
                    <li>
                        <a href="/about" className='links'>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className='links'>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/privacy" className='links'>
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
