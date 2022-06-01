import { Link } from "react-router-dom";
import bulbizarre from '../assets/bulbizarre.png';
import '../styles/Footer.css';

function Footer(){
    return(
      <footer>
          <p>Copyright:</p>
          <img src={bulbizarre}/>
          <Link to="/testChemin"Redirection></Link>
      </footer>
    )
}

export default Footer;
