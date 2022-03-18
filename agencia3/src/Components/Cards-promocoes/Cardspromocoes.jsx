import Praia6card from '../../Assets/Images/Praia6card.jpg';
import Praia7card from '../../Assets/Images/Praia7card.jpg';
import Praia8card from '../../Assets/Images/Praia8card.jpg';
import '../../Components/Cards-promocoes/Cardspromocoes.css';

function Cardspromocoes() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    <img src={Praia8card} className="card-img-top" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">Resort Búzios de R$1500 por R$750! </h5>
        <p className="card-text">Aproveite Búzios com todo luxo e pompa. Além de 2 diárias em Cruzeiro pelas praias da Azeda e Azedinha.Desfrute de um passeio exclusivo pelas Ruas das Pedras, com acesso ao melhor da comida e da night da região.O pacote inclui descontos exclusivos junto às empresas parceiras da dtravels.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$1.500.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Praia7card} className="card-img-top" alt="..."/>      
    <div className="card-body">
        <h5 className="card-title">Rio Adventures de R$2.600 por R$1.500!</h5>
        <p className="card-text">O Rio de Janeiro como você nunca viu! Com vista para a Zona Sul da cidade. Dentro desse pacote oferecemos 5 diárias com todos os esportes marítimos: aulas de surf, bodyboarding, stand up paddle e kitesurf!O pacote inclui aulas para você e sua família e as melhores praias no nosso roteiro.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$2.600.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Praia6card} className="card-img-top" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">Ubatuba Mergulhos de R$4.000 por R$3.500!</h5>
        <p className="card-text"> Mergulho é com a gente mesmo! Nesse pacote oferecemos 5 diárias no melhor hotel de Ubatuba na frenta da praia.Incluídas duas saídas de mergulho, com todo o equipamento e instrutor por nossa conta, além da prática de scuba diving à vontade. O pacote inclui as praias mais paradisíacas, para você aproveitar tudo o que tem direito.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$4.000.</p>
      </div>
    </div>
  </div>
</div>
  );
}
export default Cardspromocoes;