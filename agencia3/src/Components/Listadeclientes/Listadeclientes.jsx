import '../../Components/Listadeclientes/Listadeclientes.css';
import api from '../../api';
import { useEffect, useState } from 'react'
import ModalUpdate from '../Modal/Modal';

const Listadeclientes = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (cadastrocliente) => {
        setShow(true);
        setCadastroclienteUpdate(cadastrocliente)
    }

    const [cadastrocliente, setCadastrocliente] = useState([])
    useEffect(() => {
        api.get('/cadastrocliente')
            .then((res) => {
                setCadastrocliente(res.data)
                console.log(res.data)
            })
            .catch((erro) => console.log(erro))
    }, [])

  
    const [cadastroclienteUpdate, setCadastroclienteUpdate] = useState([])
    useEffect(() => {
        api.get('/cadastrocliente')
            .then((res) => {
                setCadastrocliente(res.data)
                console.log(res.data)
            })
            .catch((erro) => console.log(erro))
    }, [])
    
    
    function deletar(id) {
        console.log(id)
        api.delete(`/cadastrocliente/${id}`)
            .then(() => api.get("/cadastrocliente").then((res) => setCadastrocliente(res.data))
                .catch((err) => console.log(err))
            )}


    return ( 
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th ><h5>Nome</h5> </th>
                    <th ><h5>Sobrenome</h5> </th>
                    <th ><h5>CPF</h5> </th>
                    <th ><h5>Telefone</h5> </th>
                    <th ><h5>Endereço</h5> </th>
                    <th ><h5>Bairro</h5> </th>
                    <th ><h5>Cidade</h5> </th>
                    <th ><h5>CEP</h5> </th>
                    <th ><h5>Ações</h5> </th>
                </tr>
            </thead>
            <tbody>
                {cadastrocliente.map((cadastrocliente) => (
                     <tr key={cadastrocliente.id_cliente}>
                     <td> {cadastrocliente.nome} </td>
                     <td> {cadastrocliente.sobrenome} </td>
                     <td> {cadastrocliente.cpf} </td>
                     <td> {cadastrocliente.telefone} </td>
                     <td> {cadastrocliente.email} </td>
                     <td> {cadastrocliente.endereco} </td>
                     <td> {cadastrocliente.bairro} </td>
                     <td> {cadastrocliente.cidade} </td>
                     <td> {cadastrocliente.cep} </td>
                     <div className='row'>
                     <button className="btn btn-primary" onClick={() => deletar(cadastrocliente.id_cliente)}> delete</button>
                     <button className="btn btn-primary" onClick={()=>handleShow(cadastrocliente)}> update</button> 
                     </div>
                      </tr>  
                )) }
                {show?<ModalUpdate show={show} handleClose={handleClose} cadastrocliente={cadastroclienteUpdate}/>:<></>}
            </tbody>
        </table>
        
    );
}


export default Listadeclientes;