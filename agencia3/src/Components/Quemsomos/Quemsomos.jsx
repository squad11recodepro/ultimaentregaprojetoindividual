import '../Quemsomos/Quemsomos.css';
import Amigos from '../../Assets/Images/Amigos.jpg'

function Quemsomos() {
  return (
    <div className='container-quemsomos'>
    <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-2">
      <img src={Amigos}className="card-img rounded-circle" alt="..."/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">Quem somos</h5>
        <p className="card-text">Somos uma agência de turismo criada por surfistas profissionais voltada para o segmento praiano, repleta de good vibes e sediada no Rio de Janeiro!
                A ideia nasce da experiência de dois melhores amigos que dese a adolescência curtiam pegar a estrada e cair no mar.
                 Dito isso, prepare as malas e pé na estrada. 
                 Aloha!</p>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
export default Quemsomos;