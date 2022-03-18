import '../Btotaoofertas/Botaoofertas.css';
import { Link } from 'react-router-dom';

function Botaoofertas() {
    return (
        <div className='divbotao'>
         <Link to="/Promocoes"><a className="btn btn-primary btn-lg"> Ofertas Excusivas!</a></Link> 
        </div>
    );
}
export default Botaoofertas;
