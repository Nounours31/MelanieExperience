-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Sep 13, 2020 at 08:40 PM
-- Server version: 10.2.14-MariaDB
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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `chromosomes`
--

INSERT INTO `chromosomes` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Pink'),
(3, 'Decl'),
(4, 'vlacz');

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `initialesexperience`
--

DROP TABLE IF EXISTS `initialesexperience`;
CREATE TABLE IF NOT EXISTS `initialesexperience` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `initialesexperience`
--

INSERT INTO `initialesexperience` (`uid`, `nom`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D');

-- --------------------------------------------------------

--
-- Table structure for table `marquagedesexperiences`
--

DROP TABLE IF EXISTS `marquagedesexperiences`;
CREATE TABLE IF NOT EXISTS `marquagedesexperiences` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nom` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `marquagedesexperiences`
--

INSERT INTO `marquagedesexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Dcp1'),
(3, 'Kema');

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
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `personnes`
--

INSERT INTO `personnes` (`uid`, `nom`, `email`, `alias`, `passwd`, `token`, `validite`) VALUES
(1, 'dd', 'dd@dd.com', 'dd', '1aabac6d068eef6a7bad3fdf50a05cc8', '', '2020-01-01 00:00:00'),
(2, 'cc', 'cc@cc.cc', 'cc', 'e0323a9039add2978bf5b49550572c7c', '', '2020-01-01 00:00:00');

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `typedetestdesexperiences`
--

INSERT INTO `typedetestdesexperiences` (`uid`, `nom`) VALUES
(1, '-'),
(2, 'Student'),
(3, 'wallis');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
