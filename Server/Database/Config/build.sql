BEGIN;
DROP TABLE IF EXISTS users,
posts,
comments CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) NOT NULL DEFAULT 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
    password VARCHAR(255) NOT NULL
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE,
    content TEXT NOT NULL
);
COMMIT;