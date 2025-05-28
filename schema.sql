Use  Waste_Management ;

CREATE TABLE user (
     id VARCHAR(50) PRIMARY kEY ,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);









-- SET SQL_SAFE_UPDATES = 0; 