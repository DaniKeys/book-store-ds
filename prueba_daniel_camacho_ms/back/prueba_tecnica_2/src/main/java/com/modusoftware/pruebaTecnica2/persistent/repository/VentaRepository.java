package com.modusoftware.pruebaTecnica2.persistent.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;
import com.modusoftware.pruebaTecnica2.persistent.model.VentaEntity;

@Repository
public interface VentaRepository extends CrudRepository<VentaEntity, Integer>{
	
	@Query(nativeQuery = true, 
			value = "SELECT * "
			      + "FROM ventas  ")		
	 public List<VentaEntity> findAllVentas();
	
	


}
