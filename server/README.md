# "Node JS - MongoDB with Mongoose and JWT: Async CRUD"

**Deploy by clicking the button above**
_Remember to add your .env variables in the deployed version_

**Description:**

This repository shares the code that I created while learning Node JS MongoDB and JWT, this code have user Authentication and user roles based Authorization (USER, EDITOR, ADMIN). The user can access specific routes and can't access Admin or editor routes, this worked using access token and using React-Router-Dom V6, if there data request to the APi the server will check the user roles and if the user roles can access the data the server will reply with a json object contains it, if not the user will get no users to display UNAUTHORIZED, the refresh token is stored inside HTTP only cookie which the hacker can't access it using JS.
When the application is running the main page will be public for all users which have links to go if user request admin editor or user page he will be redirected to Login page, if the user auth is true he can access the requested pages based on his roles which is the second security measure, the third and final security measure is when requesting or sending data to the server which the server will check the user roles and respond.
