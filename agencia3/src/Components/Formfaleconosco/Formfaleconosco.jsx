import '../../Components/Formfaleconosco/Formfaleconosco.css';

function Formfaleconosco() {
    return (
        <form>
            <div className='container-contato'>
                <div>
                <h5>Entre em contato</h5>
                <h7>Estamos esperando a sua mensagem </h7>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Digite abaixo a sua mensagem!</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    );
}

export default Formfaleconosco;