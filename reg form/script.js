let form = document.querySelector("form");
let email = document.querySelector("#email");
let username = document.querySelector("#username");
let pass = document.querySelector("#password");
let confpass = document.querySelector("#confirm-password");
let btn = document.querySelector("button");
let checkbox = document.querySelector("#terms");
//error span
let errorSpan = document.querySelector("#username-error");
let passlenerr = document.querySelector("#len-error");
let passmatcherr = document.querySelector("#match-error");
function togglebutton() {
  const isuserfill = username.value.trim() !== " ";
  const isemailfill = email.value.trim() !== " ";
  const ispassfill = pass.value.trim() !== " ";
  const isconfpassfill = confpass.value.trim() !== " ";
  const ischeck = checkbox.checked;

  if (isuserfill && isemailfill && ispassfill && isconfpassfill && ischeck) {
    btn.disabled = false;
    btn.style.opacity = 1;
    btn.style.cursor = "pointer";
  } else {
    btn.disabled = true;
    btn.style.opacity = 0.5;
    btn.style.cursor = "not-allowed";
  }
}
form.addEventListener("input", togglebutton);
form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  let uname = username.value;
  let p = pass.value;
  let cp = confpass.value;

  if (uname.length <= 3) {
    errorSpan.textContent = "username must be at least 4 characters";
  } else {
    errorSpan.textContent = " ";
  }

  if (p !== cp || p === " ") {
    passmatcherr.textContent = "password does not match try again";
  } else {
    passmatcherr.textContent = " ";
  }

  if (p.length < 8) {
    passlenerr.textContent = "password must be at least 8 characters.";
  } else {
    passlenerr.textContent = " ";
  }
});
