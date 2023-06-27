CREATE TABLE employee_names(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	dob DATE NOT NULL
);

CREATE TABLE employee_roles(
	id serial PRIMARY KEY,
	department VARCHAR(20) NOT NULL,
	full_time boolean NOT NULL,
	date_hired DATE NOT NULL,
	employee_id INT NOT NULL REFERENCES employee_names
	
);

CREATE TABLE employee_salaries(
	id SERIAL PRIMARY KEY,
	salary INT NOT NULL,
	yearly_raise INT NOT NULL,
	employee_id INT NOT NULL REFERENCES employee_names
);

CREATE TABLE employee_contacts(
	id SERIAL PRIMARY KEY,
	phone VARCHAR(20),
	email VARCHAR (30),
	employee_id int NOT NULL REFERENCES employee_names
);

INSERT INTO employee_names (first_name, last_name, dob) VALUES
('Andrew', 'Luce', '08-16-1995'),
('Janet', 'Smith', '04-24-1990'),
('Marcus', 'Chen', '06-05-1988'),
('Rebecca', 'Forbes', '01-31-1994');

INSERT INTO employee_roles (department, full_time, date_hired, employee_id) VALUES
('sales', true, '04-16-2022', 1),
('accounting', true, '09-24-2020', 3),
('human resources', false, '10-15-2021', 4),
('sales', false, '01-04-2023', 2);

INSERT INTO employee_salaries (salary, yearly_raise, employee_id) VALUES
(95000, 4000, 4),
(88500, 4000, 2),
(89000, 4500, 1),
(91000, 3800, 3);

INSERT INTO employee_contacts (phone, email, employee_id) VALUES
	(6469849090, 'andrew.luce@gmail.com', 1),
	(7180430555, 'janet.smith@yahoo.com', 2),
	(9170384400, 'rebecca.forbes@gmail.com', 4),
	(6462028402, 'marcus.chen@gmail.com', 3);

SELECT * FROM employee_names;
SELECT * FROM employee_roles;
SELECT * FROM employee_contacts;
SELECT * FROM employee_salaries;

-- DROP TABLE employee_salaries;
-- DROP TABLE employee_roles;
-- DROP TABLE employee_contacts;
-- DROP TABLE employee_names;

