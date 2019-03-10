# Disecting Boilerplate
Let's figure out what the young people are doing to my Google machine. 

Boilerplate in this context refers to a mold of pre-written code. In this context, it refers to the starter pack we got from `create-react-app`.

 If someone says there's a lot of boilerplate, it means theres a lot of code that has to be written in order for a certain functionality to occur.

## File Structure
We can see there are 3 directories, and a few files

### `node_modules/`
- This houses all of that stuff we didn't write
- All of our project dependencies will be in here
- We _do not_ manage this folder manually

### `public/`
- Everything we want the world to see is in here. Images mostly, and sometimes external `css` libraries like a grid system also live here
- Make an `images/` directory so we dont forget where they go

### `src/`
- Meat **AND** potatoes of our app
- All JS and CSS will go in here
- Make both a `Components/` and `css/` directory in here

### Other files outside of directories
There's a few files here, they are considered to be in the `root` of our project. The highest level possible in our scope

#### `.gitignore`
- SUUUUPER important. This is a list of files in our app that will not be tracked by `git`
- Notice that `node_modules/` is on there, we dont want to commit them to source control because we don't control their source
- Other developers who clone or fork our application will rely on `npm install` to get the necessary dependencies
- Other examples would be a `config` or `keys` file to protect API keys or any sort of password

#### `package-lock.json

#### `package.json`
Holy moley, this file is possibly the most important. It is the brain of our entire app.

- Notice everything is in double quotes. 
- It is a `.json` formatted file, so eveything **must** be in `"name"` double quotes.
- Eveything must also be comma separated. If you manually add something to this file, make sure there's a friendly comma after it

 Let's look at the highlights:

 ##### `dependencies`
This tells the command `npm install` which packages and what version number to install. 

- If we ever need to tell ourselves and future developers that we're using a specific package, we use `npm i -S PACKAGE_NAME`
- The `i` is for `install`. the `-S` flag, tells `package.json` to save the thing we just installed to the dependencies list

<hr>

Don't worry too much about `package-lock.json`. It's there. GOT IT?!


## Whats important?
**DONT** mess with `node_modules/`

Now that that's out of the way..

Check out the `src/` directory. This is where we will spend 90% of our time. Head to the [next section](https://github.com/caldwell619/beginning-react/blob/master/docs/app-js.md).

