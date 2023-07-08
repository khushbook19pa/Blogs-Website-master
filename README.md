

# Blog Website

This project use the technologies like Nodejs, Express.js ,Nodemon, Mongoose, marked and Slugify

## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/69208178/126063766-8a7fccdf-dcaf-4879-9f9d-64de52d53a77.png)

  
## Authors

- [Rishabh Verma](https://github.com/aryan2621)

  ## Color Reference
This block consist of all the important steps that has been taken.

| Steps             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Starting setup |Start by installing the packages after initializing the
|| project by(npm init -y) by npm i mongoose express ejs
| setting the server| Setup the initial server at port 5000 or what you 
||like and visit to mongodb website and create a db there |
| making routes | In this step all the routes has be setup after "/articles" .
||For that make a routes-> articles.js and write your all the routes there |
|Making the Modal| Visit the Modal ->articles.js and write down the all the fields 
||excepts the function created there |
|Create the views|Create views->articles->which consist of 5 views and the index.ejs will at the homepage->at the
|| start page |
|Building of Files| Visit the Modal ->articles.js and write down the all the fields excepts the function 
||created there |
|Use of markdown ->in Html|Write the function in Modals for purifying the dom and make use of markdown in project|
|Deleting the Blog|To deleting the Blog as there is no special method so install methodoverride 
||and create your own method of deleting 
||by passing the id and making the form and placing button in it|

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_DB_URL`


  
## Deployment

After your project get finished just run

```
heroku login

```
Initialise the git repositary

```
git init 
git add.
git commit -m "Deployment"
git push heroku master

```
After some time your website will get deploy.

  
## Demo


https://mern-blog-website.herokuapp.com/

  
## Tech Stack

**Client:** HTML ,CSS ,JS ,Bootstrap
**Server:** MongoDB, Express, Nodejs, Slugify



  
