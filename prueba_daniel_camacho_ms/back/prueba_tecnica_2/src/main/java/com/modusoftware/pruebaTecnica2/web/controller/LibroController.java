package com.modusoftware.pruebaTecnica2.web.controller;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;
import java.util.NoSuchElementException;

import javax.persistence.EntityNotFoundException;

import org.hamcrest.core.IsNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.webjars.NotFoundException;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.modusoftware.pruebaTecnica2.business.ILibroService;
import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTO;
import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;


import lombok.Getter;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/book")
@Log4j2
public class LibroController {

	@Autowired
	private ILibroService libroService;

	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<List<LibroDTO>> getAll() {
		try {
			List<LibroDTO> getAllBooks = this.libroService.getAllOrderByNameAsc();

			return new ResponseEntity<List<LibroDTO>>(getAllBooks, HttpStatus.OK);
		} catch (Exception e) {
			log.error("Error en getAll", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE }, 
			path = "/id/{id}")
	public ResponseEntity<LibroDTO> getBookById(@PathVariable("id") Integer id) {
		try {

			LibroDTO dto = this.libroService.buscarPorId(id);

			return new ResponseEntity<LibroDTO>(dto, HttpStatus.OK);

		} catch (NumberFormatException e) {
			log.error("Caracteres no validos " + id);

			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (NotFoundException e) {
			log.error("No existe un libro con id: " + id);

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		}

	}

	
	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE }, 
				path = "/nombre/{nombre_libro}")
	public ResponseEntity<List<LibroDTO>> findByBookName( @PathVariable("nombre_libro") String nameBook) {
		try {
			List<LibroDTO> findByName = this.libroService.findByNameOrderByNameAsc(nameBook);

			if (findByName.isEmpty()) {
				log.error("No existe un libro con nombre " + nameBook);

				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<LibroDTO>>(findByName, HttpStatus.OK);

		} catch (Exception e) {
			log.error("Error en findByBookName", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	

	@PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<LibroDTO> createBook(@RequestBody LibroDTO dto) {
		try {

			LibroDTO dtoId = this.libroService.saveBook(dto);


			if (dtoId.getId() == null) {

				log.error("Duplicate ISBN this property is UNIQUE or");
				log.error("All Ready ID exist");
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			} 
			

			return new ResponseEntity<LibroDTO>(dtoId, HttpStatus.CREATED);
		} catch (IllegalArgumentException ie) {
			log.warn("Caracteres no validos", ie);

			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			log.error("Error en createBook", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	
	@PutMapping(consumes = { MediaType.APPLICATION_JSON_VALUE }, path = "/{id_book}")
	public ResponseEntity<LibroDTO> updateStock( 
												@PathVariable("id_book") Integer id,
												@RequestBody LibroDTO dto) {
		try {
			
			LibroDTO dtoStock = this.libroService.addStockBook(id, dto);
			if (dtoStock.getId() == null) {
				log.warn("Stock sin cambios");
				return new ResponseEntity<>(dtoStock, HttpStatus.NOT_MODIFIED);
			}
			
			if(dto.getStock() == null || dto.getStock() == 0 || dto.getValor() == 0) {
				return new ResponseEntity<>(dtoStock, HttpStatus.NOT_ACCEPTABLE );
			}
			return new ResponseEntity<LibroDTO>(dtoStock, HttpStatus.OK);

		} catch (NoSuchElementException ex) {
			log.warn("ID no encontrado", ex);

			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}catch (NotFoundException ex) {
			log.warn("ID nulo o vacio", ex);

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}catch (IllegalArgumentException ie) {
			log.warn("Caracteres no validos", ie);

			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

		} catch (Exception e) {
			log.error("Error en updateStock", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
