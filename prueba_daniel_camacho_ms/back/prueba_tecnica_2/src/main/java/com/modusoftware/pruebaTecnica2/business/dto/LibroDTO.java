package com.modusoftware.pruebaTecnica2.business.dto;

import java.util.List;

import lombok.Data;

@Data
public class LibroDTO {
	
	private Integer id;
	private String nombre;
	private String ISBN;
	private String autor;
	private String editorial;
	private String fecha;
	private Integer numeroPag;
	private Integer stock;
	private double valor;
	private String tematica;

}
