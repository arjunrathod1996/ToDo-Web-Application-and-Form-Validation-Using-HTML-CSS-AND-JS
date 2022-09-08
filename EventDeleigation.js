const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
//   console.log(todoInput.value);

  const newLi = document.createElement("li");

  const newLiinnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;

  newLi.innerHTML = newLiinnerHtml;

//   console.log(newLi);

todoList.append(newLi);

  todoInput.value = "";

  
});


todoList.addEventListener("click",(e)=>{

    // console.log(e.target);

    /* check if user clicked on done button */

    console.log(e.target.classList);

    


    if(e.target.classList.contains("remove")){
        // console.log("You want to remove something")
        const parent_parent = e.target.parentNode.parentNode;
        // console.log(parent_parent);



    parent_parent.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("great")

        const parent_sibling = e.target.parentNode.previousElementSibling;

        // console.log(parent_sibling);
        
        parent_sibling.style.textDecoration = "line-through";
    }
    

},true);

const signupForm = document.querySelector("#form");

const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#confirmPassword");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const about = document.querySelector("#about");


const userNameValue = userName.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();
const phoneValue = phone.value.trim();
const emailValue = email.value.trim();
const aboutValue = about.value.trim();

signupForm.addEventListener('submit',(e)=>{

  e.preventDefault();

  checkInput();
  
});

function checkInput(){

  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const aboutValue = about.value.trim();
  
  
  
  

/* --------------------------------------------------- Start User name ------------------------------------------------------------------ */

  if(userNameValue === ""){
    const parent = userName.parentElement;
    const message = parent.querySelector("small");
    message.style.visibility = "visible";
    message.innerText = "User name can not be empty";
    message.style.color = "red";
    document.querySelector(".color1").style.border = "1px solid red";
    

  }else if(userNameValue.length <= 3){
    const parent = userName.parentElement;
    const message = parent.querySelector("small");
    message.style.visibility = "visible"
    message.innerText = "User name must be min 3 char";
    message.style.color = "red";
    document.querySelector(".color1").style.border = "1px solid red";
  
  }else{
    const parent = userName.parentElement;
    const message = parent.querySelector("small");
    message.style.visibility = "hidden";
    
    document.querySelector(".color1").style.border = "1px solid green";
    message.innerText = "";
   
    
  }

/* ------------------------------------------------------- End User name ------------------------------------------------------------------ */


/* ------------------------------------------------------- Start password ------------------------------------------------------------------ */

  if(passwordValue === ""){
    const parent = password.parentElement;
    const message = parent.querySelector("small");
    message.style.visibility = "visible"
    message.innerText = "Password can not be empty";
    message.style.color = "red";
    document.querySelector(".color2").style.border = "1px solid red";
    
  }else if(passwordValue.length <= 4 || passwordValue.length >= 12){
    const parent = password.parentElement;
    const message = parent.querySelector("small");
    message.style.visibility = "visible";
    message.innerText = "Password must be between 4 and 8 char";
    message.style.color = "red";
    document.querySelector(".color2").style.border = "1px solid red";
  }else{
    const parent = password.parentElement;
    const message = parent.querySelector("small");
    message.style.visibility = "hidden";
    
    document.querySelector(".color2").style.border = "1px solid green";
    message.innerText = "";
  }

/* ------------------------------------------------------- End password ------------------------------------------------------------------ */


/* ------------------------------------------------------- start password confirm ---------------------------------------------------- */


if(password2Value !== passwordValue){
  const parent = password2.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = "Password does not match";
  message.style.color = "red";
  document.querySelector(".color3").style.border = "1px solid red";
}else if(password2Value === passwordValue){
  document.querySelector(".color3").style.border = "1px solid green";
}
else{
  const parent = password2.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "hidden";
 
  document.querySelector(".color3").style.border = "1px solid red";
  message.innerText = "";
}

/* ------------------------------------------------------- End password confirm ---------------------------------------------------- */

/* ------------------------------------------------------- start phone ---------------------------------------------------- */

if(phoneValue === ""){
  const parent = phone.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = "Phone number required";
  message.style.color = "red";
  document.querySelector(".color4").style.border = "1px solid red";
}else if(!isPhone(phoneValue)){
  const parent = phone.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = "Phone number Not Valid";
  message.style.color = "red";
  document.querySelector(".color4").style.border = "1px solid red";
}else{
  const parent = phone.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "hidden";
 
  document.querySelector(".color4").style.border = "1px solid green";
  message.innerText = "";
}


/* ------------------------------------------------------- End phone ---------------------------------------------------- */



/* ------------------------------------------------------- Start Email ---------------------------------------------------- */

if(emailValue === ""){
  const parent = email.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = "Email required";
  message.style.color = "red";
  document.querySelector(".color5").style.border = "1px solid red";
}else if(!isEmail(emailValue)){
  const parent = email.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = "Phone number Not Valid";
  message.style.color = "red";
  document.querySelector(".color5").style.border = "1px solid red";
}else{
  const parent = email.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "hidden";
  
  document.querySelector(".color5").style.border = "1px solid green";
  message.innerText = "";

/* ------------------------------------------------------- End Email ---------------------------------------------------- */



/* ------------------------------------------------------- Start about ---------------------------------------------------- */

if(aboutValue === ""){
  const parent = about.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = "About can not be empty";
  message.style.color = "red";
 
}else if(aboutValue.length <= 10){
  const parent = about.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "visible";
  message.innerText = "About must be min 10 char";
  message.style.color = "red";

}else{
  const parent = about.parentElement;
  const message = parent.querySelector("small");
  message.style.visibility = "hidden";
  message.innerText = "";
  
}

/* ------------------------------------------------------- End about ---------------------------------------------------- */

  }

}

function isPhone(phone){
  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
}

function isEmail(email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}