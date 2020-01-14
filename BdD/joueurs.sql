-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 24 nov. 2017 à 12:24
-- Version du serveur :  5.7.19
-- Version de PHP :  7.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cassebrique`
--

-- --------------------------------------------------------

--
-- Structure de la table `joueurs`
--

DROP TABLE IF EXISTS `joueurs`;
CREATE TABLE IF NOT EXISTS `joueurs` (
  `id_joueurs` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `pseudo` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  PRIMARY KEY (`id_joueurs`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `joueurs`
--

INSERT INTO `joueurs` (`id_joueurs`, `nom`, `prenom`, `pseudo`, `email`, `mdp`) VALUES
(1, 'ABATAN', 'Evan', 'login1', '', 'd503a61204e6c483d404cf12486456506a143aee63e5a0eb84b1bb419b641bf59670a2453f76ce345f57a889d70c81ca9da71492de9fb02914d0f2f74117da8b'),
(2, 'AIT MANSOUR', 'Inas', 'login2', '', 'mdp2'),
(3, 'BECKER', 'Maxime', 'login3', '', 'mdp3'),
(4, 'BERANGER', 'Aur', 'login4', '', 'mdp4'),
(5, 'BLIN', 'Florent', 'login5', '', 'mdp5'),
(6, 'CESARI', 'Jeffrey', 'login6', '', 'mdp6'),
(7, 'CHARLES', 'Dimitry', 'login7', '', 'mdp7'),
(8, 'CHARTIER', 'Pierre', 'login8', '', 'mdp8'),
(9, 'CHRISTON', 'Vincent', 'login9', '', 'mdp9'),
(10, 'CONTE-LAY', 'Corentin', 'login10', '', 'mdp10'),
(11, 'EDMOND', 'Josu', 'login11', '', 'mdp11'),
(12, 'FECCI', 'Florian', 'login12', '', 'mdp12'),
(13, 'JEAN', 'Guillaume', 'login13', '', 'mdp13'),
(14, 'KHAND', 'Aaditya', 'login14', '', 'mdp14'),
(15, 'LEDRU', 'Aur', 'login15', '', 'mdp15'),
(16, 'LOPES', 'Maxime', 'login16', '', 'mdp16'),
(17, 'LOUKILI', 'Sa', 'login17', '', 'mdp17'),
(18, 'MALATRAIT', 'Pierre', 'login18', '', 'mdp18'),
(19, 'MARQUISE', 'Teddy', 'login19', '', 'mdp19'),
(20, 'PALLIERE', 'Justin', 'login20', '', 'mdp20'),
(21, 'QUETIN', 'K', 'login21', '', 'mdp21'),
(22, 'REINO', 'Teddy', 'login22', '', 'mdp22'),
(23, 'SONG', 'Heng', 'login23', '', 'mdp23'),
(24, 'VALENTE', 'William', 'login24', '', 'mdp24'),
(25, 'VICAUT', 'Willy', 'login25', '', 'mdp25'),
(29, 'hagot', 'pascal', 'hag', 'prof.hagot@gmail.com', 'mdp1'),
(30, 'SNir1', 'CFA', 'cfa', 'mail@gmail.com', 'pass');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
