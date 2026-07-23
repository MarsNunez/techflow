-- Base de Datos: techflow_db
-- Sistema de Gestión de Consultas - TechFlow
-- Fecha: 23/07/2026

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS techflow_db;
USE techflow_db;

-- Tabla: contactos
-- Descripción: Almacena las consultas y mensajes de contacto de los clientes
CREATE TABLE IF NOT EXISTS contactos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  asunto VARCHAR(150) NOT NULL,
  mensaje LONGTEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado ENUM('nuevo', 'leído', 'respondido') DEFAULT 'nuevo',
  INDEX idx_email (email),
  INDEX idx_fecha (fecha)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: usuarios_admin
-- Descripción: Usuarios administradores del sistema
CREATE TABLE IF NOT EXISTS usuarios_admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  activo BOOLEAN DEFAULT TRUE,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_usuario (usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: servicios
-- Descripción: Catálogo de servicios ofrecidos por TechFlow
CREATE TABLE IF NOT EXISTS servicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descripcion TEXT NOT NULL,
  caracteristicas LONGTEXT,
  precio DECIMAL(10, 2),
  estado ENUM('activo', 'inactivo') DEFAULT 'activo',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: proyectos
-- Descripción: Galería de proyectos completados
CREATE TABLE IF NOT EXISTS proyectos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descripcion TEXT NOT NULL,
  imagen_url VARCHAR(255),
  fecha_completacion DATE,
  estado ENUM('completado', 'en_proceso', 'cancelado') DEFAULT 'completado',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos iniciales: Servicios
INSERT INTO servicios (titulo, descripcion, caracteristicas) VALUES
('Desarrollo Web Personalizado', 'Sitios web completamente personalizados y adaptados a las necesidades específicas de tu negocio.', 'Diseño responsivo|SEO optimizado|Performance óptimo|Seguridad garantizada'),
('Tiendas E-commerce', 'Plataformas de comercio electrónico completas y funcionales para vender en línea.', 'Gestión de inventario|Pasarelas de pago|Analytics integrado|Móvil optimizado'),
('Diseño UX/UI', 'Interfaces atractivas e intuitivas que mejoran la experiencia del usuario.', 'Investigación UX|Prototipos interactivos|Usability testing|Design system'),
('Aplicaciones Web Progresivas', 'Aplicaciones modernas que funcionan como apps nativas desde el navegador.', 'Offline functionality|Push notifications|Instalable|Rápidas y seguras'),
('Mantenimiento y Soporte', 'Servicios continuos para mantener tu sitio actualizado, seguro y funcionando.', 'Actualizaciones mensuales|Monitoreo 24/7|Backups automáticos|Soporte técnico'),
('Consultoría Digital', 'Asesoramiento experto para optimizar tu presencia digital y estrategia online.', 'Auditoría digital|Estrategia digital|Plan de acción|Implementación');

-- Datos iniciales: Proyectos
INSERT INTO proyectos (titulo, descripcion, fecha_completacion) VALUES
('Proyecto E-commerce', 'Plataforma de comercio electrónico para empresa de retail', '2025-06-15'),
('Rediseño de Identidad', 'Modernización completa de sitio web corporativo', '2025-07-20'),
('App Móvil Innovadora', 'Aplicación web progresiva con funcionalidades avanzadas', '2025-08-10'),
('Dashboard Analytics', 'Sistema de analytics personalizado en tiempo real', '2025-09-05'),
('Portal de Servicios', 'Plataforma de gestión de servicios para clientes', '2025-10-12'),
('Plataforma SaaS', 'Solución cloud para gestión empresarial', '2025-11-30');

-- Índices adicionales para optimizar consultas
CREATE INDEX idx_contactos_estado ON contactos(estado);
CREATE INDEX idx_servicios_estado ON servicios(estado);
CREATE INDEX idx_proyectos_estado ON proyectos(estado);

-- Fin del script SQL
