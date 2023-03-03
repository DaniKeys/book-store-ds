package com.modusoftware.pruebaTecnica2.business;

import java.util.List;

import org.springframework.stereotype.Service;
import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;

@Service
public interface ILibroService {
	
	public LibroDTO buscarPorId(Integer id);
	public List<LibroDTO>  getAllOrderByNameAsc();
	public List<LibroDTO> findByNameOrderByNameAsc(String name);
	public LibroDTO  saveBook(LibroDTO dto); 
	public LibroEntity updateStockBook(Integer id, Integer cant);
	public LibroDTO addStockBook(Integer id, LibroDTO dto);
	public Integer cantStock(Integer id);
	public int countId();
	
	
	
}
