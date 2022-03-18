import React,{useRef} from "react";
import { Modal, Button}from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "../../api";
import { useEffect, useState } from 'react'


function ModalUpdate(props){
    const nomeCadastro = useRef()
    const sobrenomeCadastro = useRef()
    const cpfCadastro = useRef()
    const telefoneCadastro = useRef()
    const emailCadastro = useRef()
    const enderecoCadastro = useRef()
    const bairroCadastro= useRef()
    const cidadeCadastro = useRef()
    const cepCadastro = useRef()

    const [cadastrocliente, setCadastrocliente] = useState([])
    useEffect(() => {
        api.get('/cadastrocliente')
            .then((res) => {
                setCadastrocliente(res.data)
                console.log(res.data)
            })
            .catch((erro) => console.log(erro))
    }, [])

    function updateCadastrocliente(event) {
        event.preventDefault()
        api.put(`/cadastrocliente/`,{
            id: props.produto.id,
            nome: nomeCadastro.current.value,
            sobrenome: sobrenomeCadastro.current.value,
            cpf: cpfCadastro.current.value,
            telefone: telefoneCadastro.current.value,
            email: emailCadastro.current.value,
            endereco: enderecoCadastro.current.value,
            bairro: bairroCadastro.current.value,
            cidade: cidadeCadastro.current.value,
            cep: cepCadastro.current.value
        }).then(() => api.get("/cadastrocliente").then((res) => setCadastrocliente(res.data))
                .catch((err) => console.log(err))).catch((err) => console.log(err))
    }
    
    return(
        <Modal show={props.show} onHide={props.onClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{props.cadastrocliente.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={updateCadastrocliente}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={nomeCadastro} defaultValue={props.cadastrocliente.nome}  placeholder="Digite aqui seu nome..." />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={sobrenomeCadastro} defaultValue={props.cadastrocliente.sobrenome}  placeholder="Sobrenome" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={cpfCadastro} defaultValue={props.cadastrocliente.cpf} placeholder="CPF, números sem pontos" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={telefoneCadastro} defaultValue={props.cadastrocliente.telefone} placeholder="Telefone DDDxxxxx sem () ou -" />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" ref={emailCadastro} defaultValue={props.cadastrocliente.email}  placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={enderecoCadastro} defaultValue={props.cadastrocliente.endereco} placeholder="Endereço completo" />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={bairroCadastro} defaultValue={props.cadastrocliente.bairro} placeholder="Bairro"  />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" ref={cidadeCadastro} defaultValue={props.cadastrocliente.cidade} placeholder="Cidade"   />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" ref={cepCadastro} defaultValue={props.cadastrocliente.cep} placeholder="CEP"  />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar!</button>
                </form>
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose()}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
    );
}

export default ModalUpdate;