
### Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to work with asynchronous code in a more manageable and readable way, avoiding the so-called "callback hell" that occurs when you have many nested callbacks.

## Key Concepts of Promises
# States:

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
Settling a Promise:

When a promise is fulfilled, it holds a value.
When a promise is rejected, it holds a reason (an error or reason for failure).
Methods:

then(): Used to handle the fulfillment of the promise. It takes two optional callback functions: one for success (resolved) and one for failure (rejected).
catch(): Used to handle the rejection of the promise. It’s a shortcut for then(null, rejectionCallback).
finally(): Executes a callback once the promise is settled, regardless of whether it was fulfilled or rejected.

## Advantages of Using Promises:

Improved Readability: Promises can be chained, making code cleaner and easier to follow.
Error Handling: Errors can be caught at any point in the chain with a single catch.
Avoid Callback Hell: Promises reduce the need for deeply nested callbacks, making the code more maintainable.