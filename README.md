### Notes


[Source](https://github.com/pirple/The-NodeJS-Master-Class)

---

Other than V8, there are SpiderMonkey, JavaScript Core, Rhino

---

In a nutshell, what does Node's non-blocking IO and Event Loop allow node to do?
Node can process new tasks while waiting for other tasks to complete

---

[AirBNB JS Style Guide](https://github.com/airbnb/javascript)





In Javascript, why does this expression evaluate to false?

`0.2 + 0.4 == '0.6'`

As with many languages, the Node.js runtime (and JS in general) uses floating-point arithmetic when doing math. So in the above example: 0.2 + 0.4 doesn't equal 0.6. It actually equals 0.6000000000000001. Therefore, the expression above evaluates to false. Since we're using 2 equals signs instead of 3, the "types" are not actually the problem.

---

In the snippet below, what is the "type" of foo?

`var foo = [1,2,3];`

This question trips up almost everyone. If it caught you, don't worry.

The answer is "object"  because Javascript considers Arrays to just be an object with some special properties.
So in this example:

`var foo = [1,2,3];`

When you console log out the "type" of foo (using Javascript's "typeof" operator), it says "object"

`console.log(typeof(foo));`

// "object"

Knowledge of this quirk comes in handy when you're parsing payloads / parameters and trying to validate that they are what you think they are. In this case, if the typeof(foo) equals "object" it might actually be an array. There's a few other ways to check to see if it's an array. One of them is:

console.log(foo instanceof Array)

// true

 In reality, Objects are really just associative arrays, and Arrays are a kind of Object. But what matters here is that Javascript considers an Array's "type" to be "object"

---

 In Javascript, what will be the value of foo?

``` js
var myArray = [1,2,3];
var foo = myArray.indexOf(4);
```
When looking for the index of a certain value (within an array), Javascript will return -1 if it can't find the element you're looking for. This can be confusing; you'd be forgiven for thinking "undefined" would be the right answer here.

---

``` js
module.exports = whatever
```

This makes the current file 'exports' something to any other file which 'require's or 'import's this one

Node's module system creates a dependency tree, which tells Node which files are needed to run the application.

---

Node has two programs

1. Script Processor
   1. Reads the file specified as an argument
   2. Recursively reads all the depencies the argument file has
   3. Begins executing the synchronous tasks, that those files have
   4. Begins processing the `ToDo List` aka `Event Loop` until it has nothing to do
2. REPL (Read Eval Print Loop) 

---

Simple Uptime Monitoring by NodeJs

Requirements
1. The API listens on a port and accepts incoming HTTP requests for POST, GET, PUT, DELETE and HEAD
2. The API allows clients to connect to and add, update and delete users
3. The API allows the users to `Sign In`, to acquire a token to be used in subsequent authenticated requests
4. The API allows the users to `Sign Out` to invalidate the access token of the session
5. The users would be able to create new `Check` (register a URL, to be probed by the system to determine where that is down or up) with the access token and users even can define the `Up` and `Down`
6. Signed in users can edit or delete any of their own `Check`s
7. Background job would perform the `Check`s registered by the users and notify them the transitions between the `Up` and `Down` states
