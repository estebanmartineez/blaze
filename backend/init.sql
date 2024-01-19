CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  team_id INTEGER UNIQUE,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(100),
  badge VARCHAR(255) NOT NULL
);

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  player_id INTEGER UNIQUE,
  image VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  number VARCHAR(20),
  country VARCHAR(100),
  type VARCHAR(100),
  age INT,
  is_captain BOOLEAN,
  player_rating VARCHAR(10),
  team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE
);

CREATE TABLE coaches (
  id SERIAL PRIMARY KEY,
  coach_id INTEGER UNIQUE,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(100),
  age INT,
  team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE
);
