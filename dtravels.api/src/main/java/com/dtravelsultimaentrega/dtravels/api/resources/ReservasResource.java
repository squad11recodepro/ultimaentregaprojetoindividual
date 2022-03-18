package com.dtravelsultimaentrega.dtravels.api.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dtravelsultimaentrega.dtravels.api.entities.Reservas;
import com.dtravelsultimaentrega.dtravels.api.services.ReservasService;

@RestController
@RequestMapping("/reservas")
@CrossOrigin (origins="*")
public class ReservasResource {
	@Autowired
	public ReservasService service;
		
	@GetMapping
	public List <Reservas> findAll(){
	return service.findAll();
	}
			
	@PostMapping (value="/")
	public ResponseEntity <Reservas> save(@RequestBody Reservas reservas){
	service.save(reservas);
	return ResponseEntity.ok().body(reservas);
	}


	@DeleteMapping(value="/{id_reservas}")
	public ResponseEntity<Reservas> delete(@PathVariable Long id_reservas){
	service.delete(id_reservas);
	Reservas reservas = service.getById(id_reservas);
	return ResponseEntity.ok().body(reservas);
	}

	@PutMapping(value = "/")
	public ResponseEntity<Reservas> update(@RequestBody Reservas reservas){
	service.save(reservas);
	return ResponseEntity.ok().body(reservas);
	}	
			
	}