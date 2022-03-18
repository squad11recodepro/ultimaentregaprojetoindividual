package com.dtravelsultimaentrega.dtravels.api.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table
public class Reservas {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_reserva;
	private String Nome;
	private String Sobrenome;
	private String Nomedopacote;
	private Long Numero_diarias;
	private Long Dataida_diamesano;
	private Long Datavolta_diamesano;

	public Reservas() {
		
	}
	@ManyToOne
	@JoinColumn(name="id_cliente")
	private Cadastrocliente cadastrocliente;

	public Reservas(Long id_reserva, String nome, String sobrenome, String nomedopacote,
			Long numero_diarias, Long dataida_diamesano, Long datavolta_diamesano, Cadastrocliente cadastrocliente) {
		super();
		this.id_reserva = id_reserva;
		Nome = nome;
		Sobrenome = sobrenome;
		Nomedopacote = nomedopacote;
		Numero_diarias = numero_diarias;
		Dataida_diamesano = dataida_diamesano;
		Datavolta_diamesano = datavolta_diamesano;
		this.cadastrocliente = cadastrocliente;
	}

	public Long getId_reserva() {
		return id_reserva;
	}

	public void setId_reserva(Long id_reserva) {
		this.id_reserva = id_reserva;
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

	public String getNomedopacote() {
		return Nomedopacote;
	}

	public void setNomedopacote(String nomedopacote) {
		Nomedopacote = nomedopacote;
	}

	public Long getNumero_diarias() {
		return Numero_diarias;
	}

	public void setNumero_diarias(Long numero_diarias) {
		Numero_diarias = numero_diarias;
	}

	public Long getDataida_diamesano() {
		return Dataida_diamesano;
	}

	public void setDataida_diamesano(Long dataida_diamesano) {
		Dataida_diamesano = dataida_diamesano;
	}

	public Long getDatavolta_diamesano() {
		return Datavolta_diamesano;
	}

	public void setDatavolta_diamesano(Long datavolta_diamesano) {
		Datavolta_diamesano = datavolta_diamesano;
	}

	@Override
	public int hashCode() {
		return Objects.hash( id_reserva);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reservas other = (Reservas) obj;
		return  Objects.equals(id_reserva, other.id_reserva);
	}

	public Cadastrocliente getCadastrocliente() {
		return cadastrocliente;
	}

	public void setCadastrocliente(Cadastrocliente cadastrocliente) {
		this.cadastrocliente = cadastrocliente;
	}

	public Reservas(Long id_reserva) {
		super();
		this.id_reserva = id_reserva;
	}
	
}
