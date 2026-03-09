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


---

# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

# **📅 Deadline For 60 marks:** 9th March, 2026 (11:59 pm ⏱️)  
#  📅 No Deadline For 50 marks  
# **📅 Deadline For 30 marks:** Any time after 9th March.

---

# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you. 


--- 


## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status 
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on an issue  card will open a modal and show all the information about that Issue. 

### 🚀 Challenges


- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?


---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```


---

### Optional: 
 - No need to show status: Open, Closed styles On modals. 
 - No Need to show icon on labels 
 - No need to apply styles on Priority 
--- 


## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---


