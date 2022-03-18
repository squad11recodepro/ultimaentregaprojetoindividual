package com.dtravelsultimaentrega.dtravels.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dtravelsultimaentrega.dtravels.api.entities.Reservas;

@Repository
public interface ReservasRepository extends JpaRepository<Reservas, Long> {

}