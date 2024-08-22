promises (whenever you are requesting the data from server)
-> it is used to handle asynchronous code
--> it will provide use the status of asynchronous code and value stored in it.
-pending - resolve (success) - reject (error)

it will be handled by the browser.

- promises will have high priority and they go to micro task queue.

promise handle methods

- then() --> resolve
- catch() ---> reject
- finally() ---> irrespective of resolve or reject this method will be called.

there are 6 static methods in promise

    1. promise.all() --> it return the result as array.
        - it will wait for all the promises to resolve, and if all the promises are resolved, the output will be resolved.
        - if any  one of the promise gets reject then the  entire promise will be reject.

2. promise.allSettled() ( it was recently added) - it will wait for all the promises to settle and returns their result as an array of object with.
   [
   {
   status: "fulfilled" or "reject",
   value: data
   }
   ]

3. promise.any() ( it was recently added) - it will wait for the first promise to fulfill , and its result become the output.becomes the output. if all the given promises are reject , then the promise will through an error message or reject.

4. promise.race() - it will wait for the first promise to settle, and its result/error
   becomes the output.

5. promise.reject() --> makes a reject promise with the given error.

6. promise.resolve()===> makes a resolved promise with the given value.

---

callback hell

user --->request---> database ---->database---->database

function (){

    function (){

        function(){

            function(){
                function(){

                }
            }
        }
    }

}
//chaining

---

## promise chaining

promise.then().then().catch

new Promise(function(resolve, reject)=>{

## })

## async / await.

async function(){

    try{
            fetch(); --> promise

            await fetch();

            here the resolved data will be accessable.
    }
    catch(error){
            // here the rejected data will be accessable.
    }

}

---

API---> application programmer interface (URL)
-->Medium through which client interact with the server.
