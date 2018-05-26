npm init --y

npm install webpack webpack-cli --save-dev
npm install angular lodash --save
npm install http-server npx -g

# Open package.json. Add and remove the respective lines
+   "private": true,
-   "main": "index.js",

cp -R ../_blank_npm/ ./

npx webpack

# npx webpack --config webpack.config.js

http-server -a localhost -p 8000 -c-1 ./dist
