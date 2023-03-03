package com.modusoftware.pruebaTecnica2.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import com.modusoftware.pruebaTecnica2.business.ILibroService;
import com.modusoftware.pruebaTecnica2.business.IVentaService;
import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOGetAll;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOReturn;
import com.modusoftware.pruebaTecnica2.business.mapper.Mapeo;
import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;
import com.modusoftware.pruebaTecnica2.persistent.model.VentaEntity;
import com.modusoftware.pruebaTecnica2.persistent.repository.LibroRepository;
import com.modusoftware.pruebaTecnica2.persistent.repository.VentaRepository;

@SpringBootTest
@TestPropertySource("classpath:test.properties")
public class VentaServiceTests {

	
	@Value("${id}")
	private int id;	
	
	@Autowired
	IVentaService ventaServ;
	
	@Autowired
	VentaRepository ventaRep;
	
	@Autowired
	private LibroRepository libroRep;
	
	@Autowired
	private ILibroService libroServ;
	
	@Autowired
	private Mapeo mapeo;
	
	
	@Test
	public void buyBookTest() {
		
		VentaDTO dto = new VentaDTO();
		dto.setId(id);
		dto.setCantidad(1);
		
		LibroEntity ent = this.libroServ.updateStockBook(dto.getId(), dto.getCantidad());
		
		VentaDTO dtoReturn =this.mapeo.toVentaDTO(ent);
		dtoReturn.setFechaVenta(LocalDateTime.now());
		dtoReturn.setCantidad(dto.getCantidad());
		
		VentaEntity venta = mapeo.toVentaEntity(dtoReturn);
		VentaDTOReturn result = mapeo.toVentaDTOReturn(venta);
		
		result.setValor(dtoReturn.getValor());
		
		assertEquals(result,this.ventaServ.registroVentas(dto)); 
		
		
		
	}
	
	
	
}
