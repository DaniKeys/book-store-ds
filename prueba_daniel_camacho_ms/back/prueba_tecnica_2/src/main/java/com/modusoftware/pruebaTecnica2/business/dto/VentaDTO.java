package com.modusoftware.pruebaTecnica2.business.dto;

import java.time.LocalDateTime;

import com.modusoftware.pruebaTecnica2.persistent.model.LibroEntity;

import lombok.Data;

@Data
public class VentaDTO {

	private Integer idVenta;
	private Integer id;
	private String nombre;
	private LocalDateTime fechaVenta;
	private double valor;
	private Integer cantidad;
	
	
	
	}
	

