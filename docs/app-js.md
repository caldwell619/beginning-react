# `App.js`
This sections dives into what we will commonly se whilst looking at Reacty stuff

## Disecting the `src/`
This is all our stuff is going to hangout. 

### `Components/` and `css/`
We created these. Or at least should have.. Lexi..

The `Components/` directory will house all of our JS files. The jury is out of what the structure of this folder should look like, but for now, we will have everything one level deep.

The `css/` directory will house.. uhh.. css. We will import the `css` into our Components. Don't worry about that for now.

### `index.js`
`index` commonly means the root file. No difference here.

- You'll notice there is a `document.getElementById('root')`.
- This reaches into `public/index.html` and targets the only thing in it. An empty `<div id="root"/>`
- This is the entry point for our React stuff. 

### App.whatever
Open up the `App.js` file. This is the 1st level of Reacty stuff. 

#### Method Signature
This is the stuff on line 5
- You'll see a `class` with the name `App` extending `Component`

_wut_

- For our scope, a class in JavaScript is very similar to a function
- What would you guess `Component` is if `App` is a `class`, and `extends Component`?
    - If you guessed `class`, right on. If not, eh

#### `render()`
This is a class method, inherhited from `Component`. Now we can actually talk about React..

- The `render()` method fires everytime `state` is updated.
- We will obviously talk a lot more about state, but this method controlls the movement of our content

#### `return()`
The key to putting stuff on the screen. 

#### JSX
This may look strikingly similar to `HTML`, but it's in fact JavaScript.

Lets breakdown what's actually happening. Feel free to skip if you dont care.

`<div className="App">`

Here we see a `<div>` being created. This is the equivalent of 
```
let div = document.createElement("div");
div.className = "App"
```

The difference being we can just write what would look like the output of the above block of JS, instead of the JS to get the `<div>` created.

#### `export default App`
This is saying that the default thing to come out of this file is the class, `App`.

Let's go over what we know:
- `App` is a class, which is pretty similar to a function
- If `App` was called, the return value would come from its `return()` statement
- The `return()` statment of `App` is JSX, which will be henceforth sometimes referred to as HTML.
    - We allllllllllll know it's not, but it's easier, so deal with it.

Knowing what we know <-- _wut_, If we were to say, import `App` somewhere, what would be the outcome?

In the `index.js` file, you can see `App` being imported, the placed in the file using `<App/>`. This is calling the class `App`, which returns  block of HTML.

This is the way we will be using React, and indeed the way it's supposed to be used.

## Closing Thoughts
Closed. Move [on](https://github.com/caldwell619/beginning-react/blob/master/docs/components.md)


