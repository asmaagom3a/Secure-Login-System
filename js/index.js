//
//

const submit_button = document.querySelector(".btn");

submit_button.onclick = (e) => {
  e.preventDefault();
  let name = document.getElementById("signinName").value;
  let email = document.getElementById("signinEmail").value;
  let password = document.getElementById("signinPassword").value;
  let cPassword = document.getElementById("signinCpassword").value;

  localStorage.setItem("Name", name);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", password);
  localStorage.setItem("CPassword", cPassword);

  if (name == "" && email == "" && password == "" && cPassword == "") {
    swal("Opps..!", "Input field must be fill", "error");
  } else if (password !== cPassword) {
    swal("Opps..!", "password not matching!", "error");
  } else {
    swal("Good job!", "Registraion Successful", "success");
  }
};

const login = document.querySelector(".login");

login.onclick = (e) => {
  e.preventDefault();

  const emailAddress = document.getElementById("signinEmail").value;
  const pass = document.getElementById("signinPassword").value;

  const Email = localStorage.getItem("Email");
  const Password = localStorage.getItem("Password");

  if (emailAddress == "" && pass == "") {
    swal("Opps..!", "Input field has no value!", "error");
  }else
  if(emailAddress == Email && pass == Password){
    swal("Good job!", "LogIn Successful", "success");

    document.querySelector("#displayForm").classList.replace("d-flex","d-none" );
    document.querySelector("#displayWelcome").classList.replace("d-none","d-block" );
    document.querySelector("#homeWell").innerHTML ="wellcome " +localStorage.getItem("Name");

  }else{
    swal("Opps..!", "Somthing is Worng!", "error");
  }
};
