[![Build Status](https://travis-ci.org/chiragdoctor/app-albums.svg?branch=master)](https://travis-ci.org/chiragdoctor/app-albums)

# app-albums

This is an app based on Angular and Nodejs and MongoDB. It connects to spotify using passport-spotify strategy and obtains access_token to get Iron Maidain Albums. 

To run the app locally you need to checkout the code fone github using this link 

``git@github.com:chiragdoctor/app-albums.git``

then run,

``node server.js``

app is hosted on port 

``http://localhost:5123``

TO run the test use command 

`` npm test ``


Passport Authentication 
----
In this project passport authentication is a an optionaal feature based on the requirment to get albums. It is implemeted keeping in mind future scope, if we will need a berear's token to acccess restricted resources of spotify. ( [Spotify API Reference](https://developer.spotify.com/web-api/endpoint-reference/)) 

Continious Integration 
----
Travis is used here for continious integration, once code is checked into master branch it will perform all the steps defined in .travis.yml file. 

- Checkout the code 
- install environment on which code needs to run.
- install dependency modules
- finally, run npm test to verify if the build is passing. 

To Production 
----
Heroku is used as tool to make album app available to the user. It can be access at this url 

[https://thawing-tundra-7824.herokuapp.com/](https://thawing-tundra-7824.herokuapp.com/#/albums)


Improvements
---

- Interate travis to heroku, so once if the build passes it can pushed to any environment(dev/stage/production).
- Adding a domain name in Heroku (partial achived).

