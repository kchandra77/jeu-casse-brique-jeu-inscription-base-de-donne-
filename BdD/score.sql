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
-- Structure de la table `score`
--

DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `id_score` int(11) NOT NULL AUTO_INCREMENT,
  `id_joueurs` int(11) NOT NULL,
  `id_niveau` int(11) NOT NULL,
  `id_jeu` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `jour` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_score`),
  KEY `id_joueurs_idx` (`id_joueurs`),
  KEY `id_niveau1_idx` (`id_niveau`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `score`
--

INSERT INTO `score` (`id_score`, `id_joueurs`, `id_niveau`, `id_jeu`, `score`, `jour`) VALUES
(1, 3, 1, 1, 66, '2016-09-16 07:43:00'),
(2, 14, 1, 1, 4, '2015-05-13 08:26:45'),
(3, 12, 1, 1, 31, '2015-05-13 08:26:45'),
(4, 21, 1, 1, 45, '2015-05-13 08:26:45'),
(5, 15, 1, 1, 29, '2015-05-13 08:26:45'),
(6, 6, 1, 1, 35, '2015-05-13 08:26:45'),
(7, 20, 1, 1, 48, '2016-09-06 14:18:33'),
(8, 11, 1, 1, 49, '2015-05-13 08:26:45'),
(9, 17, 1, 1, 48, '2015-05-13 08:26:45'),
(11, 15, 1, 1, 9, '2015-05-13 08:26:45'),
(12, 19, 1, 1, 47, '2015-05-13 08:26:45'),
(13, 2, 1, 1, 8, '2015-05-13 08:26:45'),
(14, 4, 1, 1, 43, '2016-09-06 14:19:22'),
(15, 7, 1, 1, 9, '2015-05-13 08:26:45'),
(21, 29, 1, 1, 54, '2015-05-13 08:26:45');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `id_joueurs` FOREIGN KEY (`id_joueurs`) REFERENCES `joueurs` (`id_joueurs`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_niveau1` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id_niveau`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
