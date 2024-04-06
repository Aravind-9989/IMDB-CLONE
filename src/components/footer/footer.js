import { Link } from "react-router-dom";
import "./footer.css";
import footerBg from "../footer/footer-bg.jpg"; // Import the background image
//import logo from "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"; // Import your logo

function Footer() {
  return (
    <div className='footer' style={{backgroundImage:`url(${footerBg})`}}> {/* Use footerBg as the background image */}
      <div className='footer__content'>
        <div className="footer__content__logo">
          <div className="logo">
            
            
            
            <Link to="/">IMDB</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to="/">You must Watch</Link>
            <Link to="/">Recent Releases</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
