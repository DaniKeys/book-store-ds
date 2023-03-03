package com.modusoftware.pruebaTecnica2.web.controller;

import java.util.List;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.modusoftware.pruebaTecnica2.business.ILibroService;
import com.modusoftware.pruebaTecnica2.business.IVentaService;
import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOGetAll;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOReturn;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/book")
@Log4j2
public class VentaController {

	@Autowired
	private IVentaService ventaServ;

	
	@PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE }, 
				 produces = {MediaType.APPLICATION_JSON_VALUE }, 
				 path = "/buy")
	public ResponseEntity<VentaDTOReturn> buyBook(@RequestBody VentaDTO dto) {

		try {
			VentaDTOReturn result = this.ventaServ.registroVentas(dto);


			if (result.getLibroId() == null) {
				log.warn("No hay esa cantidad requerida");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			

			return new ResponseEntity<VentaDTOReturn>(result, HttpStatus.OK);
		
		} catch (InvalidDataAccessApiUsageException ex) {
			log.warn("ID no encontrado", ex);
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);

		} catch (NoSuchElementException ex) {
			log.warn("ID no encontrado", ex);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		}catch (IndexOutOfBoundsException ex) {
			log.warn("Cantidad inferior a 1", ex);
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);

		} 
		catch (IllegalArgumentException ie) {
			log.warn("Caracteres no validos", ie);

			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			log.error("Error en ventaBook", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE },
			    path = "/allVentas")
	public ResponseEntity<List<VentaDTOGetAll>> getAll() {
		try {

			List<VentaDTOGetAll> getAllVentas = this.ventaServ.getAllVentas();

			return new ResponseEntity<List<VentaDTOGetAll>>(getAllVentas, HttpStatus.OK);
		} catch (Exception e) {
			log.error("Error en getAll", e);

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
