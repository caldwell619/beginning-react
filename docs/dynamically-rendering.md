# Dynamically Rendered Content
This is when we start to see React's usefulness and power really come into Vue

## Using `.map`
So lets build some dummy data. This concept is really curcial to the development stages.

 When one part of the team is working on the back end, you can simulate the data you will be recieving, and be ready for it when they finsh up

 - In the `Components/` directory, make another file called `AllAds.js`
 - Follow the previous guidance on how to make the boiler plate. `import React, etc..`
 - In the `src/` directory, make a directory called `data/` this is where our constant, hard coded data would normally live.
    - Since we're simulating a return from a backen, this is the perfect pace to store that information
- In `data/`, make a file called `allAds.js`. Notice the lower case at first. JS Classes, are uppercased. This is a normal file, so it's lower case
- In `allAds.js`, pase this [well thoughtout data]()