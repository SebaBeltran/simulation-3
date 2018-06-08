create table users (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic text
);

insert into users (username, password, profile_pic)
values ('Luis', 'Luis-1234', 'https://robohash.org/ed');

create table posts (
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer REFERENCES users(id)
);

insert into posts (title, img, content, author_id)
values ('My very first post, ever', 'https://cdn.dribbble.com/users/1240533/screenshots/4679670/aigasf_designweek_06.jpg', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 1)


select * from users
join posts on users.id = posts.author_id


select * from users
where username = $1 and password =$2

