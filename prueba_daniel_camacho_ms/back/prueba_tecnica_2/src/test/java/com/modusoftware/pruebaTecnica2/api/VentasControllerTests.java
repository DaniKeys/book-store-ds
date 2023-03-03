package com.modusoftware.pruebaTecnica2.api;

import org.apache.commons.lang3.RandomStringUtils;
import org.json.simple.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.TestPropertySource;

import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOReturn;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

@SpringBootTest
@TestPropertySource("classpath:test.properties")
public class VentasControllerTests {

	@Value("${allVentas}")
	private String allVentas;

	@Value("${buyBook}")
	private String buyBook;

	@Test
	public void getAllSalesTest() {

		RestAssured
			.given()
			.log().all()
			.and()
			.when()
			.get(allVentas)
			.then()
			.log().all()
			.contentType(ContentType.JSON)
			.statusCode(HttpStatus.OK.value());

	}

	@Test
	public void buyBookTest() {

		JSONObject request = new JSONObject();
		request.put("id", 3);
		request.put("cantidad", 1);

		RestAssured
			.given()
			.log().all() 
			.and()
			.contentType(ContentType.JSON)
			.body(request)
			.when()
			.post(buyBook)
			.then()
			.log().all() 
			.contentType(ContentType.JSON)
			.statusCode(HttpStatus.OK.value());

	}

	
}