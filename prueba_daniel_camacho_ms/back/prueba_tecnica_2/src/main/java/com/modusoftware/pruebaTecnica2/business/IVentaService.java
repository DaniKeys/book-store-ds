package com.modusoftware.pruebaTecnica2.business;

import java.util.List;

import org.springframework.stereotype.Service;

import com.modusoftware.pruebaTecnica2.business.dto.VentaDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOGetAll;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOReturn;
import com.modusoftware.pruebaTecnica2.business.impl.LibroServiceImpl;

@Service 
public interface IVentaService {

	
	public  VentaDTOReturn registroVentas(VentaDTO dto);
	public List<VentaDTOGetAll> getAllVentas();

	
}
