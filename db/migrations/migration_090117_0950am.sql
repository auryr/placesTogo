\c placesToGo_dev ;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255)  NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  comment text NOT NULL,
  commentDate date;
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
  detail TEXT ,
  state VARCHAR(1)  NULL,
  city_id INTEGER REFERENCES cities(id) NULL,
  user_id INTEGER REFERENCES users(id) NULL
);

