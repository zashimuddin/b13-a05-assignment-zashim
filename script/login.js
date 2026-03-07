document.getElementById("login-btn").addEventListener("click", function(){
    console.log('login button clicked');

    //1. get the user name
    const userNameInput = document.getElementById("login-user");
    const userName = userNameInput.value;
    console.log(userName);

    //2. get the password
    const passwordInput = document.getElementById("login-pass");
    const password = passwordInput.value;
    console.log(password);

    //3. match the Password and User Name
    if(userName === "admin" && password === "admin123"){
        //3-1 true :::>> aleart> homepage
        console.log("Login Success");
        alert("Login Success");

        //following line of code will add the history in the browser. so that we 
        // can go back to our previous page from the browser end
        window.location.assign("./home.html"); 
    }
    else{
        alert("Username or Password is incorrect");
        return;
    }
});