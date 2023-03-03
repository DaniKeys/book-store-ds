--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_venta` int NOT NULL AUTO_INCREMENT,
  `libro_id` int NOT NULL,
  `nombre_libro` varchar(45) DEFAULT NULL,
  `fecha_venta` datetime DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `fk_ventas_1_idx` (`libro_id`),
  CONSTRAINT `fk_ventas_1` FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id_libro`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
