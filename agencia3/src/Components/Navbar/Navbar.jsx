import { Link } from 'react-router-dom';
import Logo9 from '../../Assets/Images/Logo9.png';
import '../Navbar/Navbar.css';
import React, {useState}from "react";


function Navbar() {
    const [clicked, setclicked] = useState(false)
    const handleClick=()=>{
        setclicked(!clicked);
    };

    return (
        <nav>
        <div className='logo'>
        <img className='logo-img' src={Logo9} />
    </div>
    <div className='menu-icon' onClick={handleClick}>
<i className={clicked? 'fas fa-times':'fa fa-bars'}></i>

    </div>
               <div>
                    <ul className={clicked?'menu-lista': 'menu-lista close'}>
                    <li><Link to="/"> <a> Home</a> </Link> </li>
                    <li><Link to="/Destinos"><a>Destinos</a></Link></li>
                    <li><Link to="/Promocoes"> <a>Promoções</a></Link></li>
                    <li><Link to="/Cadastroclientes"><a>Cadastro</a></Link></li>
                    <li><Link to="/Reservas"><a> Reservas</a></Link></li>
                    <li> <Link to="/Contato"><a>Contato</a></Link> </li>  
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;