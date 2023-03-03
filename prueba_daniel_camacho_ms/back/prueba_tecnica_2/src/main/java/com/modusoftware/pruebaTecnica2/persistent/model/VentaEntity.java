package com.modusoftware.pruebaTecnica2.persistent.model;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;

@Data
@Table(name = "ventas")
@Entity
public class VentaEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_venta")
	private Integer id;
	
	@Column(name = "fecha_venta")
	private LocalDateTime fechaVenta;
	
	private Integer cantidad;
	
	@Column(name = "libro_id")
	private Integer libroId;
	
	@Column(name = "nombre_libro")
	private String libroName;

	

}
