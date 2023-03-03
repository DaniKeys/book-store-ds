package com.modusoftware.pruebaTecnica2.api;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.awt.PageAttributes.MediaType;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.apache.commons.lang3.RandomStringUtils;
import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import com.modusoftware.pruebaTecnica2.business.ILibroService;
import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.business.impl.LibroServiceImpl;
import com.modusoftware.pruebaTecnica2.business.mapper.Mapeo;
import com.modusoftware.pruebaTecnica2.web.controller.LibroController;
import com.modusoftware.pruebaTecnica2.web.controller.VentaController;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;
import com.modusoftware.pruebaTecnica2.persistent.repository.LibroRepository;


@SpringBootTest
@TestPropertySource("classpath:test.properties")
public class LibroControllerTests {
	

	@Value("${url.main}")
	private String main;	
	
	@Value("${findById}")
	private String findById;	
	
	@Value("${findByName}")
	private String findByName;	
	
	
	@Value("${updateBook}")
	private String updateBook;	
	
	@Value("${id}")
	private int id;	
	
	
	@Test
	public void getAllTest() {
		
		RestAssured
				.given()
				.log().all()
				.and()
				.when()
				.get(main)
				.then()
				.log().all()
				.contentType(ContentType.JSON)
				.statusCode(HttpStatus.OK.value());
	}
	
	
	@Test
	public void getByIdTest() {
		
		RestAssured
				.given()
				.log().all()
				.and()
				.when()
				.get(findById + id)
				.then()
				.log().all()
				.contentType(ContentType.JSON)
				.statusCode(HttpStatus.OK.value());
	}
	
	
	
	@Test
	public void getAllByBookNameTest() {
		
		RestAssured
				.given()
				.log().all()
				.and()
				.when()
				.get(findByName + "Poema de Gilgamesh")
				.then()
				.log().all()
				.contentType(ContentType.JSON)
				.statusCode(HttpStatus.OK.value());
	}

	
	@Test
	public void saveBookTest() {
		
		LibroDTO dto = getLibroDTO();
		
		RestAssured
			.given()
			.log().all() 
			.and()
			.contentType(ContentType.JSON)
			.body(dto)
			.when()
			.post(main)
			.then()
			.log().all() 
			.contentType(ContentType.JSON)
			.statusCode(HttpStatus.CREATED.value());
	}
	
	

	@Test
	public void updateBookTest() {
		
		LibroDTO dto = new LibroDTO();
		Random rd = new Random();
		dto.setStock(rd.nextInt(50));
		dto.setValor(54000);
		RestAssured
			.given()
			.log().all() 
			.and()
			.contentType(ContentType.JSON)
			.body(dto)
			.when()
			.put(updateBook+id)
			.then()
			.log().all()
			.contentType(ContentType.JSON)
			.statusCode(HttpStatus.OK.value());
	}
	
	private LibroDTO getLibroDTO() {
		

		String isbn = RandomStringUtils.random(6,true,true) ;
		LibroDTO dto = new LibroDTO();
		dto.setAutor("Jairo Bermudez");
		dto.setEditorial("Mundo");
		dto.setNombre("Libro prueba rest assured");
		dto.setStock(22);
		dto.setValor(23000);
		dto.setISBN(isbn);
		dto.setNumeroPag(120);
		dto.setTematica("Terror");
		
		return dto;
	}
	


	
		
	
	
}
