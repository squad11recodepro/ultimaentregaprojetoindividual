import Praia0card from '../../Assets/Images/Praia0card.jpg';
import Praia1card from '../../Assets/Images/Praia1card.jpg';
import Praia2card from '../../Assets/Images/Praia2card.jpg';
import Praia3card from '../../Assets/Images/Praia3card.jpg';
import Praia4card from '../../Assets/Images/Praia4card.jpg';
import Praia7card from '../../Assets/Images/Praia7card.jpg';
import '../../Components/Card-destinos/Card-destinos.css';

function Carddestinos() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    <img src={Praia0card} className="card-img-top" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">Araruama Adventures</h5>
        <p className="card-text">Aproveite Araruama com todo arsenal de aventuras que esse lugar incrível pode te oferecer! Dentro desse pacote oferecemos 5 diárias com todos os esportes marítimos: aulas de surf, bodyboarding, stand up paddle e kitesurf! O pacote inclui aulas para você e sua família e as melhores praias no nosso roteiro.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$4.000.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Praia1card} className="card-img-top" alt="..."/>      
    <div className="card-body">
        <h5 className="card-title">Ecoturismo na Barra</h5>
        <p className="card-text">A Barrinha continua sendo o point fundamental da prática do kitesurf! Nesse pacote temos 3 diárias no melhor hotel da Barra, à beira da praia, incluindo Trilhas no Morro da Pedra Branca e Telégrafo! Estão incluídas aulas de kitesurf e passeios de barco pela Ilha da Gigóia que dá acesso aos melhores restaurantes da cidade.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$1.000.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Praia2card} className="card-img-top" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">Delícias de Florianópolis</h5>
        <p className="card-text">As praias paradisíacas de Floripa e a night da cidade!Oferecemos tour pelas praias da região, além de todo o transporte.Estão incluídos passeios de saveiro pelas praias vizinhas.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$5.000. </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Praia3card} className="card-img-top" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">Resort Búzios</h5>
        <p className="card-text">Aproveite Búzios com todo luxo e pompa. Além de 2 diárias em Cruzeiro pelas praias da Azeda e Azedinha.Desfrute de um passeio exclusivo pelas Ruas das Pedras, com acesso ao melhor da comida e da night da região.O pacote inclui descontos exclusivos junto às empresas parceiras da dtravels.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$1.500.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Praia4card} className="card-img-top" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">Rio Adventures</h5>
        <p className="card-text">O Rio de Janeiro como você nunca viu! Com vista para a Zona Sul da cidade.Dentro desse pacote oferecemos 5 diárias com todos os esportes marítimos: aulas de surf, bodyboarding, stand up paddle e kitesurf! O pacote inclui aulas para você e sua família e as melhores praias no nosso roteiro.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$2.600. </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={Praia7card} className="card-img-top" alt="..."/>      
      <div className="card-body">
        <h5 className="card-title">Ubatuba Mergulhos</h5>
        <p className="card-text">Mergulho é com a gente mesmo! Nesse pacote oferecemos 5 diárias no melhor hotel de Ubatuba na frenta da praia.Incluídas duas saídas de mergulho, com todo o equipamento e instrutor por nossa conta, além da prática de scuba diving à vontade.O pacote inclui as praias mais paradisíacas, para você aproveitar tudo o que tem direito.Não perca essa oportunidade, faça o cadastro e reserve essa experiência! A partir de R$4.000.</p>
      </div>
    </div>
  </div>
</div>
  );
}
export default Carddestinos;