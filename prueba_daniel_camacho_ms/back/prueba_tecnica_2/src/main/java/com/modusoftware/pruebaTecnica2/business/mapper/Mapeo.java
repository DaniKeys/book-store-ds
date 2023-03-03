package com.modusoftware.pruebaTecnica2.business.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.modusoftware.pruebaTecnica2.business.dto.LibroDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTO;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOGetAll;
import com.modusoftware.pruebaTecnica2.business.dto.VentaDTOReturn;
import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;
import com.modusoftware.pruebaTecnica2.persistent.model.VentaEntity;

@Mapper(componentModel = "spring")
public interface Mapeo {

//Libro	
	LibroEntity toLibroEntity(LibroDTO dto);
	LibroDTO toLibroDTO(LibroEntity ent);
	List<LibroEntity> toLibroEntityList(List<LibroDTO> dto);
	List<LibroDTO> toLibroDTOList(List<LibroEntity> ent);
	
//Ventas
	
	VentaDTO toVentaDTO(LibroEntity ent);
	@Mapping(target = "libroId", source = "id")
	@Mapping(target = "libroName", source = "nombre")
	VentaEntity toVentaEntity(VentaDTO dto);
	VentaDTOReturn toVentaDTOReturn(VentaEntity ent);
	List<VentaDTOGetAll> toVentaDTOall(List<VentaEntity> ent);

	
	
	
}
