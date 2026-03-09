- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?

    ## Q1️⃣ What is the difference between var, let, and const?
    ## Answer: 
    - 'var' - It is old style. we can redeclare it and we can re-assign it. it is accessiblie outside the block. It can be hoisted with undefined initializing. This days we are not using it though we can use it if we want to. But it is risky.

    - 'let' - We cannot recdelcare but re-assign it. it cannot be accessible outside of the block. It can be hoisted but need to initialize it, we cannot initialize as undefined then.

    - 'const' - Once we declared and assigned value, we cannot update/re-initialize with a new value. Other are same as 'let'

    ## Q2️⃣ What is the spread operator (...)?
    ## Answer: 
    - spread operator (...) - we use it to expand value inside of an array, object into individual values. We can use it to create a copy of an array, to join or merge to arrays etc.

    ## Q3️⃣ What is the difference between map(), filter(), and forEach()?
    ## Answer:
    - map() - we use it to create new arrays using avaiable elements inside of an array. but we do not want to changes the originala array

    - filter() - we use it to return values from an array,object that match with specific condition

    - forEach() - we use it loop through elements of an array but we do not want to return any values from it.

    ## Q4️⃣ What is an arrow function?
    ## Answer
    Arrow function indtroduced in ES6(ECMAScript 2015)(we knew it as JavaScript). We create arrow functin using the => syntax. Writing a function with Arrow function is cleaner approach than the function we used to writh normally.

    ```text
    example (I took this example from chatgpt and customized in my own way.)
    // normal function
    function add(a, b) {
    return a + b;
    }
    //Arrow function alternate use of above
    const add = (a, b) => {
    return a + b;
    };
    // shorter version of above arrow function
    const add = (a, b) => a + b;

    console.log(add(5, 3)); both normal function and arrow functions returns the same
    ```

    ## Q5️⃣ What are template literals?
    ## Answer:
    - backticks ``