-- CREATE DATABASE blog_db;
\c blog_db

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
-- DROP TABLE IF EXISTS reblogs;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255)
  -- avatar TEXT
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  text TEXT NOT NULL,
  img_url TEXT,
  user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
  -- timestamp
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  post_id INTEGER REFERENCES posts (id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
)

-- CREATE TABLE reblogs (
--   id SERIAL PRIMARY KEY,
--   posts_id INTEGER REFERENCES posts (id) ON DELETE CASCADE,
--   user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
-- )
