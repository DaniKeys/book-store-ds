package com.modusoftware.pruebaTecnica2.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.modusoftware.pruebaTecnica2.business.ILibroService;
import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.business.mapper.Mapeo;
import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;
import com.modusoftware.pruebaTecnica2.persistent.repository.LibroRepository;

@SpringBootTest
public class LibroServiceTests {
	
	
	@Autowired
	private LibroRepository libroRep;

	@Autowired
	private ILibroService libroServ;
	
	@Autowired
	private Mapeo mapeo;
	
	
	@Test
	void getAll_capacidad_1_test() {

		List<LibroEntity> allBooks = this.libroRep.findAll();

		assertEquals(mapeo.toLibroDTOList(allBooks), this.libroServ.getAllOrderByNameAsc());

	}
	
	

	@Test
	void getByBookName_capacidad_2_test() {

		List<LibroEntity> ent = this.libroRep.findByNombre("Poema de Gilgamesh");
		
		assertEquals(mapeo.toLibroDTOList(ent), this.libroServ.findByNameOrderByNameAsc("Poema de Gilgamesh"));

	}
	
	@Test
	void notCreateBook_for_duplicate_ISBN_capacidad_3__test() {
		
		List<LibroEntity> isbn = this.libroRep.findByISBN("H4325");
		LibroDTO dto = new LibroDTO();
		//Como el ISBN es un valor unico, solo obtengo el ISBN del elemento 1 de mi lista
		dto.setISBN(isbn.get(0).getISBN());
		
		LibroDTO dtoValid = new LibroDTO();
		dto.setId(null);

		
		assertEquals(dtoValid, this.libroServ.saveBook(dto));

	}
	
	@Test
	void changes_update_stock_book_capacidad_4__test() {
		
		Integer id = 4;
		Integer cantBuy = 1;
		Optional<LibroEntity> entOpt = this.libroRep.findById(4);
		LibroEntity ent = entOpt.get();
		Integer stock = ent.getStock() - cantBuy;
		ent.setStock(stock);
		
		assertEquals(ent, this.libroServ.updateStockBook(id, cantBuy));

		
	}

	
	@Test
	void not_content_add_stock_book_capacidad_5_test() {
		
		LibroDTO dto = new LibroDTO();
		dto.setStock(0);
		
		LibroDTO noContent = new LibroDTO();
		noContent.setId(null);
		
		assertEquals(noContent, this.libroServ.addStockBook(1, dto));
		
	}
	

}
