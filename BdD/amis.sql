-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 24 nov. 2017 à 12:23
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
-- Structure de la table `amis`
--

DROP TABLE IF EXISTS `amis`;
CREATE TABLE IF NOT EXISTS `amis` (
  `id_amis` int(11) NOT NULL AUTO_INCREMENT,
  `id_joueurs` int(11) NOT NULL,
  `id_joueursAmi` int(11) NOT NULL,
  `id_jeu` int(11) NOT NULL,
  PRIMARY KEY (`id_amis`),
  KEY `fk_amis_joueurs1_idx` (`id_joueurs`),
  KEY `fk_amis_joueurs2_idx` (`id_joueursAmi`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `amis`
--

INSERT INTO `amis` (`id_amis`, `id_joueurs`, `id_joueursAmi`, `id_jeu`) VALUES
(17, 29, 3, 1),
(23, 29, 11, 1),
(24, 2, 3, 1),
(39, 2, 1, 1),
(40, 2, 10, 1),
(41, 2, 7, 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `amis`
--
ALTER TABLE `amis`
  ADD CONSTRAINT `fk_amis_joueurs1` FOREIGN KEY (`id_joueurs`) REFERENCES `joueurs` (`id_joueurs`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_amis_joueurs2` FOREIGN KEY (`id_joueursAmi`) REFERENCES `joueurs` (`id_joueurs`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
