package com.modusoftware.pruebaTecnica2.persistent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;

import java.util.List;


@Repository
public interface LibroRepository extends CrudRepository<LibroEntity, Integer> {

	@Query(nativeQuery = false, 
			value = "SELECT l "
			      + "FROM LibroEntity l "
			      + "ORDER BY l.nombre ASC ") 			
	 public List<LibroEntity> findAll();
	

 	public List<LibroEntity> findByNombreOrderByNombreAsc(String name);
 	
 	@Modifying
	@Query(nativeQuery = false,
			value = "UPDATE LibroEntity l "
					+ "SET l.stock = :stock "
					+ "WHERE l.id = :id ")
	public int actualizarStock(@Param("id") Integer id, @Param("stock") Integer stock); 
 	
 	public 	List<LibroEntity> findByISBN(String isbn);
 	
 	public List<LibroEntity> findByNombre(String name);
 	
	
	
	
}
