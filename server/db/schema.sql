DROP DATABASE IF EXISTS pizzeria_db;
CREATE DATABASE pizzeria_db;

-- CREATE TABLE User (
--   id INT NOT NULL AUTO_INCREMENT,
--   username VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   firebaseUid VARCHAR(255) NOT NULL,
--   createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (id),
--   UNIQUE KEY (email),
--   UNIQUE KEY (firebaseUid)
-- );

-- CREATE TABLE Pizza (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   price DECIMAL(10, 2) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE Order (
--   id INT NOT NULL AUTO_INCREMENT,
--   userId INT NOT NULL,
--   orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   total DECIMAL(10, 2) NOT NULL,
--   status ENUM('pending', 'paid', 'shipped') DEFAULT 'pending',
--   PRIMARY KEY (id),
--   FOREIGN KEY (userId) REFERENCES User(id)
-- );

-- CREATE TABLE OrderPizza (
--   id INT NOT NULL AUTO_INCREMENT,
--   orderId INT NOT NULL,
--   pizzaId INT NOT NULL,
--   quantity INT NOT NULL,
--   price DECIMAL(10, 2) NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (orderId) REFERENCES Order(id),
--   FOREIGN KEY (pizzaId) REFERENCES Pizza(id)
-- );
