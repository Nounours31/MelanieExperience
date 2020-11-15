-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 15, 2020 at 07:50 PM
-- Server version: 10.2.14-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `melanie_fages`
--
CREATE DATABASE IF NOT EXISTS `melanie_fages` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `melanie_fages`;

-- --------------------------------------------------------

--
-- Table structure for table `chromosomes`
--

DROP TABLE IF EXISTS `chromosomes`;
CREATE TABLE IF NOT EXISTS `chromosomes` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `chromosomes`
--

INSERT INTO `chromosomes` (`uid`, `nom`) VALUES
(1, '-'),
(15, 'PINK1[5]/Y'),
(14, 'UAS LacZ/+'),
(13, 'Vg-Gla4/+'),
(12, 'W1118/Y'),
(6, 'White/white'),
(7, 'Rbf1/TM6 Tb Sb'),
(8, 'PINK1[5]/FM7'),
(9, 'Vg UAS Debcl /SM5 ^ TM6'),
(10, 'mtKeima/mtKeima'),
(11, 'UAS LacZ/TM Tb Sb'),
(16, 'Vg UAS D2 /+'),
(17, 'Vg UAS D3 /+'),
(18, 'UAS Rbf1/+'),
(19, '+/Y'),
(20, 'UAS LacZ/mtKeima'),
(21, 'UAS Rbf1/mtKeima'),
(25, 'keima, Rbf1/TM(Tb,Sb)'),
(24, 'PINK1[B9]/Y'),
(26, 'D3-Keima/TM(Tb,Sb)'),
(27, '+/+'),
(28, '+/y-+'),
(29, 'VgGal4/Cyo GFP'),
(30, 'UAS LacZ/TM(TB Sb)'),
(31, 'Sp/Cyo GFP');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
CREATE TABLE IF NOT EXISTS `experience` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT,
  `experiencestringid` text COLLATE utf8_bin NOT NULL,
  `daterealisationexperience` date NOT NULL,
  `faiteparqui` tinyint(4) NOT NULL,
  `dateinsert` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`uid`, `experiencestringid`, `daterealisationexperience`, `faiteparqui`, `dateinsert`) VALUES
(6, 'F1-A2', '2020-02-04', 3, '2020-10-02 10:56:28'),
(5, 'F1-A1', '2019-04-30', 3, '2020-10-02 10:44:04'),
(14, 'F5-B1', '2019-06-19', 3, '2020-10-04 13:29:37'),
(7, 'F1-A3', '2020-03-13', 3, '2020-10-03 13:05:00'),
(13, 'F5-A2', '2020-03-12', 3, '2020-10-04 13:27:23'),
(9, 'F2-A1', '2019-04-30', 3, '2020-10-04 09:28:14'),
(10, 'F2-A2', '2019-05-28', 3, '2020-10-04 09:32:18'),
(11, 'F2-A3', '2020-03-13', 3, '2020-10-04 09:34:35'),
(12, 'F5-A1', '2019-06-19', 3, '2020-10-04 09:44:36'),
(16, 'B1-B1', '2019-01-01', 4, '2020-10-09 11:33:45'),
(17, 'F2-B1', '2018-11-09', 3, '2020-10-12 13:38:00'),
(18, 'F2-B2', '2019-05-25', 3, '2020-10-12 13:38:33'),
(19, 'F12-A1', '2020-10-21', 3, '2020-10-22 14:21:57'),
(20, 'F12-A2', '2020-10-29', 3, '2020-10-30 13:21:42');

-- --------------------------------------------------------

--
-- Table structure for table `experience_file`
--

DROP TABLE IF EXISTS `experience_file`;
CREATE TABLE IF NOT EXISTS `experience_file` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `idexperience` int(11) NOT NULL,
  `nom` text COLLATE utf8_bin NOT NULL,
  `path` text COLLATE utf8_bin NOT NULL,
  `url` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `experience_file`
--

INSERT INTO `experience_file` (`uid`, `idexperience`, `nom`, `path`, `url`) VALUES
(20, 6, 'Marquage Dcp1 PINK1[5] Rbf1.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/Marquage-Dcp1-PINK1[5]-Rbf1.odp', 'server/vault/6/Marquage-Dcp1-PINK1[5]-Rbf1.odp'),
(5, 5, '190403Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/190403Dcp-1PINK1RBF1.xlsx', 'server/vault/5/190403Dcp-1PINK1RBF1.xlsx'),
(92, 6, 'Graph_stat_F1-A2.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/Graph_stat_F1-A2.png', 'server/vault/6/Graph_stat_F1-A2.png'),
(19, 5, 'Marquage Dcp1 PINK1[5] Rbf1.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/Marquage-Dcp1-PINK1[5]-Rbf1.odp', 'server/vault/5/Marquage-Dcp1-PINK1[5]-Rbf1.odp'),
(94, 9, 'Graph_stat_F2-A1.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/9/Graph_stat_F2-A1.png', 'server/vault/9/Graph_stat_F2-A1.png'),
(7, 6, '200204Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/200204Dcp-1PINK1RBF1.xlsx', 'server/vault/6/200204Dcp-1PINK1RBF1.xlsx'),
(55, 12, 'Marquage Keima Rbf1 (Posterieur).odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/Marquage-Keima-Rbf1-(Posterieur).odp', 'server/vault/12/Marquage-Keima-Rbf1-(Posterieur).odp'),
(9, 7, '200313Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/7/200313Dcp-1PINK1RBF1.xlsx', 'server/vault/7/200313Dcp-1PINK1RBF1.xlsx'),
(26, 7, 'Marquage Dcp1 PINK1[5] Rbf1.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/7/Marquage-Dcp1-PINK1[5]-Rbf1.odp', 'server/vault/7/Marquage-Dcp1-PINK1[5]-Rbf1.odp'),
(87, 17, 'Comptage des ailes Phenotype Mutant PINK1 Debcl VS Debcl 181109.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/17/Comptage-des-ailes-Phenotype-Mutant-PINK1-Debcl-VS-Debcl-181109.xlsx', 'server/vault/17/Comptage-des-ailes-Phenotype-Mutant-PINK1-Debcl-VS-Debcl-181109.xlsx'),
(93, 7, 'Graph_stat_F1-A3.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/7/Graph_stat_F1-A3.png', 'server/vault/7/Graph_stat_F1-A3.png'),
(95, 10, 'Graph_stat_F2-A2.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/10/Graph_stat_F2-A2.png', 'server/vault/10/Graph_stat_F2-A2.png'),
(29, 9, '190430Dcp-1PINK1DEBCL.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/9/190430Dcp-1PINK1DEBCL.xlsx', 'server/vault/9/190430Dcp-1PINK1DEBCL.xlsx'),
(30, 9, 'Marquage Dcp1 PINK1[5] Debcl.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/9/Marquage-Dcp1-PINK1[5]-Debcl.odp', 'server/vault/9/Marquage-Dcp1-PINK1[5]-Debcl.odp'),
(96, 11, 'Graph_stat_F2-A3.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/11/Graph_stat_F2-A3.png', 'server/vault/11/Graph_stat_F2-A3.png'),
(32, 10, '190528Dcp-1PINK1DEBCL.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/10/190528Dcp-1PINK1DEBCL.xlsx', 'server/vault/10/190528Dcp-1PINK1DEBCL.xlsx'),
(33, 10, 'Marquage Dcp1 PINK1[5] Debcl.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/10/Marquage-Dcp1-PINK1[5]-Debcl.odp', 'server/vault/10/Marquage-Dcp1-PINK1[5]-Debcl.odp'),
(34, 11, 'Marquage Dcp1 PINK1[5] Debcl.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/11/Marquage-Dcp1-PINK1[5]-Debcl.odp', 'server/vault/11/Marquage-Dcp1-PINK1[5]-Debcl.odp'),
(35, 11, '200313Dcp-1PINK1DEBCL.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/11/200313Dcp-1PINK1DEBCL.xlsx', 'server/vault/11/200313Dcp-1PINK1DEBCL.xlsx'),
(97, 13, 'Grap_stat_F5-A2.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/13/Grap_stat_F5-A2.png', 'server/vault/13/Grap_stat_F5-A2.png'),
(40, 12, '190619KeimaRbf1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/190619KeimaRbf1.xlsx0DE81C35-BB1E-4C95-A197-2FA7AB7552CA', 'server/vault/12/190619KeimaRbf1.xlsx0DE81C35-BB1E-4C95-A197-2FA7AB7552CA'),
(91, 5, 'Graph_stat_F1-A1.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/Graph_stat_F1-A1.png', 'server/vault/5/Graph_stat_F1-A1.png'),
(58, 12, 'Graph_stat_F5-A1.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/Graph_stat_F5-A1.png9CEBCD8F-5EB3-4FCA-800B-63B2F294A983', 'server/vault/12/Graph_stat_F5-A1.png9CEBCD8F-5EB3-4FCA-800B-63B2F294A983'),
(86, 16, 'Graph_stat_B1B1.crtx', 'C:/WS/tools/wamp64/www/nanie/server/vault/16/Graph_stat_B1B1.crtx', 'server/vault/16/Graph_stat_B1B1.crtx'),
(98, 14, 'Graph-stat_F5-B1.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/14/Graph-stat_F5-B1.png', 'server/vault/14/Graph-stat_F5-B1.png'),
(61, 13, 'Marquage Keima Rbf1 (Posterieur).odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/13/Marquage-Keima-Rbf1-(Posterieur).odp', 'server/vault/13/Marquage-Keima-Rbf1-(Posterieur).odp'),
(62, 13, 'Marquage Keima Rbf1 anterieur vs posterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/13/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp', 'server/vault/13/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp'),
(63, 14, '190619KeimaDebcl.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/14/190619KeimaDebcl.xlsx', 'server/vault/14/190619KeimaDebcl.xlsx'),
(56, 12, 'Marquage Keima Rbf1 anterieur vs posterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp', 'server/vault/12/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp'),
(99, 19, 'Montage F12-A Debcl.pptx', 'C:/WS/tools/wamp64/www/nanie/server/vault/19/Montage-F12-A-Debcl.pptx', 'server/vault/19/Montage-F12-A-Debcl.pptx'),
(65, 14, 'Marquage Keima Debcl - Anterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/14/Marquage-Keima-Debcl---Anterieur.odp', 'server/vault/14/Marquage-Keima-Debcl---Anterieur.odp'),
(85, 15, 'toto.txt', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/toto.txt2C5CF076-5A9F-40A6-A70E-77355DBFB7DD', 'server/vault/15/toto.txt2C5CF076-5A9F-40A6-A70E-77355DBFB7DD'),
(84, 15, 'Mix Rbf1 et Debcl 200312 et 190619.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Mix-Rbf1-et-Debcl-200312-et-190619.xlsx613ABB14-FEA8-4D4B-A21B-6843871E66AB', 'server/vault/15/Mix-Rbf1-et-Debcl-200312-et-190619.xlsx613ABB14-FEA8-4D4B-A21B-6843871E66AB'),
(83, 15, 'Marquage Keima Rbf1 anterieur vs posterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp7CB66562-5CBD-442B-8CD7-071CD62207B3', 'server/vault/15/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp7CB66562-5CBD-442B-8CD7-071CD62207B3'),
(81, 15, 'Marquage Keima Debcl - Anterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Marquage-Keima-Debcl---Anterieur.odpBD69509D-2472-44D9-A97A-55D378016608', 'server/vault/15/Marquage-Keima-Debcl---Anterieur.odpBD69509D-2472-44D9-A97A-55D378016608'),
(82, 15, 'Marquage Keima Rbf1 (Posterieur).odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Marquage-Keima-Rbf1-(Posterieur).odp6E73CE1B-8689-4CAC-ABE5-AE0B8A441E67', 'server/vault/15/Marquage-Keima-Rbf1-(Posterieur).odp6E73CE1B-8689-4CAC-ABE5-AE0B8A441E67'),
(88, 17, 'Graph_stat_F2_B1.JPG', 'C:/WS/tools/wamp64/www/nanie/server/vault/17/Graph_stat_F2_B1.JPG', 'server/vault/17/Graph_stat_F2_B1.JPG'),
(89, 18, 'Comptage des ailes Phenotype Mutant PINK1 Debcl VS Debcl  190525.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/18/Comptage-des-ailes-Phenotype-Mutant-PINK1-Debcl-VS-Debcl--190525.xlsx', 'server/vault/18/Comptage-des-ailes-Phenotype-Mutant-PINK1-Debcl-VS-Debcl--190525.xlsx'),
(90, 18, 'Graph_stat_F2_B2.JPG', 'C:/WS/tools/wamp64/www/nanie/server/vault/18/Graph_stat_F2_B2.JPG', 'server/vault/18/Graph_stat_F2_B2.JPG'),
(100, 20, 'Marquage recombinant Rbf1.pptx', 'C:/WS/tools/wamp64/www/nanie/server/vault/20/Marquage-recombinant-Rbf1.pptx', 'server/vault/20/Marquage-recombinant-Rbf1.pptx');

-- --------------------------------------------------------

--
-- Table structure for table `experience_listegenotype`
--

DROP TABLE IF EXISTS `experience_listegenotype`;
CREATE TABLE IF NOT EXISTS `experience_listegenotype` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `idexperience` int(11) NOT NULL,
  `chromosome1` tinyint(4) NOT NULL,
  `chromosome2` tinyint(4) NOT NULL,
  `chromosome3` tinyint(4) NOT NULL,
  `chromosome4` tinyint(4) NOT NULL,
  `nbechantillon` int(11) NOT NULL,
  `dateinsert` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=63 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `experience_listegenotype`
--

INSERT INTO `experience_listegenotype` (`uid`, `idexperience`, `chromosome1`, `chromosome2`, `chromosome3`, `chromosome4`, `nbechantillon`, `dateinsert`) VALUES
(1, 1, 3, 5, 1, 1, 8, '2020-09-20 07:42:45'),
(2, 1, 4, 5, 1, 1, 9, '2020-09-20 07:42:45'),
(3, 1, 5, 3, 1, 1, 2, '2020-09-20 07:42:45'),
(4, 1, 4, 1, 1, 1, 30, '2020-09-20 07:42:45'),
(6, 2, 4, 1, 1, 1, 15, '2020-09-20 08:56:51'),
(7, 3, 6, 1, 7, 1, 8, '2020-09-21 14:43:26'),
(8, 3, 6, 1, 11, 1, 1, '2020-09-21 14:43:26'),
(9, 3, 8, 1, 7, 1, 14, '2020-09-21 14:43:26'),
(10, 3, 8, 1, 11, 1, 1, '2020-09-21 14:43:26'),
(11, 5, 12, 13, 14, 1, 9, '2020-10-02 10:48:18'),
(12, 5, 8, 13, 14, 1, 13, '2020-10-02 10:48:18'),
(13, 5, 12, 13, 18, 1, 11, '2020-10-02 10:48:18'),
(14, 5, 8, 13, 18, 1, 11, '2020-10-02 10:48:18'),
(15, 7, 12, 13, 14, 1, 18, '2020-10-03 13:27:37'),
(16, 7, 15, 13, 14, 1, 12, '2020-10-03 13:27:37'),
(17, 7, 12, 13, 18, 1, 20, '2020-10-03 13:27:37'),
(18, 7, 8, 13, 18, 1, 35, '2020-10-03 13:27:37'),
(26, 6, 8, 13, 18, 1, 19, '2020-10-04 09:26:22'),
(25, 6, 12, 13, 18, 1, 9, '2020-10-04 09:26:22'),
(24, 6, 8, 13, 14, 1, 18, '2020-10-04 09:26:22'),
(23, 6, 12, 13, 14, 1, 20, '2020-10-04 09:26:22'),
(27, 9, 12, 13, 14, 1, 9, '2020-10-04 09:31:43'),
(28, 9, 15, 13, 14, 1, 13, '2020-10-04 09:31:43'),
(29, 9, 12, 16, 16, 1, 19, '2020-10-04 09:31:43'),
(30, 9, 15, 16, 17, 1, 11, '2020-10-04 09:31:43'),
(31, 10, 12, 13, 14, 1, 15, '2020-10-04 09:34:19'),
(32, 10, 15, 13, 14, 1, 16, '2020-10-04 09:34:19'),
(33, 10, 12, 16, 16, 1, 25, '2020-10-04 09:34:19'),
(34, 10, 15, 16, 17, 1, 7, '2020-10-04 09:34:19'),
(35, 11, 12, 13, 14, 1, 18, '2020-10-04 09:40:36'),
(36, 11, 15, 13, 14, 1, 9, '2020-10-04 09:40:36'),
(37, 11, 12, 16, 16, 1, 28, '2020-10-04 09:40:36'),
(38, 11, 15, 16, 17, 1, 21, '2020-10-04 09:40:36'),
(39, 12, 19, 13, 20, 1, 4, '2020-10-04 13:03:37'),
(40, 12, 19, 13, 21, 1, 8, '2020-10-04 13:03:37'),
(41, 13, 19, 13, 20, 1, 4, '2020-10-04 13:29:05'),
(42, 13, 19, 13, 21, 1, 4, '2020-10-04 13:29:05'),
(43, 14, 19, 13, 20, 1, 4, '2020-10-04 13:30:44'),
(57, 17, 12, 16, 17, 1, 76, '2020-10-20 14:34:18'),
(47, 15, 6, 8, 16, 1, 3, '2020-10-04 15:11:20'),
(48, 16, 12, 13, 18, 1, 383, '2020-10-09 11:42:07'),
(51, 16, 24, 13, 18, 1, 159, '2020-10-09 11:46:52'),
(50, 16, 22, 13, 18, 1, 159, '2020-10-09 11:44:01'),
(60, 19, 28, 29, 30, 1, 4, '2020-10-22 14:31:47'),
(59, 19, 19, 16, 26, 1, 4, '2020-10-22 14:29:45'),
(54, 18, 12, 16, 17, 1, 210, '2020-10-12 13:51:01'),
(55, 18, 15, 16, 17, 1, 144, '2020-10-12 13:51:01'),
(56, 14, 19, 16, 17, 1, 5, '2020-10-20 14:29:19'),
(58, 17, 15, 16, 17, 1, 76, '2020-10-20 14:34:18'),
(61, 20, 1, 13, 25, 1, 2, '2020-10-30 13:25:13'),
(62, 20, 1, 31, 10, 1, 2, '2020-10-30 13:25:13');

-- --------------------------------------------------------

--
-- Table structure for table `experience_objectif`
--

DROP TABLE IF EXISTS `experience_objectif`;
CREATE TABLE IF NOT EXISTS `experience_objectif` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectifAsInt` int(11) NOT NULL,
  `objectif` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `experience_objectif`
--

INSERT INTO `experience_objectif` (`id`, `objectifAsInt`, `objectif`) VALUES
(4, 1, 'PINK1 dans le processus apoptotique induite par Rbf1'),
(5, 2, 'PINK1 dans le processus apoptotique induite par Debcl'),
(6, 3, 'Relocalisation de Debcl par les inducteur de mitophagie'),
(7, 4, 'Implication de P/P dans la fragmentation du réseau en condition d\'apoptose'),
(8, 5, 'Implication de la mitophagie dans le processus apoptotique '),
(9, 6, 'Parkin dans le processus apoptotique induite par Rbf1'),
(10, 7, 'Parkin dans le processus apoptotique induite par Debcl'),
(11, 8, 'Le role de Buffy dans la modulation apoptotique par les inducteur de mitophagie'),
(12, 9, 'Modification Post Traductionnelle de proteine de la famille Bcl2 par des inducteur de mitophagie au cours du processus apoptotique'),
(13, 10, 'Le role des inducteur de mitophagie dans la modulation des partenaires de Debcl au cours de l\'apoptose  '),
(14, 11, 'Modulation de l\'equilibre Fussion/fussion du processus apoptotique par des inducteur de mitophagie'),
(15, 12, 'Role de PINK1 et Parkin dans la mitophagie induite par apoptose'),
(16, 13, 'Modulation de la quantité de ROS apoptotique par des inducteur de mitophagie'),
(17, 14, 'Mise en place du modèle d\'induction de mitophagie'),
(18, 15, 'La conséquence de l\'invalidation des proteine de la famille BCL2 dans le processus de mitophagie'),
(19, 16, 'Le role des protéines de la famille BCL2 dans la relocalisation de Parkin'),
(20, 17, 'Modification Post Traductionnelle de proteine de la famille Bcl2 par des inducteur de mitophagie au cours du processus de mitophagie'),
(21, 18, 'Comparatif des interactions de Debcl en contexte d\'apoptose et de mitophagie en presence ou abscence d\'inducteur de mitophagie'),
(22, 19, 'Mise en place de souches utiles');

-- --------------------------------------------------------

--
-- Table structure for table `experience_otestonobjectif`
--

DROP TABLE IF EXISTS `experience_otestonobjectif`;
CREATE TABLE IF NOT EXISTS `experience_otestonobjectif` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idobjectif` int(11) NOT NULL,
  `TestAsLetter` char(1) COLLATE utf8_bin NOT NULL DEFAULT 'A',
  `test` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `experience_otestonobjectif`
--

INSERT INTO `experience_otestonobjectif` (`id`, `idobjectif`, `TestAsLetter`, `test`) VALUES
(7, 5, 'A', 'Mesure apoptose au niveau du disque d\'aile en contexte PINK1 muté'),
(6, 4, 'B', 'Observation du phenotype de l\'aile en contexte PINK1 mutÃ©'),
(5, 4, 'A', 'Mesure apoptose au niveau du disque d\'aile en contexte PINK1 muté'),
(8, 5, 'B', 'Observation du phenotype de l\'aile en contexte PINK1 muté'),
(9, 6, 'A', 'Fractionnement cytosol/mito avec detection Debcl HA en contexte PINK1 Mutant'),
(10, 6, 'B', 'Fractionnement cytosol/mito avec detection Debcl HA en contexte Parkin Mutant'),
(11, 7, 'A', 'Mesure de fragementation du reseau mito en abscence de PINK1'),
(12, 7, 'B', 'Mesure de fragementation du reseau mito en abscence de Parkin'),
(13, 8, 'A', 'Mesure de la mitophagie (Keima) en contexte de surexpression de Rbf1'),
(14, 8, 'B', 'Mesure de la mitophagie (Keima) en contexte de surexpression de Debcl'),
(15, 9, 'A', 'Observation du phenotype de l\'aile en contexte Parkin muté'),
(16, 9, 'B', 'Mesure apoptose au niveau du disque d\'aile en contexte Parkin muté'),
(17, 10, 'A', 'Mesure apoptose au niveau du disque d\'aile en contexte Parkin muté'),
(18, 10, 'B', 'Observation du phenotype de l\'aile en contexte Parkin muté'),
(19, 11, 'A', 'Mesure de l\'apoptose en abscence de Buffy et de PINK1 fonctionnel'),
(20, 11, 'B', 'Mesure de l\'apoptose en abscence de Buffy et de Parkin fonctionnel'),
(21, 12, 'A', 'Identification des MPT de Debcl en contexte PINK1 Mutant'),
(22, 12, 'B', 'Identification des MPT de Buffy en contexte PINK1 Mutant'),
(23, 12, 'C', 'Identification des MPT de Debcl en contexte Parkin Mutant'),
(24, 12, 'D', 'Identification des MPT de Buffy en contexte Parkin Mutant'),
(25, 13, 'A', 'Mise en place du Debcl couplé a l\'ubiquitine ligase'),
(26, 13, 'B', 'Isolation des partenaires de Debcl en contexte PINK1 muté'),
(27, 13, 'C', 'Isolation des partenaires de Debcl en contexte Parkin muté'),
(28, 14, 'A', 'Mesure de la fragmentation du reseau mitochondriale en apoptose en contexte PINK1 Muté'),
(29, 14, 'B', 'Mesure de la fragmentation du reseau mitochondriale en apoptose en contexte Parkin Muté'),
(30, 14, 'C', 'Factionnement cellulaire et localisation de Drp1 au cours de l\'apoptose en contexte PINK1 Muté'),
(31, 14, 'D', 'Factionnement cellulaire et localisation de Drp1 au cours de l\'apoptose en contexte Parkin Muté'),
(32, 15, 'A', 'Test de la ligné Keima/ UAS Rbf1 et Keima/UAS Debcl'),
(33, 15, 'B', 'Faire Recombinant Keima LacZ'),
(34, 15, 'C', 'Mesure de la mitophagie en contexte apoptotique induit par Rbf1 et PINK1 mutant'),
(35, 15, 'D', 'Mesure de la mitophagie en contexte apoptotique induit par Debcl et PINK1 mutant'),
(36, 15, 'E', 'Mesure de la mitophagie en contexte apoptotique induit par Rbf1 et PINK1 mutant'),
(37, 15, 'F', 'Mesure de la mitophagie en contexte apoptotique induit par Debc et Parkin mutant'),
(38, 16, 'A', 'Mesure de la quantité de ROS en contexte apoptotique et PINK1 mutant'),
(39, 16, 'B', 'Mesure de la quantité de ROS en contexte apoptotique et Parkin mutant'),
(40, 17, 'A', 'Test de la quantite d\'ARNI ND75 necessaire pour induire la mitophagie'),
(41, 18, 'A', 'Mesure de la mitophagie induite, en contexte Debcl mutant'),
(42, 18, 'B', 'Mesure de la mitophagie induite, en contexte Buffy mutant'),
(43, 19, 'A', 'Factionnement cellulaire et localisation de Parkin au cours de l\'apoptose en contexte Buffy non fonctionel'),
(44, 19, 'B', 'Factionnement cellulaire et localisation de Parkin au cours de l\'apoptose en contexte Debcl non fonctionel'),
(45, 20, 'A', 'Identification des MPT de Debcl en contexte PINK1 Mutant'),
(46, 20, 'B', 'Identification des MPT de Buffy en contexte PINK1 Mutant'),
(47, 20, 'C', 'Identification des MPT de Debcl en contexte Parkin Mutant'),
(48, 20, 'D', 'Identification des MPT de Buffy en contexte Parkin Mutant'),
(49, 21, 'A', 'Comparaison des partenaire de Debcl en contexte PINK1 mute'),
(50, 21, 'B', 'Comparaison des partenaire de Debcl en contexte Parkin mute'),
(51, 22, 'A', 'Mettre la souche Vg Lac Z sur un balanceur'),
(52, 22, 'B', 'Mettre les souche keima/Rbf1 ou Debcl ou Lac Z sur balanceur');

-- --------------------------------------------------------

--
-- Table structure for table `experience_resultatdestests`
--

DROP TABLE IF EXISTS `experience_resultatdestests`;
CREATE TABLE IF NOT EXISTS `experience_resultatdestests` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `idexperience` int(11) NOT NULL,
  `territoire` text COLLATE utf8_bin NOT NULL,
  `marquage` text COLLATE utf8_bin NOT NULL,
  `SGeneral` double NOT NULL,
  `SComparatif` double NOT NULL,
  `typedetest` text COLLATE utf8_bin NOT NULL,
  `dateinsert` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `experience_resultatdestests`
--

INSERT INTO `experience_resultatdestests` (`uid`, `idexperience`, `territoire`, `marquage`, `SGeneral`, `SComparatif`, `typedetest`, `dateinsert`) VALUES
(1, 1, '3', '3', 8, 30, '3', '2020-09-20 07:43:46'),
(2, 2, '3', '3', -9, -19, '3', '2020-09-20 08:56:51'),
(3, 3, '2', '2', 6, 1, '1', '2020-09-21 14:43:26'),
(4, 5, '2', '2', 0.0000012, 0.00002, '3', '2020-10-04 09:21:50'),
(5, 7, '2', '2', 0.0000000058, 0.0000000078, '3', '2020-10-04 09:23:38'),
(6, 6, '2', '2', 0.000019, 0.19, '3', '2020-10-04 09:26:22'),
(7, 4, '1', '1', 1, 1, '1', '2020-10-03 17:32:46'),
(8, 9, '2', '2', 0.0000000064, 0.011, '3', '2020-10-04 09:31:43'),
(9, 10, '2', '2', 0.00000000027, 0.075, '3', '2020-10-04 09:34:19'),
(10, 11, '2', '2', 0.000000000035, 0.65, '3', '2020-10-04 09:40:35'),
(11, 12, '2', '3', 1, 0.004, '4', '2020-10-04 13:03:37'),
(12, 13, '2', '3', 1, 0.029, '4', '2020-10-04 13:29:05'),
(13, 14, '2', '3', 1, 0.016, '4', '2020-10-20 14:29:19'),
(14, 15, '2', '1', 1, 1, '1', '2020-10-04 15:11:20'),
(15, 16, '2', '4', -9.45, 1e-19, '4', '2020-10-09 11:46:59'),
(16, 17, '2', '4', 0, 2.2e-16, '5', '2020-10-20 14:34:18'),
(17, 18, '2', '4', 1, 2.2e-16, '5', '2020-10-12 13:51:01'),
(18, 19, '2', '3', 1, 1, '1', '2020-10-22 14:31:47'),
(19, 20, '2', '3', 1, 1, '1', '2020-10-30 13:25:13');

-- --------------------------------------------------------

--
-- Table structure for table `initialesexperience`
--

DROP TABLE IF EXISTS `initialesexperience`;
CREATE TABLE IF NOT EXISTS `initialesexperience` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `initialesexperience`
--

INSERT INTO `initialesexperience` (`uid`, `nom`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D'),
(5, 'E');

-- --------------------------------------------------------

--
-- Table structure for table `marquagedesexperiences`
--

DROP TABLE IF EXISTS `marquagedesexperiences`;
CREATE TABLE IF NOT EXISTS `marquagedesexperiences` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `marquagedesexperiences`
--

INSERT INTO `marquagedesexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Dcp1'),
(3, 'Keima'),
(4, 'Ailes');

-- --------------------------------------------------------

--
-- Table structure for table `personnes`
--

DROP TABLE IF EXISTS `personnes`;
CREATE TABLE IF NOT EXISTS `personnes` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  `email` text COLLATE utf8_bin NOT NULL,
  `alias` text COLLATE utf8_bin NOT NULL,
  `passwd` text COLLATE utf8_bin NOT NULL,
  `token` text COLLATE utf8_bin NOT NULL,
  `validite` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `personnes`
--

INSERT INTO `personnes` (`uid`, `nom`, `email`, `alias`, `passwd`, `token`, `validite`) VALUES
(1, 'dd', 'dd@dd.com', 'dd', '1aabac6d068eef6a7bad3fdf50a05cc8', '60a8b84843ab6d76953f0bddc658b2bd', '2020-11-15 20:46:44'),
(2, 'cc', 'cc@cc.cc', 'cc', 'e0323a9039add2978bf5b49550572c7c', '', '2020-01-01 00:00:00'),
(3, 'FAGES', '', '', '', '', NULL),
(4, 'Brusson', '', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `territoireexperiences`
--

DROP TABLE IF EXISTS `territoireexperiences`;
CREATE TABLE IF NOT EXISTS `territoireexperiences` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `territoireexperiences`
--

INSERT INTO `territoireexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Vg'),
(3, 'eyeless');

-- --------------------------------------------------------

--
-- Table structure for table `typedetestdesexperiences`
--

DROP TABLE IF EXISTS `typedetestdesexperiences`;
CREATE TABLE IF NOT EXISTS `typedetestdesexperiences` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `typedetestdesexperiences`
--

INSERT INTO `typedetestdesexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Student'),
(3, 'Wallis'),
(4, 'Wilcoxon'),
(5, 'Khi2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
