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



