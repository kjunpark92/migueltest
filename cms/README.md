# cms

Project setup

install mongoDB

follow these instructions https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514

go to the MongoDB\Server\[version ex. 4.0]\bin> in terminal and run mongoDB by writing mongo in the bin folder


1. Install the latest Node.js and npm.
2. Run npm install in the app directory with Terminal.
3. Run npm run dev for development, or npm run build && npm start for production.
4. Make sure your Strapi project is running at http://localhost:1337 (with the Upload plugin installed).

go to http://localhost:1337/users to get the infomation from the database table users which is linked with the books table in the same database

*make sure you have both mongoDB and npm start in different terminals

*since the database is in you localhost you have to create a collections with the names users and books

** -> means type of **

*you have to populate the books collection with the attributes "title" -> string(req && uniq), "free" -> boolean(req), "users" which is linked to the collection "users" via "books"

*you have to create a user in the "users" collection with attributes "username" -> string(req && uniq), "password" -> password(req), "books" which is linked to colllection "books" via "users" with the properity "dominant" -> boolean(true)

*you have to then link all the books in the collection "books" with the properity "free" = "true" to the user you have created and link three with "free" = "false" to the user as well