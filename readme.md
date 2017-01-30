## About this project

This is just a compilation of examples based on the awesome [Laracasts series about Vue 2](https://laracasts.com/series/learn-vue-2-step-by-step)

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
