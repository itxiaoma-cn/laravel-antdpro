# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 124.222.238.190 (MySQL 5.7.36)
# Database: laravel-dev
# Generation Time: 2023-08-06 00:38:22 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table departments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `departments`;

CREATE TABLE `departments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;

INSERT INTO `departments` (`id`, `name`, `created_at`, `updated_at`)
VALUES
	(1,'市场部',NULL,NULL),
	(2,'研发部',NULL,NULL);

/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table failed_jobs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table menus
# ------------------------------------------------------------

DROP TABLE IF EXISTS `menus`;

CREATE TABLE `menus` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '菜单名称',
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '图标',
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '路径',
  `component` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '组件名称',
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '父级ID',
  `permission_id` int(11) NOT NULL DEFAULT '0' COMMENT '权限ID',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;

INSERT INTO `menus` (`id`, `name`, `icon`, `path`, `component`, `parent_id`, `permission_id`, `created_at`, `updated_at`)
VALUES
	(1,'系统管理','','/auth','',0,1,NULL,NULL),
	(2,'角色管理','','/auth/roles','./auth/roles',1,2,NULL,NULL),
	(3,'用户管理','','/auth/users','./auth/users',1,3,NULL,NULL),
	(4,'权限管理','','/auth/permissions','./auth/permissions',1,4,NULL,NULL),
	(5,'菜单管理','','/auth/menus','./auth/menus',1,5,NULL,NULL),
	(6,'公司管理','','/company','',0,6,NULL,NULL),
	(7,'部门管理','','/company/departments','./company/departments',6,7,NULL,NULL);

/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;

INSERT INTO `migrations` (`id`, `migration`, `batch`)
VALUES
	(1,'2014_10_12_000000_create_users_table',1),
	(2,'2014_10_12_100000_create_password_resets_table',1),
	(3,'2019_08_19_000000_create_failed_jobs_table',1),
	(4,'2019_12_14_000001_create_personal_access_tokens_table',1),
	(6,'2023_08_04_072246_modify_users',2),
	(7,'2023_08_04_102028_create_menus',3),
	(8,'2023_08_04_102208_create_roles',3),
	(9,'2023_08_04_102343_create_permissions',3),
	(10,'2023_08_04_102536_create_role_permissions',3),
	(11,'2023_08_04_103443_create_user_roles',3),
	(13,'2023_08_05_030154_create_departments',4);

/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table password_resets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '父级ID',
  `level` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;

INSERT INTO `permissions` (`id`, `name`, `parent_id`, `level`, `created_at`, `updated_at`)
VALUES
	(1,'系统管理',0,0,NULL,NULL),
	(2,'角色管理',1,1,NULL,NULL),
	(3,'用户管理',1,1,NULL,NULL),
	(4,'权限管理',1,1,NULL,NULL),
	(5,'菜单管理',1,1,NULL,NULL),
	(6,'公司管理',0,0,NULL,NULL),
	(7,'部门管理',6,1,NULL,NULL),
	(8,'角色列表',2,2,NULL,NULL),
	(9,'添加角色',2,2,NULL,NULL),
	(10,'修改角色',2,2,NULL,NULL),
	(11,'删除角色',2,2,NULL,NULL),
	(15,'用户列表',3,2,NULL,NULL),
	(16,'添加用户',3,2,NULL,NULL),
	(17,'修改用户',3,2,NULL,NULL),
	(18,'删除用户',3,2,NULL,NULL),
	(19,'权限列表',4,2,NULL,NULL),
	(20,'添加权限',4,2,NULL,NULL),
	(21,'修改权限',4,2,NULL,NULL),
	(22,'删除权限',4,2,NULL,NULL),
	(23,'菜单列表',5,2,NULL,NULL),
	(24,'添加菜单',5,2,NULL,NULL),
	(25,'修改菜单',5,2,NULL,NULL),
	(26,'删除菜单',5,2,NULL,NULL),
	(27,'部门列表',7,2,NULL,NULL),
	(28,'添加部门',7,2,NULL,NULL),
	(29,'修改部门',7,2,NULL,NULL),
	(30,'删除部门',7,2,NULL,NULL);

/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table personal_access_tokens
# ------------------------------------------------------------

DROP TABLE IF EXISTS `personal_access_tokens`;

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table role_permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `role_permissions`;

CREATE TABLE `role_permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `permission_id` int(11) NOT NULL DEFAULT '0' COMMENT '权限ID',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;

INSERT INTO `role_permissions` (`id`, `role_id`, `permission_id`, `created_at`, `updated_at`)
VALUES
	(29,4,6,NULL,NULL),
	(30,4,7,NULL,NULL),
	(31,4,27,NULL,NULL),
	(32,4,28,NULL,NULL),
	(33,4,29,NULL,NULL),
	(34,4,30,NULL,NULL),
	(35,3,6,NULL,NULL),
	(36,3,7,NULL,NULL),
	(37,3,27,NULL,NULL),
	(38,3,28,NULL,NULL),
	(39,3,29,NULL,NULL),
	(40,3,30,NULL,NULL);

/*!40000 ALTER TABLE `role_permissions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table roles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`)
VALUES
	(1,'超级管理员','2023-08-05 00:00:00','2023-08-05 00:00:00'),
	(2,'运维','2023-08-05 00:00:00','2023-08-05 00:00:00'),
	(3,'测试','2023-08-05 12:12:33','2023-08-05 13:15:35'),
	(4,'运营','2023-08-05 12:39:19','2023-08-05 13:10:59');

/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_roles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_roles`;

CREATE TABLE `user_roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;

INSERT INTO `user_roles` (`id`, `user_id`, `role_id`, `created_at`, `updated_at`)
VALUES
	(1,1,1,NULL,NULL),
	(3,5,3,NULL,NULL),
	(6,2,2,NULL,NULL);

/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '男',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '在职',
  `department_id` int(11) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `email`, `avatar`, `gender`, `status`, `department_id`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`)
VALUES
	(1,'admin','admin@admin.com','https://blog.itxiaoma.cn/img/avatar1.jpg','男','在职',2,NULL,'$2y$10$zbCsho.oqMk0eME0HYVxzO4GzwiU2a8p1o/2Y20Khd9ypx/iiLjW2',NULL,'2023-08-04 05:58:15','2023-08-04 05:58:15'),
	(2,'admin1','admin@admin.com1','https://blog.itxiaoma.cn/img/avatar1.jpg','男','在职',NULL,NULL,'$2y$10$zbCsho.oqMk0eME0HYVxzO4GzwiU2a8p1o/2Y20Khd9ypx/iiLjW2',NULL,'2023-08-04 05:58:15','2023-08-04 05:58:15'),
	(3,'admin2','admin@admin.com2','https://blog.itxiaoma.cn/img/avatar1.jpg','男','在职',NULL,NULL,'$2y$10$zbCsho.oqMk0eME0HYVxzO4GzwiU2a8p1o/2Y20Khd9ypx/iiLjW2',NULL,'2023-08-04 05:58:15','2023-08-04 05:58:15'),
	(4,'admin3','admin@admin.com3','https://blog.itxiaoma.cn/img/avatar1.jpg','男','在职',NULL,NULL,'$2y$10$zbCsho.oqMk0eME0HYVxzO4GzwiU2a8p1o/2Y20Khd9ypx/iiLjW2',NULL,'2023-08-04 05:58:15','2023-08-04 05:58:15'),
	(5,'测试一','test@test.com','https://blog.itxiaoma.cn/img/avatar1.jpg','男','在职',2,NULL,'$2y$10$2gm0HYcEyMIx9h4kz9R5b.F5POR.4K7Ispa8youaEURRW0YCSEhHG',NULL,'2023-08-04 05:58:15','2023-08-05 14:38:47');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
