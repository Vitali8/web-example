-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Хост: mariadb:3306
-- Час створення: Лис 13 2019 р., 17:36
-- Версія сервера: 10.4.8-MariaDB-1:10.4.8+maria~bionic
-- Версія PHP: 7.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `library`
--
CREATE DATABASE IF NOT EXISTS `library` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `library`;

-- --------------------------------------------------------

--
-- Структура таблиці `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `surname` tinytext NOT NULL,
  `patronymic` tinytext DEFAULT NULL,
  `pseudonym` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `authors`
--

INSERT INTO `authors` (`id`, `name`, `surname`, `patronymic`, `pseudonym`) VALUES
(1, 'Аліса', 'Розенбаум', `Зінов\'євна`, 'Айн Ренд'),
(2, 'Теодор', 'Драйзер', NULL, NULL),
(3, 'Франц', 'Кафка', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблиці `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `authorId` int(11) NOT NULL,
  `publicationDate` char(5) DEFAULT '1900',
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `books`
--

INSERT INTO `books` (`id`, `name`, `authorId`, `publicationDate`, `description`) VALUES
(1, 'Атлант розправив плечі', 1, '1957', NULL),
(2, 'Джерело', 1, '1943', NULL),
(3, 'Гімн', 1, '1938', NULL),
(4, 'Фінансист', 2, '1912', NULL),
(5, 'Титан', 2, '1914', NULL),
(6, 'Стоїк', 2, '1947', NULL),
(7, 'Процес', 3, '1925', NULL),
(8, 'Замок', 3, '1926', NULL),
(9, 'Америка', 3, '1927', NULL);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_authors_fk` (`authorId`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_authors_fk` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
