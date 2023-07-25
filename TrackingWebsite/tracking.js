
/*Start of init*/
var heading = document.getElementById("msg");
var headingText = heading.textContent;
var signUpBtn = document.getElementById("signIn");
var logInBtn = document.getElementById("logIn");
var submitBtn = document.getElementById("submitBtn");
var mainBtn = document.getElementById("mainBtn");
/*End of init*/


signUpBtn.addEventListener("click", displaySignUp);
logInBtn.addEventListener("click", displayLogIn);
submitBtn.addEventListener("click", choosingAction);

/* Start of changing text function */
function displaySignUp() {
    if (headingText === "Login") {
        headingText = "Sign Up";
        document.getElementById("msg").innerHTML = "Sign Up";
    }
}

function displayLogIn() {
    if (headingText === "Sign Up") {
        document.getElementById("msg").innerHTML = "Login";
        headingText = "Login";
    }
}
/* End of changing text function */

function choosingAction () {
    if (headingText === "Sign Up") {
        signUp(Event);
    }
    else if (headingText === "Login") {
        signIn(Event)
    }
}

/* Start of sign up function */
const signUp = e => {
    let fname = document.getElementById("fname").value
    let pwd = document.getElementById("pwd").value

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() 
        );

    if(!exist){
        formData.push({ fname, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}
/* End of sign up function */

/* Start of sign in function */
function signIn(e) {
    let fname = document.getElementById("fname").value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.fname.toLowerCase() == fname && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        window.location.href = "https://www.google.com/";
    }

}
/* End of sign in function */

function redirect() {
    window.location.href = "https://www.google.com/";
}





