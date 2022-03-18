package com.dtravelsultimaentrega.dtravels.api.entities;

import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table 
public class Cadastrocliente {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_cliente;
	private String Nome;
	private String Sobrenome;
	private Long cpf;
	private Long Telefone;
	private String Email;
	private String Endereco;
	private String Bairro;
	private String Cidade;
	private Long cep;
	
	
	public Cadastrocliente() {
		
	}
	@OneToMany(mappedBy= "cadastrocliente")
	private List <Reservas> reservas;

	public List<Reservas> getReservas() {
		return reservas;
	}

	public void setReservas(List<Reservas> reservas) {
		this.reservas = reservas;
	}


	public Long getId_cliente() {
		return id_cliente;
	}


	public void setId_cliente(Long id_cliente) {
		this.id_cliente = id_cliente;
	}


	public String getNome() {
		return Nome;
	}


	public void setNome(String nome) {
		Nome = nome;
	}


	public String getSobrenome() {
		return Sobrenome;
	}


	public void setSobrenome(String sobrenome) {
		Sobrenome = sobrenome;
	}


	public Long getCpf() {
		return cpf;
	}


	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}


	public Long getTelefone() {
		return Telefone;
	}


	public void setTelefone(Long telefone) {
		Telefone = telefone;
	}


	public String getEmail() {
		return Email;
	}


	public void setEmail(String email) {
		Email = email;
	}


	public String getEndereco() {
		return Endereco;
	}


	public void setEndereco(String endereco) {
		Endereco = endereco;
	}


	public String getBairro() {
		return Bairro;
	}


	public void setBairro(String bairro) {
		Bairro = bairro;
	}


	public String getCidade() {
		return Cidade;
	}


	public void setCidade(String cidade) {
		Cidade = cidade;
	}


	public Long getCep() {
		return cep;
	}


	public void setCep(Long cep) {
		this.cep = cep;
	}


	public Cadastrocliente(Long id_cliente, String nome, String sobrenome, Long cpf, Long telefone, String email,
			String endereco, String bairro, String cidade, Long cep) {
		super();
		this.id_cliente = id_cliente;
		Nome = nome;
		Sobrenome = sobrenome;
		this.cpf = cpf;
		Telefone = telefone;
		Email = email;
		Endereco = endereco;
		Bairro = bairro;
		Cidade = cidade;
		this.cep = cep;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id_cliente);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cadastrocliente other = (Cadastrocliente) obj;
		return Objects.equals(id_cliente, other.id_cliente);
	}


}