# Dynamically Rendered Content
This is when we start to see React's usefulness and power really come into Vue

## Using `.map`
So lets build some dummy data. This concept is really curcial to the development stages.

 When one part of the team is working on the back end, you can simulate the data you will be recieving, and be ready for it when they finsh up

 - In the `Components/` directory, make another file called `AllAds.js`
 - Follow the previous guidance on how to make the boiler plate. `import React, etc..`, making sure to export it at the bottom

We need to start telling React that we're making all these sweet files

- In `App.js`, `import AllAds from './Components/AllAds;`
- Plug `AllAds` into the return value of the render method
```
import AllAds from './Components/AllAds';

class App extends Component {
  render() { 
    return (
      <AllAds/>
    );
  }
}
```

### Getting this awesome data to our Component

 - In the `src/` directory, make a directory called `data/` this is where our constant, hard coded data would normally live.
    - Since we're simulating a return from a backen, this is the perfect pace to store that information
- In `data/`, make a file called `allAds.js`. Notice the lower case at first. JS Classes, are uppercased. This is a normal file, so it's lower case
- In `allAds.js`, pase this [well thoughtout data](https://github.com/caldwell619/beginning-react/blob/master/src/data/allAds.js)

- Back in `AllAds.js` <-- Notice the capital letter, we need to import `allAds` <-- lower case, and `Ad.js` the component

```
import allAds from '../data/allAds';
import Ad from './Ad';
```

### Here comes the fun with `.map`!
Now that we have an array of objects, we can start populating our amazing `AllAds` component!

- In `AllAds`, return a `<div className="all-ads-cont">` as a container
- Inside that container, we will escape the JSX return with curly braces `{}`. This allows us to write normal JS inside of the HTML looking stuff
- We want to start with the array we imported, `allAds`
- We call the `.map()` method on the array. 
    - Remember how it takes a function as an argument? Me neither when I started. It's cool.

What that ends up looking like is:







