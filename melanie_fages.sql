-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : sam. 03 oct. 2020 à 11:13
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
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `experience`
--

INSERT INTO `experience` (`uid`, `experiencestringid`, `daterealisationexperience`, `faiteparqui`, `dateinsert`) VALUES
(6, 'F1-A2', '2020-02-04', 3, '2020-10-02 10:56:28'),
(5, 'F1-A1', '2019-04-30', 3, '2020-10-02 10:44:04'),
(4, 'd0-A0', '2019-01-03', 1, '2020-09-29 19:49:48');

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
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `experience_file`
--

INSERT INTO `experience_file` (`uid`, `idexperience`, `nom`, `path`, `url`) VALUES
(5, 5, '190403Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/5/190403Dcp-1PINK1RBF1.xlsx', 'server/vault/5/190403Dcp-1PINK1RBF1.xlsx'),
(4, 4, 'Contrat doctoral M%6D%65%20%46%41%47%45%53%20%4D%C3%A9%6C%61%6E%69%65%20%20%32%30%32%30%2D%32%30%32%33%2E%70%64%66_3.pdf', 'C:/WS/tools/wamp64/www/nanie/server/vault/4/Contrat-doctoral-M%6D%65%20%46%41%47%45%53%20%4D%C3%A9%6C%61%6E%69%65%20%20%32%30%32%30%2D%32%30%32%33%2E%70%64%66_3.pdf', 'server/vault/4/Contrat-doctoral-M%6D%65%20%46%41%47%45%53%20%4D%C3%A9%6C%61%6E%69%65%20%20%32%30%32%30%2D%32%30%32%33%2E%70%64%66_3.pdf'),
(7, 6, '200204Dcp-1PINK1RBF1.xlsx', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/200204Dcp-1PINK1RBF1.xlsx', 'server/vault/6/200204Dcp-1PINK1RBF1.xlsx'),
(8, 6, 'Graphique stat F1-A2.jpg', 'C:/WS/tools/wamp64/www/nanie/server/vault/6/Graphique-stat-F1-A2.jpg', 'server/vault/6/Graphique-stat-F1-A2.jpg');

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
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
(14, 5, 8, 13, 18, 1, 11, '2020-10-02 10:48:18');

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `experience_resultatdestests`
--

INSERT INTO `experience_resultatdestests` (`uid`, `idexperience`, `territoire`, `marquage`, `SGeneral`, `SComparatif`, `typedetest`, `dateinsert`) VALUES
(1, 1, '3', '3', 8, 30, '3', '2020-09-20 07:43:46'),
(2, 2, '3', '3', -9, -19, '3', '2020-09-20 08:56:51'),
(3, 3, '2', '2', 6, 1, '1', '2020-09-21 14:43:26'),
(4, 5, '2', '2', 0.0000012, 0.00002, '3', '2020-10-02 10:48:18');

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
(1, 'dd', 'dd@dd.com', 'dd', '1aabac6d068eef6a7bad3fdf50a05cc8', '831b57736b738c32ead9174ea5830389', '2020-10-02 11:53:25'),
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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `typedetestdesexperiences`
--

INSERT INTO `typedetestdesexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Student'),
(3, 'wallis');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
