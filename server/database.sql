CREATE DATABASE yachartDB

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE charts (
	chart_id SERIAL PRIMARY KEY,
	chart_name VARCHAR(255),
	chart_description VARCHAR(255),
	chart_data VARCHAR(255)
);