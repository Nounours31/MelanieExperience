-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : Dim 04 oct. 2020 à 16:03
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `melanie_fages`
--

-- --------------------------------------------------------

--
-- Structure de la table `chromosomes`
--

DROP TABLE IF EXISTS `chromosomes`;
CREATE TABLE IF NOT EXISTS `chromosomes` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `chromosomes`
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
(21, 'UAS Rbf1/mtKeima');

-- --------------------------------------------------------

--
-- Structure de la table `experience`
--

DROP TABLE IF EXISTS `experience`;
CREATE TABLE IF NOT EXISTS `experience` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT,
  `experiencestringid` text COLLATE utf8_bin NOT NULL,
  `daterealisationexperience` date NOT NULL,
  `faiteparqui` tinyint(4) NOT NULL,
  `dateinsert` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `experience`
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
(15, 'd0-A0', '2020-10-01', 1, '2020-10-04 15:09:33');

-- --------------------------------------------------------

--
-- Structure de la table `experience_file`
--

DROP TABLE IF EXISTS `experience_file`;
CREATE TABLE IF NOT EXISTS `experience_file` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `idexperience` int(11) NOT NULL,
  `nom` text COLLATE utf8_bin NOT NULL,
  `path` text COLLATE utf8_bin NOT NULL,
  `url` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=86 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `experience_file`
--

INSERT INTO `experience_file` (`uid`, `idexperience`, `nom`, `path`, `url`) VALUES
(20, 6, 'Marquage Dcp1 PINK1[5] Rbf1.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/Marquage-Dcp1-PINK1[5]-Rbf1.odp', 'server/vault/6/Marquage-Dcp1-PINK1[5]-Rbf1.odp'),
(5, 5, '190403Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/190403Dcp-1PINK1RBF1.xlsx', 'server/vault/5/190403Dcp-1PINK1RBF1.xlsx'),
(24, 5, 'Graph_stat_F1-A1', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/Graph_stat_F1-A18C6BB1BD-22E7-4C1E-B24E-7EDDFD65CE5C', 'server/vault/5/Graph_stat_F1-A18C6BB1BD-22E7-4C1E-B24E-7EDDFD65CE5C'),
(19, 5, 'Marquage Dcp1 PINK1[5] Rbf1.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/Marquage-Dcp1-PINK1[5]-Rbf1.odp', 'server/vault/5/Marquage-Dcp1-PINK1[5]-Rbf1.odp'),
(25, 7, 'Graph_stat_F1-A3', 'C:/WS/tools/wamp64/www/nanie/server/vault/7/Graph_stat_F1-A3A1F59142-F930-431A-A6DC-C5EC719E5970', 'server/vault/7/Graph_stat_F1-A3A1F59142-F930-431A-A6DC-C5EC719E5970'),
(7, 6, '200204Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/200204Dcp-1PINK1RBF1.xlsx', 'server/vault/6/200204Dcp-1PINK1RBF1.xlsx'),
(55, 12, 'Marquage Keima Rbf1 (Posterieur).odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/Marquage-Keima-Rbf1-(Posterieur).odp', 'server/vault/12/Marquage-Keima-Rbf1-(Posterieur).odp'),
(9, 7, '200313Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/7/200313Dcp-1PINK1RBF1.xlsx', 'server/vault/7/200313Dcp-1PINK1RBF1.xlsx'),
(26, 7, 'Marquage Dcp1 PINK1[5] Rbf1.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/7/Marquage-Dcp1-PINK1[5]-Rbf1.odp', 'server/vault/7/Marquage-Dcp1-PINK1[5]-Rbf1.odp'),
(11, 8, 'Graphique stat F1-A2.jpg', 'C:/WS/tools/wamp64/www/nanie/server/vault/8/Graphique-stat-F1-A2.jpg', 'server/vault/8/Graphique-stat-F1-A2.jpg'),
(27, 6, 'Graph_stat_F1-A2', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/Graph_stat_F1-A27AAE621D-2AEE-456A-8347-4C2BEA0CD3A4', 'server/vault/6/Graph_stat_F1-A27AAE621D-2AEE-456A-8347-4C2BEA0CD3A4'),
(28, 9, 'Graph_stat_F2-A1', 'C:/WS/tools/wamp64/www/nanie/server/vault/9/Graph_stat_F2-A1', 'server/vault/9/Graph_stat_F2-A1'),
(29, 9, '190430Dcp-1PINK1DEBCL.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/9/190430Dcp-1PINK1DEBCL.xlsx', 'server/vault/9/190430Dcp-1PINK1DEBCL.xlsx'),
(30, 9, 'Marquage Dcp1 PINK1[5] Debcl.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/9/Marquage-Dcp1-PINK1[5]-Debcl.odp', 'server/vault/9/Marquage-Dcp1-PINK1[5]-Debcl.odp'),
(31, 10, 'Graph_stat_F2-A2', 'C:/WS/tools/wamp64/www/nanie/server/vault/10/Graph_stat_F2-A2', 'server/vault/10/Graph_stat_F2-A2'),
(32, 10, '190528Dcp-1PINK1DEBCL.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/10/190528Dcp-1PINK1DEBCL.xlsx', 'server/vault/10/190528Dcp-1PINK1DEBCL.xlsx'),
(33, 10, 'Marquage Dcp1 PINK1[5] Debcl.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/10/Marquage-Dcp1-PINK1[5]-Debcl.odp', 'server/vault/10/Marquage-Dcp1-PINK1[5]-Debcl.odp'),
(34, 11, 'Marquage Dcp1 PINK1[5] Debcl.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/11/Marquage-Dcp1-PINK1[5]-Debcl.odp', 'server/vault/11/Marquage-Dcp1-PINK1[5]-Debcl.odp'),
(35, 11, '200313Dcp-1PINK1DEBCL.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/11/200313Dcp-1PINK1DEBCL.xlsx', 'server/vault/11/200313Dcp-1PINK1DEBCL.xlsx'),
(37, 11, 'Graph_stat_F2-A3', 'C:/WS/tools/wamp64/www/nanie/server/vault/11/Graph_stat_F2-A34E1B740F-C87F-4B19-9CDC-C675BF3B6E11', 'server/vault/11/Graph_stat_F2-A34E1B740F-C87F-4B19-9CDC-C675BF3B6E11'),
(40, 12, '190619KeimaRbf1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/190619KeimaRbf1.xlsx0DE81C35-BB1E-4C95-A197-2FA7AB7552CA', 'server/vault/12/190619KeimaRbf1.xlsx0DE81C35-BB1E-4C95-A197-2FA7AB7552CA'),
(39, 12, 'Graph_stat_F5-A1', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/Graph_stat_F5-A1', 'server/vault/12/Graph_stat_F5-A1'),
(58, 12, 'Graph_stat_F5-A1.png', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/Graph_stat_F5-A1.png9CEBCD8F-5EB3-4FCA-800B-63B2F294A983', 'server/vault/12/Graph_stat_F5-A1.png9CEBCD8F-5EB3-4FCA-800B-63B2F294A983'),
(59, 13, '200312KeimaRbf1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/13/200312KeimaRbf1.xlsx', 'server/vault/13/200312KeimaRbf1.xlsx'),
(60, 13, 'Grap_stat_F5-A2', 'C:/WS/tools/wamp64/www/nanie/server/vault/13/Grap_stat_F5-A2', 'server/vault/13/Grap_stat_F5-A2'),
(61, 13, 'Marquage Keima Rbf1 (Posterieur).odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/13/Marquage-Keima-Rbf1-(Posterieur).odp', 'server/vault/13/Marquage-Keima-Rbf1-(Posterieur).odp'),
(62, 13, 'Marquage Keima Rbf1 anterieur vs posterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/13/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp', 'server/vault/13/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp'),
(63, 14, '190619KeimaDebcl.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/14/190619KeimaDebcl.xlsx', 'server/vault/14/190619KeimaDebcl.xlsx'),
(56, 12, 'Marquage Keima Rbf1 anterieur vs posterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/12/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp', 'server/vault/12/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp'),
(51, 5, 'toto.txt', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/toto.txt', 'server/vault/5/toto.txt'),
(64, 14, 'Graph-stat_F5-B1', 'C:/WS/tools/wamp64/www/nanie/server/vault/14/Graph-stat_F5-B1', 'server/vault/14/Graph-stat_F5-B1'),
(65, 14, 'Marquage Keima Debcl - Anterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/14/Marquage-Keima-Debcl---Anterieur.odp', 'server/vault/14/Marquage-Keima-Debcl---Anterieur.odp'),
(85, 15, 'toto.txt', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/toto.txt2C5CF076-5A9F-40A6-A70E-77355DBFB7DD', 'server/vault/15/toto.txt2C5CF076-5A9F-40A6-A70E-77355DBFB7DD'),
(84, 15, 'Mix Rbf1 et Debcl 200312 et 190619.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Mix-Rbf1-et-Debcl-200312-et-190619.xlsx613ABB14-FEA8-4D4B-A21B-6843871E66AB', 'server/vault/15/Mix-Rbf1-et-Debcl-200312-et-190619.xlsx613ABB14-FEA8-4D4B-A21B-6843871E66AB'),
(83, 15, 'Marquage Keima Rbf1 anterieur vs posterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp7CB66562-5CBD-442B-8CD7-071CD62207B3', 'server/vault/15/Marquage-Keima-Rbf1-anterieur-vs-posterieur.odp7CB66562-5CBD-442B-8CD7-071CD62207B3'),
(81, 15, 'Marquage Keima Debcl - Anterieur.odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Marquage-Keima-Debcl---Anterieur.odpBD69509D-2472-44D9-A97A-55D378016608', 'server/vault/15/Marquage-Keima-Debcl---Anterieur.odpBD69509D-2472-44D9-A97A-55D378016608'),
(82, 15, 'Marquage Keima Rbf1 (Posterieur).odp', 'C:/WS/tools/wamp64/www/nanie/server/vault/15/Marquage-Keima-Rbf1-(Posterieur).odp6E73CE1B-8689-4CAC-ABE5-AE0B8A441E67', 'server/vault/15/Marquage-Keima-Rbf1-(Posterieur).odp6E73CE1B-8689-4CAC-ABE5-AE0B8A441E67');

-- --------------------------------------------------------

--
-- Structure de la table `experience_listegenotype`
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
) ENGINE=MyISAM AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `experience_listegenotype`
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
(44, 14, 19, 13, 21, 1, 5, '2020-10-04 13:30:44'),
(47, 15, 6, 8, 16, 1, 3, '2020-10-04 15:11:20');

-- --------------------------------------------------------

--
-- Structure de la table `experience_resultatdestests`
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
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `experience_resultatdestests`
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
(13, 14, '2', '3', 1, 0.016, '4', '2020-10-04 13:30:44'),
(14, 15, '2', '1', 1, 1, '1', '2020-10-04 15:11:20');

-- --------------------------------------------------------

--
-- Structure de la table `initialesexperience`
--

DROP TABLE IF EXISTS `initialesexperience`;
CREATE TABLE IF NOT EXISTS `initialesexperience` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `initialesexperience`
--

INSERT INTO `initialesexperience` (`uid`, `nom`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D'),
(5, 'E');

-- --------------------------------------------------------

--
-- Structure de la table `marquagedesexperiences`
--

DROP TABLE IF EXISTS `marquagedesexperiences`;
CREATE TABLE IF NOT EXISTS `marquagedesexperiences` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `marquagedesexperiences`
--

INSERT INTO `marquagedesexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Dcp1'),
(3, 'Keima'),
(4, 'Ailes');

-- --------------------------------------------------------

--
-- Structure de la table `personnes`
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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `personnes`
--

INSERT INTO `personnes` (`uid`, `nom`, `email`, `alias`, `passwd`, `token`, `validite`) VALUES
(1, 'dd', 'dd@dd.com', 'dd', '1aabac6d068eef6a7bad3fdf50a05cc8', 'ea9ea1be88e99f774372be84e550cf71', '2020-10-04 16:21:19'),
(2, 'cc', 'cc@cc.cc', 'cc', 'e0323a9039add2978bf5b49550572c7c', '', '2020-01-01 00:00:00'),
(3, 'FAGES', '', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `territoireexperiences`
--

DROP TABLE IF EXISTS `territoireexperiences`;
CREATE TABLE IF NOT EXISTS `territoireexperiences` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `territoireexperiences`
--

INSERT INTO `territoireexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Vg'),
(3, 'eyeless');

-- --------------------------------------------------------

--
-- Structure de la table `typedetestdesexperiences`
--

DROP TABLE IF EXISTS `typedetestdesexperiences`;
CREATE TABLE IF NOT EXISTS `typedetestdesexperiences` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `typedetestdesexperiences`
--

INSERT INTO `typedetestdesexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Student'),
(3, 'Wallis'),
(4, 'Wilcoxon');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
