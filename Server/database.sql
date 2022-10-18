CREATE DATABASE  goalMates;

CREATE TABLE profile(
    user_id SERIAL PRIMARY KEY,
    username varchar(12),
    email varchar(25),
    user_location varchar(25),
    join_date timestamp,
    profile_pic image,



    description VARCHAR(255)
);