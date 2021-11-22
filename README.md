# Hades Boon Calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I left the above text in here because I figure, might as well make sure no one thinks I actually built an entire moderately functional app environment all on my own.

If you're reading this, you probably want to [go to the main site (not actually active yet)](https://geekkid1.github.io/hades-boon-calc), but if you're here to modify the app for yourself, then welcome! You're in the right place, right branch, right everything, assuming I set things up correctly which I *think* I did.

## App setup

Obviously, the vast bulk of the project code, like dependencies and build files and such, are not here. In a clever bit of setup, `create-react-app` created a `.gitignore` that would very nicely keep me from sending the entirety of my very bulky `node-packages` folder to GitHub. Here's the cool bit though, it made it easier for other users to install all those packages.

So, clone or fork-then-clone this repository to a workspace that works well for you, then make sure you have either npm or yarn, preferably yarn since that is what I used. From there, you can use the included files to install all the dependencies quickly, or so I have been led to believe. Assuming it works, enjoy your freshly setup development environment.

## Developing the App

After you're done setting up the app development environment, you're *probably* going to want to know how to actually develop! Well, it's as easy as editing the included files as you see fit (see Create React App documentation for information on what files do what. Hint: [`src/App.js`](https://github.com/geekkid1/hades-boon-calc/blob/master/src/App.js) is what drives the majority of the function, but other things are also quite useful. Once you have a setup you wish to test, you can run either `yarn start` or `npm start` to get a development server up and running. `yarn build` or `npm run build` will create a `/build` folder containing output files that constitute the final app.

I really hope what I'm saying is both coherent and correct because at this stage in development I don't know.