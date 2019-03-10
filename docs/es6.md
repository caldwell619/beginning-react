# ES6 Syntax
ES stands for ECMAScript. They exist to standardize the use of JavaScript. 

If you have no idea what I'm talking about, check [this out](https://www.w3schools.com/js/js_es6.asp).

There's some great features that you should just be using in everyday JS with or without React.

We will cover the ones we will use in this guide, please feel free to further expand your knowledge elsewhere.

## Variables
If you're using `var`, for the love of god, **stop**

[There](https://softwareengineering.stackexchange.com/questions/274342/is-there-any-reason-to-use-the-var-keyword-in-es6) are [a lot](https://discuss.codecademy.com/t/whats-wrong-with-var/224975/3) of people recommending that [you stop](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70).

### `let`
Highlights:
- Blocked scope, meaning that only things to the right and down of the declaration have accesss to it
- Re-assignable but not re-declarable
    - This means you can do `let i = 0;` then `i = 1;`, but not `let i = 0;` then `let i = 1;`

### `const`
Seems self explanatory, right? All the same properties of `let`, but cannot be reassigned. Very similiar to `final`, used in Java.

## Arrow Functions
If you're writing the word `function()`, also stop.

[Here](https://medium.com/@thejasonfile/es5-functions-vs-es6-fat-arrow-functions-864033baa1a) is a great article explaining the intricate differences.

I just want to show a few versions of the same function
1. Older Way
```
function sayWazup(greeting){
	return ("Wazzzzzuppppp " + greeting)
};
```
2. Older Way, but slicker
```
function sayWazup(greeting) { 
    return (`Wazzzzzzup ${greeting}`)
};
```
3. New Way
```
const sayWazup = (greeting) => {
	return ("Wazzzzzuppppp " + greeting)
};
```
4. New, and Slick Way
```
const sayWazup = greeting => `Wazzzzzuppppp ${greeting}`;
```

All of these functions do the same thing. React relies heavily on arrow functions, and this slick way of writing functions. A lot of documentation you will see on React, is written like the 5th version.

## `.map()`
This one is OH. SO. Importanté

- Works on arrays, very much like `.forEach()`. 
    - The difference is you cannot return anything out of a `.forEach()` loop. This is mega important for us as Reactinities
- Accepts a function as an argument, meaning, in the parenthesis, you need to write a function
    - Could be an annoymous function, or a pre defined ( named ) function
- `.map()` **returns an array**!

If arrow functions blew your mind, you've probably been writing `.forEach()` like this:
```
let names = ['bill', 'bob', 'benny', 'the jets'];

names.forEach(function(name){
	console.log ("Hi, ma name is " + name);
})
```

I feel bad for you son, you got 99 problems, and JavaScript was number one.

Now, lets rewrite that function using `.map()` and ES6 arrow functions:
```
names.map(name => `Hi, ma name is ${name}`)
```

A couple things happening here:

### String Interpelation
Way to fancy of a word for, use the ` ( back tick ) character instead of " ( double quotes ). 

This allows you to use `${}` to write JS inside of a string. So we plug variables into the curly brace instead of doing `"string " + variable`.

### Single Line Expression
If you are writing one expression in your function body, you can omit the curly braces. Meaning, 
```
names.map(name => {
    return(`Hi, ma name is, ${name)
})
```

could be:

```
names.map(name => return(`Hi, ma name is ${name}`));
```

If you are only doing one thing in your function body, you don't need curly braces

### Implicit return
If the only thing you are writing within a function body is `return()`, you can use `()` or just nothing at all.

Taking the previous example:
```
names.map(name => return(`Hi, ma name is ${name}`));
```

is the same as:
```
names.map(name => `Hi, ma name is ${name}`);
```

In my opinion, that looks soooo much cleaner.

## Closing Thoughts 
Some people say ES6 is syntactic sugar. I think that's ultra false. It is signicantly different in terms oof base functionality, and readability.

Let's see how it can tie into use showing some cool stuff in the [next section](https://github.com/caldwell619/beginning-react/blob/master/docs/dynamically-rendering.md)
