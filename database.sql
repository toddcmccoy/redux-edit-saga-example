-- use database: redux_edit_example

-- create table
CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	github_name varchar(255)
);

-- some data
INSERT INTO students (github_name) VALUES ('kdszafranski'), ('DoctorHowser');

UPDATE students SET github_name = $1 WHERE id = $2;