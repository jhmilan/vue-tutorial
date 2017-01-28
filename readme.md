## About this project

This is just a compilation of examples based on the awesome [Laracasts series about Vue 2](https://laracasts.com/series/learn-vue-2-step-by-step)

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
