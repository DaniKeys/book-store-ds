--
-- Table structure for table `libro`
--

DROP TABLE IF EXISTS `libro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libro` (
  `id_libro` int NOT NULL AUTO_INCREMENT,
  `nombre_libro` varchar(45) NOT NULL,
  `ISBN` varchar(45) NOT NULL,
  `nombre_autor` varchar(45) DEFAULT NULL,
  `nombre_editorial` varchar(45) DEFAULT NULL,
  `fecha_publicacion` varchar(45) DEFAULT NULL,
  `numero_paginas` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `valor_unitario` double DEFAULT NULL,
  `tematica` varchar(50) NOT NULL,
  PRIMARY KEY (`id_libro`),
  UNIQUE KEY `ISBN_UNIQUE` (`ISBN`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
