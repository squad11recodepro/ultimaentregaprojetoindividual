import '../../Components/Formcadastro/Formcadastro.css';
import api from '../../api';
import React, { useRef } from 'react';

const Formcadastro = () => {
    const nomeCadastro = useRef()
    const sobrenomeCadastro = useRef()
    const cpfCadastro = useRef()
    const telefoneCadastro = useRef()
    const emailCadastro = useRef()
    const enderecoCadastro = useRef()
    const bairroCadastro= useRef()
    const cidadeCadastro = useRef()
    const cepCadastro = useRef()

    function enviarDados(event) {
        event.preventDefault()
        console.log(nomeCadastro.current.value)
        api.post("/cadastrocliente/", {
            nome: nomeCadastro.current.value,
            sobrenome: sobrenomeCadastro.current.value,
            cpf: cpfCadastro.current.value,
            telefone: telefoneCadastro.current.value,
            email: emailCadastro.current.value,
            endereco: enderecoCadastro.current.value,
            bairro: bairroCadastro.current.value,
            cidade: cidadeCadastro.current.value,
            cep: cepCadastro.current.value
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    }
    return (
        <div>
            <div className='container-cadastro'>
                <form onSubmit={enviarDados}>
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label >Nome</label>
                            <input type="text" className="form-control" ref={nomeCadastro}  placeholder="Digite aqui seu nome..." />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Sobrenome</label>
                            <input type="text" className="form-control" ref={sobrenomeCadastro}  placeholder="Sobrenome" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label >CPF</label>
                            <input type="text" className="form-control" ref={cpfCadastro}  placeholder="Só números sem pontos" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Telefone</label>
                            <input type="text" className="form-control" ref={telefoneCadastro}  placeholder="DDDxxxxx sem () ou -" />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label >Email</label>
                        <input type="email" className="form-control" ref={emailCadastro}  placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Endereço completo</label>
                        <input type="text" className="form-control" ref={enderecoCadastro}  placeholder="Rua, nºx, apt y.." />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label >Bairro</label>
                            <input type="text" className="form-control" ref={bairroCadastro}  />
                        </div>
                        <div className="form-group col-md-4">
                            <label >Cidade</label>
                            <input type="text" className="form-control" ref={cidadeCadastro}  />
                        </div>
                        <div className="form-group col-md-2">
                            <label>CEP</label>
                            <input type="text" className="form-control" ref={cepCadastro}  />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar!</button>
                </form>
            </div>
        </div>

    );
}
export default Formcadastro;
