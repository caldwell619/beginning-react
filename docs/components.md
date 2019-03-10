# Components
The absolute most important concept in React is this idea of re-using code we've already written, just tweaking it to make it work for certain uses.

## FIIIIINNNNAAAALLLLLYYYYY Writing React
We're going to build a verrrryyyyy simple advertisement listing app. This data will not persist, but will show us the core concepts of React

## Deciding what is re-usable
Can you think of something that may be re-usable when making an ad-listing app?

Maybe the ad itself? Swell, that's all I can think of too..

Follow this thought process to decide what will or won't be a component. Some weirdo's say if you write more than 3 lines of JSX, it needs to be a component. I'm not quite on that train, yet.

 A general rule is if you can see the code repeated several times exactly as it is, or with minor adjustments, it can probably be a component

 ## Making our first Component
 In the `Components/` directory, make a file called `Ad.js`.

### Defining our own boilerplate

 - In every file that is using React, we need to import `react` from `node_modules`
 - The other thing we will need, but not always is `{ Component }`
    - We will talk more on that in a little while, for now add it to the import
- Our import should be: `import React, { Component } from 'react;'`

`Ad.js` will be a class, so it will need the method signature: `class Ad extends Component{}`, much like `App.js`.

- All React classes need a `render()` method. Add it in between the `class` curly braces.
- We will also need a `return()` value from the render method.
- Lastly, we need to export our class so other files can have access to them

Our component so far looks like this:

```
class Ad extends Component{
    render(){
        return()
    }
}
export default Ad;
```


### Deciding what to return
Inside of the `return()` statement will be our HTML shown on the page. 

Since this is just the HTML for an individual ad, we need to think small for now.

We would want the ad to have a:
- title
- price
- description
- owner
- category

With that in mind, we can start writing inside the `return()` statement

My ad look like this:
```
<div className="ad-cont">
    <div className="title-cont">
        title
    </div>
    <div className="price-cont">
        price
    </div>
    <div className="description-cont">
        description
    </div>
    <div className="owner-cont">
        owner
    </div>
    <div className="category-cont">
        category                
    </div>
</div>
```

It isn't much to look at, but it'll do. Feel free to copy and paste this since its a tutorial lol.

### Importing what we've exported
To see this glorious ad on the screen, we need to import it! 
- Head into `App.js`
- At the top where the other imports are, `import Ad from './Components/Ad'`
- We importing our `Ad` component, from 
    - `.` <-- this means starting from the current point in the file structure. Meaning, even with `App.js`. Called `relative pathing`
    - `/Components/Ad` <-- Look in this folder, and pull out `Ad.js`. The `.js` is unecessary because it knows you're trying to do a JS file. If the extension is not `.js`, you need to declare the extension in the import
- Find the `return()` method, and delete it's contents. In their place, add `<Ad/>`
    - This will put the `Ad` class right where we tell it to, and call the class on `render()`, resulting in the JSX being returned and shown

## Cool, but why go through all of this just to do what I could do in 5 seconds with HTML?
The answer to this in my opinion is flexibility. In the [next section](https://github.com/caldwell619/beginning-react/blob/master/docs/es6.md), will go over some important ES6 syntax, and understand what React really brings to the table.

