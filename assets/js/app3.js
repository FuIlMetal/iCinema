function returnToSign()
{
  window.location.pathname = '/~aa2296/iCinema/';
}

function changePass()
{
  var form = document.getElementById("ChangePass");
  var ajax=new XMLHttpRequest();
  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {
      var creds=JSON.parse(this.responseText);
      var message = creds.message;
      var status = creds.status;
      if((message)=="Password Successfully Changed.")
      {
          alert("Password Changed!");
          window.location.pathname = '/~aa2296/iCinema/';
      }
      else
      {
          alert("Email not found in database");
          document.getElementById("ChangePass").reset();
      }
      
    }
  }
  
  var email = form.email.value;
  var pass = form.password.value;

  if(email == "" || pass == "")
  { 
    alert("Make sure to enter values for all and your passwords  match.");
    document.getElementById("ChangePass").reset();
  }
  else
  {
    ajax.open("PUT", "https://web.njit.edu/~la92/api/User/updatePassword.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var userInfo = JSON.stringify({'email': email,'password':pass}); 
    ajax.send(userInfo);
  }
  

}