create database avatar_db;
create user avatar_user@localhost;
set password for avatar_user@localhost = password('avatar_user');
grant ALL on avatar_db.* to avatar_user@localhost;

CREATE TABLE user_info (
USER_ID int(11) auto_increment,
USER_NAME varchar(255),
USER_PASSWORD varchar(255) ,
USER_FIRST_NAME varchar(255),
USER_LAST_NAME varchar(255),
USER_EMAIL varchar(255),
PRIMARY KEY (USER_ID)
) ;