-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: test1
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `adminid` int NOT NULL,
  `apassword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`adminid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (121,'admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `cname` varchar(255) DEFAULT NULL,
  `ctype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Chess','6th'),(2,'Chess','7th'),(3,'Colouring','1st'),(4,'Colouring','2nd'),(5,'Painting','3rd'),(6,'Painting','4th'),(7,'Chess','5th'),(8,'Painting','5th'),(9,'Motor Skills','1st'),(10,'Motor Skills','2nd');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `ucontactno` varchar(255) DEFAULT NULL,
  `uemail` varchar(255) DEFAULT NULL,
  `ufname` varchar(255) DEFAULT NULL,
  `ulname` varchar(255) DEFAULT NULL,
  `upaddress` varchar(255) DEFAULT NULL,
  `upassword` varchar(255) DEFAULT NULL,
  `usaddress` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'9767577727','shripad@gmail.com','Shripad','Bhagat','Ambegon Bk','12345','Ambegon Bk pune');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `myorder`
--

DROP TABLE IF EXISTS `myorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `myorder` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `contactno` varchar(255) DEFAULT NULL,
  `ostatus` varchar(255) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `totalprice` float DEFAULT NULL,
  `uid` int DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myorder`
--

LOCK TABLES `myorder` WRITE;
/*!40000 ALTER TABLE `myorder` DISABLE KEYS */;
INSERT INTO `myorder` VALUES (2,NULL,'9767577727','Placed',2,500,1,'Shripad'),(3,NULL,'9767577727','Placed',4,1550,1,'Shripad'),(5,NULL,'9767577727','Placed',2,650,1,'Shripad'),(6,NULL,'9767577727','Placed',3,950,1,'Shripad');
/*!40000 ALTER TABLE `myorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `myorder_product`
--

DROP TABLE IF EXISTS `myorder_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `myorder_product` (
  `oid` int NOT NULL,
  `pid` int NOT NULL,
  KEY `FKgc31o639ilqvjj2p8kdw0hiep` (`pid`),
  KEY `FK7c3off8dbw3x1oid829h2m88o` (`oid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myorder_product`
--

LOCK TABLES `myorder_product` WRITE;
/*!40000 ALTER TABLE `myorder_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `myorder_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pidaudit`
--

DROP TABLE IF EXISTS `pidaudit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pidaudit` (
  `paid` int NOT NULL AUTO_INCREMENT,
  `oid` int DEFAULT NULL,
  `otime` date DEFAULT NULL,
  `pid` int DEFAULT NULL,
  PRIMARY KEY (`paid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pidaudit`
--

LOCK TABLES `pidaudit` WRITE;
/*!40000 ALTER TABLE `pidaudit` DISABLE KEYS */;
/*!40000 ALTER TABLE `pidaudit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(40) DEFAULT NULL,
  `pdesc` varchar(255) DEFAULT NULL,
  `pname` varchar(255) DEFAULT NULL,
  `pprice` double DEFAULT NULL,
  `pqty` int DEFAULT NULL,
  `prating` int DEFAULT NULL,
  `cid` int DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `FKcxmxpfdetdqdqm69d4cgbhotv` (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (5,NULL,'crayons included','Basic Colouring',300,10,4,3),(4,NULL,'easy moves in detail','Chess easy to moderate',250,25,3,1),(6,NULL,'Sheets,Cards included','Motor Skills-I',400,25,3,9),(7,NULL,'moderate moves and intro to high level','Chess moderate to high',550,25,5,2),(8,NULL,'sheets and sketch pens included','Basic to Moderate Colouring ',200,30,2,4);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productaudit`
--

DROP TABLE IF EXISTS `productaudit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productaudit` (
  `paid` int NOT NULL AUTO_INCREMENT,
  `pid` int DEFAULT NULL,
  `pname` varchar(255) DEFAULT NULL,
  `pprice` float DEFAULT NULL,
  `pqty` int DEFAULT NULL,
  `ptime` date DEFAULT NULL,
  PRIMARY KEY (`paid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productaudit`
--

LOCK TABLES `productaudit` WRITE;
/*!40000 ALTER TABLE `productaudit` DISABLE KEYS */;
/*!40000 ALTER TABLE `productaudit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16  0:46:57
