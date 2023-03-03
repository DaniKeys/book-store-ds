package com.modusoftware.pruebaTecnica2.business.dto;

import java.time.LocalDateTime;

import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;

import lombok.Data;

@Data
public class VentaDTOGetAll {

	private Integer id;
	private Integer libroId;
	private String libroName;
	private LocalDateTime fechaVenta;
	private Integer cantidad;
	
	
	
	}
	

