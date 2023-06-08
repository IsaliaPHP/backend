-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jun 08, 2023 at 11:57 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `acceso`
--

CREATE TABLE `acceso` (
  `id` bigint(20) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `fecha_acceso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ip_acceso` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `acceso`
--

INSERT INTO `acceso` (`id`, `usuario_id`, `fecha_acceso`, `ip_acceso`) VALUES
(1, 1, '2023-05-31 19:50:14', '127.0.0.1'),
(2, 2, '2023-05-31 19:58:16', '127.0.0.1'),
(3, NULL, '2023-05-31 21:14:54', '::1'),
(4, 1, '2023-05-31 21:15:06', '::1'),
(5, 2, '2023-05-31 21:15:19', '::1'),
(6, 2, '2023-06-01 01:07:57', '::1'),
(7, 2, '2023-06-08 20:37:44', '::1'),
(8, 1, '2023-06-08 21:19:00', '::1'),
(9, 2, '2023-06-08 21:19:17', '::1'),
(10, 1, '2023-06-08 21:40:50', '::1'),
(11, 2, '2023-06-08 21:41:10', '::1'),
(12, 1, '2023-06-08 21:56:25', '::1');

-- --------------------------------------------------------

--
-- Table structure for table `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `razon_social` varchar(300) DEFAULT NULL,
  `rut` varchar(20) DEFAULT NULL,
  `logo` varchar(45) DEFAULT NULL,
  `activa` int(11) DEFAULT NULL,
  `ult_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `empresa`
--

INSERT INTO `empresa` (`id`, `razon_social`, `rut`, `logo`, `activa`, `ult_actualizacion`) VALUES
(1, 'Empresa de Pruebas', '11.111.111-1', NULL, 1, '2023-05-31 20:41:49');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `ult_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `nombre`, `url`, `empresa_id`, `menu_id`, `activo`, `ult_actualizacion`) VALUES
(1, 'Menu de pruebas', '#', 1, NULL, 1, '2023-05-31 15:52:32');

-- --------------------------------------------------------

--
-- Table structure for table `perfil`
--

CREATE TABLE `perfil` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `ult_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perfil`
--

INSERT INTO `perfil` (`id`, `nombre`, `activo`, `ult_actualizacion`) VALUES
(1, 'Admin', 1, '2023-05-31 03:42:39'),
(2, 'Auditor', 1, '2023-05-31 17:51:41');

-- --------------------------------------------------------

--
-- Table structure for table `perfil_recurso`
--

CREATE TABLE `perfil_recurso` (
  `id` int(11) NOT NULL,
  `recurso_id` int(11) DEFAULT NULL,
  `perfil_id` int(11) DEFAULT NULL,
  `fec_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perfil_recurso`
--

INSERT INTO `perfil_recurso` (`id`, `recurso_id`, `perfil_id`, `fec_actualizacion`) VALUES
(2, 7, 1, '2023-05-31 19:58:07'),
(3, 5, 2, '2023-06-08 21:56:13'),
(4, 6, 2, '2023-06-08 21:56:13');

-- --------------------------------------------------------

--
-- Table structure for table `recurso`
--

CREATE TABLE `recurso` (
  `id` int(11) NOT NULL,
  `controlador` varchar(45) DEFAULT NULL,
  `accion` varchar(45) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `ult_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `recurso`
--

INSERT INTO `recurso` (`id`, `controlador`, `accion`, `activo`, `ult_actualizacion`) VALUES
(1, 'Recursos', '*', 1, '2023-05-31 17:09:12'),
(2, 'Menus', '*', 1, '2023-05-31 17:04:37'),
(3, 'Perfiles', '*', 1, '2023-05-31 17:04:56'),
(4, 'Empresas', '*', 1, '2023-05-31 17:05:19'),
(5, 'Usuarios', '*', 1, '2023-05-31 17:05:40'),
(6, 'Accesos', '*', 1, '2023-05-31 17:05:47'),
(7, '*', '*', 1, '2023-05-31 19:57:51');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `login` varchar(45) DEFAULT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `clave` varchar(200) DEFAULT NULL,
  `perfil_id` int(11) NOT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `stamp` varchar(120) DEFAULT NULL,
  `ult_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `login`, `nombre`, `email`, `clave`, `perfil_id`, `empresa_id`, `activo`, `stamp`, `ult_actualizacion`) VALUES
(1, 'nelson', 'Nelson Rojas', 'nelson.rojas.n@gmail.com', '$2y$12$1GAsHXOOnrWaMnn94kpknehEFn3yLgNtZM4CxOM/dB68hJcP.K6b2', 2, 1, 1, NULL, '2023-06-08 21:33:14'),
(2, 'admin', 'Administrador', 'admin@localhost', '$2y$12$7hYBrdioyEDs6Q.XYRMOfe4qFk57pph4niSzEcMeS5So5K.J43yei', 1, 1, 1, NULL, '2023-05-31 15:52:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acceso`
--
ALTER TABLE `acceso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario_a_acceso` (`usuario_id`);

--
-- Indexes for table `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_empresa_a_menu` (`empresa_id`);

--
-- Indexes for table `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perfil_recurso`
--
ALTER TABLE `perfil_recurso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_perfil_a_perfil_recurso` (`perfil_id`),
  ADD KEY `fk_recurso_a_perfil_recurso` (`recurso_id`);

--
-- Indexes for table `recurso`
--
ALTER TABLE `recurso`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_perfil_a_usuario` (`perfil_id`),
  ADD KEY `fk_empresa_a_usuario` (`empresa_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acceso`
--
ALTER TABLE `acceso`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `perfil_recurso`
--
ALTER TABLE `perfil_recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `recurso`
--
ALTER TABLE `recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `acceso`
--
ALTER TABLE `acceso`
  ADD CONSTRAINT `fk_usuario_a_acceso` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `fk_empresa_a_menu` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`);

--
-- Constraints for table `perfil_recurso`
--
ALTER TABLE `perfil_recurso`
  ADD CONSTRAINT `fk_perfil_a_perfil_recurso` FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`),
  ADD CONSTRAINT `fk_recurso_a_perfil_recurso` FOREIGN KEY (`recurso_id`) REFERENCES `recurso` (`id`);

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_empresa_a_usuario` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`),
  ADD CONSTRAINT `fk_perfil_a_usuario` FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
