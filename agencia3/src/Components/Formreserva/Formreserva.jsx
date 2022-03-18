import '../../Components/Formreserva/Formreserva.css';
import api from '../../api';
import React, { useRef } from 'react';

const Formreserva = () => {
  const nomeReservas = useRef()
  const sobrenomeReservas = useRef()
  const nomedopacoteReservas = useRef()
  const numero_diariasReservas = useRef()
  const dataida_diamesanoReservas = useRef()
  const datavolta_diamesanoReservas = useRef()

  function enviarDados(event) {
    event.preventDefault()
    console.log(nomeReservas.current.value)
    api.post("/reservas/", {
      nome: nomeReservas.current.value,
      sobrenome: sobrenomeReservas.current.value,
      nomedopacote: nomedopacoteReservas.current.value,
      numero_diarias: numero_diariasReservas.current.value,
      dataida_diamesano: dataida_diamesanoReservas.current.value,
      datavolta_diamesano: datavolta_diamesanoReservas.current.value,
    }).then((res) => console.log(res)).catch((err) => console.log(err))
  }
  return (
    <div>
      <div className='container-reserva'>
        <form onSubmit={enviarDados}>
          <div className="row">
            <div className="form-group col-md-6">
            <label >Nome</label>
              <input type="text" className="form-control" ref={nomeReservas} placeholder="Digite aqui seu nome..." />
            </div>
            <div className="form-group col-md-6">
            <label >Sobrenome</label>
              <input type="text" className="form-control" ref={sobrenomeReservas} placeholder="Sobrenome" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
            <label >Nome do Pacote</label>
              <input type="text" className="form-control" ref={nomedopacoteReservas} placeholder="Ex:Araruama Adventures" />
            </div>
            <div className="form-group col-md-6">
            <label >Número de diárias</label>
              <input type="text" className="form-control" ref={numero_diariasReservas} placeholder="Ex:4 ou 5" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
            <label>Data de ida</label>
              <input type="text" className="form-control" ref={dataida_diamesanoReservas} placeholder=" Digite diamêsano sem espaços. Ex: 12022022" />
            </div>
            <div className="form-group col-md-6">
            <label>Data de volta</label>
              <input type="text" className="form-control" ref={datavolta_diamesanoReservas} placeholder="Data de volta.Digite diamêsano sem espaços. Ex: 17022022" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Enviar!</button>
        </form>
      </div>
    </div>
  );
}

export default Formreserva;