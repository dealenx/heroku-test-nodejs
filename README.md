![nodeJs-heroku](rsc/heroku_nodejs.png)

## NodeJs + Heroku

Simple hello-world app deployed on Heroku. [Hello-World App](https://twogg-nodejs.herokuapp.com/).

### What is Heroku

Heroku is a cloud Platform-as-a-Service (PaaS) supporting several programming languages that are used as a web application deployment model. Heroku is one of the first cloud platforms that exist, at the beginning supported only Ruby programming language, now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.

#### Create your app

First, you need to create a [Heroku](https://www.heroku.com/) account. It's free so go ahead and try!. 

After you got your account, login and click *apps* option, then *create app*. You only need a name and a region to deploy the App. Currently are USA and Europe runtime regions available.

![heroku-create_app](rsc/heroku-create_app.png)

### Deploy

#### Deployment method

*Heroku Git*: Use Heroku CLI, to use this option you need to follow [Heroku's started guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

*GitHub*: Connect your GitHub repo with Heroku. This is the easier one, first, you need to grant Heroku access, then select the repo and branch to deploy. 

*Dropbox*: Use your source code stored in Dropbox.

![heroku-deployment_sources](rsc/heroku-deployment_sources.png)

#### GitHub

Some functionalities when you use GitHub are Code diffs, manual and auto deploys, and activity feed.

#### Automatic deploys

Enables a chosen branch to be automatically deployed. Very useful if you have a production branch ready.

#### Manual deploy

Deploy the current state of your selected App's branch.

![heroku-manual_deploy](rsc/heroku-manual_deploy.png)

### Build Log

Very useful tool to follow your App's building.

```sh
-----> Node.js app detected
-----> Creating runtime environment
       ...
-----> Installing binaries
       engines.node (package.json):  unspecified
       engines.npm (package.json):   unspecified (use default)
       ...
-----> Building dependencies
       Installing node modules (package.json)
-----> Caching build
       Clearing previous node cache
       Saving 2 cacheDirectories (default):
       - node_modules
       - bower_components (nothing to cache)
-----> Build succeeded!
-----> Discovering process types
       Procfile declares types     -> (none)
       Default types for buildpack -> web
-----> Compressing...
       Done: 13.8M
-----> Launching...
       Released v22
       https://twogg-nodejs.herokuapp.com/ deployed to Heroku
```

![heroku-build_log](rsc/heroku-build_log.png)

More Info and references: [Heroku's About page](https://www.heroku.com/about) and [Wikipedia](https://en.wikipedia.org/wiki/Heroku).
