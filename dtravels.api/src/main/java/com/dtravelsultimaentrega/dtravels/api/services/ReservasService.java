package com.dtravelsultimaentrega.dtravels.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dtravelsultimaentrega.dtravels.api.entities.Reservas;
import com.dtravelsultimaentrega.dtravels.api.repositories.ReservasRepository;

@Service
public class ReservasService {
	@Autowired
	private ReservasRepository repository;

@Transactional(readOnly= true)
	public List <Reservas> findAll(){
		List<Reservas> resultado = repository.findAll();
		return resultado;	
	}
public Reservas getById(Long id_reservas){
	 Optional<Reservas> reservas = repository.findById(id_reservas);
	 if(reservas.isPresent()) {
		 return reservas.get();
	 }else {
		 return null;
	 }
}

public void save(Reservas reservas) {
	try {
repository.save(reservas);
	}catch (Exception ex) {
	throw ex;
	}
}

public void delete(Long id_reservas) {
Optional<Reservas> reservas = repository.findById(id_reservas);
if (reservas.isPresent()) {
	repository.delete(reservas.get());
	System.out.println(reservas.get().getNome());	
}else {
	System.out.println("Essa reserva não existe");
	}
}

public void update(Reservas reservas) {
	try {
		repository.save(reservas);
	}catch(Exception ex) {
		throw ex;
	}
}
	}
