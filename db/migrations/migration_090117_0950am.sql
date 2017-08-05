\c placesToGo_dev ;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255)  NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS countries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)  NOT NULL
);


CREATE TABLE IF NOT EXISTS cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)  NOT NULL,
  country_id INTEGER REFERENCES countries(id)
);


CREATE TABLE IF NOT EXISTS placesToGo (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255)  NOT NULL,
  address VARCHAR(255)  NOT NULL,
  placeId VARCHAR(255),
  imageUrl TEXT   NULL,
  iconUrl   TEXT   NULL,
  plannedDate date,
  visitDate   date,
  rating   INTEGER,
  comment TEXT ,
  state VARCHAR(1)  NULL,
  city_id INTEGER REFERENCES cities(id) NULL,
  user_id INTEGER REFERENCES users(id) NULL
);

