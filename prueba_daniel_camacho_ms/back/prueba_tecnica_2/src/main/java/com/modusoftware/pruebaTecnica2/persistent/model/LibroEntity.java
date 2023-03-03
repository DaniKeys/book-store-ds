package com.modusoftware.pruebaTecnica2.persistent.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name = "libro")
@Entity
public class LibroEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_libro")
	private Integer id;
	
	@Column(name = "nombre_libro")
	private String nombre;
	
	private String ISBN;
	
	@Column(name = "nombre_autor")
	private String autor;
	
	@Column(name = "nombre_editorial")
	private String editorial;
	
	@Column(name = "fecha_publicacion")
	private String fecha;
	
	@Column(name = "numero_paginas")
	private Integer numeroPag;
	
	private Integer stock;
	
	@Column(name = "valor_unitario")
	private double valor;
	
	private String tematica;
	
	
	
}
