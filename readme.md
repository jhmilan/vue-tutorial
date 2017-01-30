## About this project

This is just a compilation of examples based on the awesome [Laracasts series about Vue 2](https://laracasts.com/series/learn-vue-2-step-by-step)

### Lesson 27. SPA and Backend
Some stuff than we run in the console

```
php artisan make:model Status -m
#change .env so DB_CONNECTION is sqlite, then
touch database/database.sqlite
php artisan tinker
#use tinker to create some data in the deatabase
npm install moment --save
```


### Lesson 26. Vue routing
As Jeffrey explaing we could use any other backend but we are using laravel. In our case:

```
cd laravel-lessons
laravel new lesson26
```

By the time we run this (Jan, 30 2016) we pulled L5.4 then we edited `./laravel-lessons/lesson26/package.json` and remove some dependecies.

Notice that we are not copying the `./laravel-lessons/lesson26/node_modules/laravel-mix/setup/webpack.config.js` because we are using a merge approach following [this guide](https://laravel.com/docs/5.4/mix#custom-webpack-configuration). In case we need to override some webpack config we'll go for `mix.webpackConfig({})`



### Lesson 23. Laravel Mix

Think about Laravel Mix as an Elixir replacement (Elixir + Gulp was the pre-5.3 combo to manage assets in Laravel). Laravel Mix is a configuration layer on top of webpack. In case you want to customize your webpack configuration:

Laravel 5.3: create a ./webpack.config.js
Laravel 5.4: follow [this guide](https://laravel.com/docs/5.4/mix#custom-webpack-configuration)

Commands to run:

```
npm install laravel-mix --save-dev
```

Lesson 23 source files are including an example of code spliting by extracting libraries to a vendor file. It is a good idea that helps long-term cache when a lot of changes are done to your files.

### Lesson 22. Console commands

```
# module bundler (webpack, browserify)

npm install webpack@2.2.0 --save-dev

# edit webpack.config.js
node_modules/.bin/webpack

npm install vue --save-dev
npm install axios --save-dev

node_modules/.bin/webpack --hide-modules --watch
# just not to forget, we move this to package.json scripts section like so
#
# {
#   "webpack": "webpack --hide-modules",
#   "dev": "webpack --hide-modules --watch"
# }
#
# now we can run 

npm run dev


```
