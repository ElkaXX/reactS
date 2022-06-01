import salameche from '../assets/salameche.png';
import '../styles/Header.css';


function Header(){
    return (
        <header>
            <h1>Framework-front initiation</h1>
            <img src={salameche}/>
        </header>
    )
}

export default Header;