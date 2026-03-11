DROP DATABASE IF EXISTS trouve_ton_artisan;
CREATE DATABASE trouve_ton_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trouve_ton_artisan;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(120) NOT NULL UNIQUE
);

CREATE TABLE specialites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(120) NOT NULL UNIQUE,
    category_id INT NOT NULL,
    CONSTRAINT fk_specialite_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    ville VARCHAR(120) NOT NULL,
    a_propos TEXT NOT NULL,
    email VARCHAR(150) NOT NULL,
    site_web VARCHAR(255) NULL,
    top_artisan BOOLEAN NOT NULL DEFAULT FALSE,
    image_url VARCHAR(255) NULL,
    specialite_id INT NOT NULL,
    CONSTRAINT fk_artisan_specialite
        FOREIGN KEY (specialite_id) REFERENCES specialites(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);