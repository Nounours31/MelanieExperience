-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 23, 2020 at 07:55 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nanie`
--
CREATE DATABASE IF NOT EXISTS `nanie` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `nanie`;

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
CREATE TABLE IF NOT EXISTS `experience` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `qui` enum('Nanie','Sylvina','Autre') COLLATE utf8_bin NOT NULL,
  `url_graph` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `resultat`
--

DROP TABLE IF EXISTS `resultat`;
CREATE TABLE IF NOT EXISTS `resultat` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_experience` bigint(20) NOT NULL,
  `chromosome1` text COLLATE utf8_bin NOT NULL,
  `chromosome2` text COLLATE utf8_bin NOT NULL,
  `chromosome3` text COLLATE utf8_bin NOT NULL,
  `chromosome4` text COLLATE utf8_bin NOT NULL,
  `nb` int(11) NOT NULL,
  `typetest` enum('student','Manley', 'autre') COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `significatif`
--

DROP TABLE IF EXISTS `significatif`;
CREATE TABLE IF NOT EXISTS `significatif` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_resultat1` bigint(20) NOT NULL,
  `id_resultat2` bigint(20) NOT NULL,
  `val` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
