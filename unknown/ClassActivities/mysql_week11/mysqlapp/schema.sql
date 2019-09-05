DROP DATABASE IF EXISTS retailstore_db;
CREATE DATABASE retailstore_db;

USE retailstore_db;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ('Uncharted 4', 'Video Games', 49.95, 150),
('Doom','Video Games',59.99,200),
('Crate of Spam', 'Food and Drink',24.50,50),
('Cool Shades','Apparel',29.99,25),
('Denim Jeans','Apparel',49.99,100),
('Mad Max','Films',12.75,200),
('Monopoly', 'Board Games', 29.99,30),
('Rubics Cube','Board Games',9.99,25),
('Wizard','Board Games',4.75,100),
('Terrible Towel','Necessity',9.99,20);

SELECT * FROM products;

