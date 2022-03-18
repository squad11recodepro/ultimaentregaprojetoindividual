import Praia7card from '../../Assets/Images/Praia7card.jpg';
import Praia8card from '../../Assets/Images/Praia8card.jpg';
import Praia6card from '../../Assets/Images/Praia6card.jpg';
import '../Cards/Cards.css';

function Cards() {
    return (
        <section className="fundo-cards">
            <div className="container">
                <div className="titulo">
                    <h1> Nossos destinos </h1>
                    <p> Conheça lugares incríveis por um preço que cabe no seu bolso! </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center">
                                <img src={Praia7card} alt="#" className="card-img-top"></img>
                                <div className="card-body">
                                    <h5 className="card-title">RESORT IPIOCA(AL) </h5>
                                    <p className="card-text">Bem vindo(a) à Maragogi, o Caribe brasileiro, um dos melhores destinos do Nordeste. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <img src={Praia8card} alt="#" className="card-img-top"></img>
                                <div className="card-body">
                                    <h5 className="card-title">RESORT PIPA(RN) </h5>
                                    <p className="card-text">Uma das mais belas praias do país! Nosso pacote inclui tour gastronômico, passeios marítimos e transfers privados. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <img src={Praia6card} alt="#" className="card-img-top"></img>
                                <div className="card-body">
                                    <h5 className="card-title">RESORT ILHA GRANDE(RJ) </h5>
                                    <p className="card-text">Uma viagem para os amantes da natureza! Trilhas e aventuras para toda a família. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
export default Cards;