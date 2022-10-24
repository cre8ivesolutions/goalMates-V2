CREATE DATABASE goalMates;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY, 
    username VARCHAR(25),
    email  VARCHAR(25),
    password  VARCHAR(25),
    user_location  VARCHAR(25)
);






-- search your computer for sql shell or psql
-- for server, database, port and username each field can be left blank. For the password field, type your password - it wont appear to be typing but it is! Click enter.
-- // in your PSQL shell terminal, use command < < psql -U pstgres > and then enter your password
-- once you are in the db, copy the above code and put it in your terminal to create the db and tables
-- use command \c goalMates 
-- commands to know \l = lists your databases, \c <dbname> will put you in the db, \dt  will show all tables in the database you are in
-- run SELECT * FROM users; to see the infomation 