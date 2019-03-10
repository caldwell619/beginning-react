# Installing React
This section you can't skip if you're a beginner. Sorry.

## npm
React relies pretty heavily on [npm](https://www.npmjs.com/), and optionally [yarn](https://yarnpkg.com/en/).

If you didn't know, `npm` and `yarn` are dependency management platforms. `npm` stands for Node Package Manager. It manages packages for.. Node. They essentially allow us to download other people's hard work and pretend like we're _amazing_. They're super useful, and absolutely critical to getting React stuff underway without it being annoying.

### npm installation
To use `npm`, we first need [Node.js](https://nodejs.org/en/). Weird, right? We need `Node` to download `node package manager`...

- Download and install `Node` [here](https://nodejs.org/en/download/)

- Download and install `npm` guide [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## `create-react-app`
There are several ways to get a React app stood up. Check [this](https://reactjs.org/docs/create-a-new-react-app.html) out if you're interested. We will be using the ever simple, `create-react-app`. 

### Steps
We have a few options, again. Annoying, right? Anyway, check your `npm` version with `npm -v`. If its **over** `5.2`, you can do either way. If not, do the 1st way.

#### Globally installing `create-react-app`
When we say "globally installing", that means being able to execute the command from anywhere on our computer's file tree.

- Run `npm i -g create-react-app`. This will allow the command, `create-react-app` from anywhere we choose.
- Find your desired project home. Wheteher that's a projects folder, or `IdeaProjects`, find where you'd like the **entire** folder of your React app to live.
- Run `pwd`. If the very last thing is the folder you want to create another folder in, run `create-react-app NAME_OF_THE_REACT_APP_YOU_WANT`.
- Jump to [here]().

#### The slick way
I know you. Oh so fancy. You're a trend setter. Don't like to do things the "old" way with little to no justification. I see you.

We'' be making use of [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b), a cool way to not have to globally install `npm` commands, while stil having access to them in weird places.

If you have version 5.2 or later, you can simply follow the above directions to get to your desired directory, and run `npx create-react-app MY_AWESOME_SAUCE_APP`

Both of these methods will install a buttload of files, so just chill until its done.

Then move on to the [next](https://github.com/caldwell619/beginning-react/blob/master/docs/disecting-boilerplate.md) step.