### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  ///`Using the await keyword to await till the rest of the code is done running`/

- What is a Promise?
  ///`A promise is a Javascript object and it has 3 states pending, resolved, or rejected`/

- What are the differences between an async function and a regular function?
  ///`regular functions execute synchronously, meaning they block the execution of code until they complete. Async functions allow you to use the 'await' keyword ro pause execution of the function until a Promise is resolved.`/

- What is the difference between Node.js and Express.js?
  ///`Node.js is a back end server side library for writing JavaScript, Express.js is a popular framework use in conjuction with node.js to build web applications and API's. It simplifies the handeling of HTTP request, routing, middleware. `/

- What is the error-first callback pattern?
  ///`Its a way of writing code to check for the error first callback so if error then do this but if not code runs as intended.`/

- What is middleware?
  ///`It acts as a bridge between the server and the application's logic allowing you to perform additional processing, modifications, or handle common task.They are typically defined using the app.use() method in Express.js`/

- What does the `next` function do?
  ///`The next functions allows the next set of code to run.`/

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
///`We should use Promise.all() so we dont have to await for a response from the first await keyword for the next to run instead Promise.all() will return all in one response.`/

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
