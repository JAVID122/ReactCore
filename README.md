// npm is basically configuration for pakagage.json

// What is the job of a bundler?
Ans: Bundler basically bundles our app,it pakages our app properly so that it can be shipped to production lot of people 

// create react app uses web pack  and babel behind the scenes 

// here we will be using parcel as bundler

// there are two types of dependences that we can install one is the dev dependences and one are the normal dependences when we say dev dependency it means it is genrally requied for in our development right in our development phase normal dependences are used in production also

// so till now we run two cammands one is 

1 npm init and we configured Pakage.json

2.npm install 
-D parcel
and with this we confighred pakage-lock.json

this caret before   "parcel": "^2.16.4"  helps to automically upgarde to minor versions 

// package.json it is a configuration for npm it keeeps a track what version of the pakage is installed into our system

pakage-lock.json keeps track of exact version  of dependencies that is beong installed   

node modules: node modules contains all the code that we fetched form npm

pakage json is a configuration for our npm  node modules is kind of like a database it contains the actual data of that  dependencies right of those packages that our project needs 


just like we have npm similarly we have something known as npx npm when we do npm it means we are just calling cammand of npm. npx means executing a package  

npm(instals)
npx(executes)

npx executes tha pakage  we are executing parcel now 



# Parcel

-- DEV Build
-- Local Server
-- Automatically refreshing our page becoz of HMR (hot module replacement)

-- File watcing algorithem - written in C++ 

-- Faster builds -- catching   

-- catching every thing we do

-- Minification
-- Image optimisation
-- Bundling
-- Compressing

-- Consistent hashing
-- code Splitting
-- Differential Bundling  - support old browsers

-- Diagonostic
-- error handlimg

