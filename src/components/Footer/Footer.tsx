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

                        About Us

                    </li>
                    <li>

                        Contact

                    </li>
                    <li>

                        Privacy Policy

                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
