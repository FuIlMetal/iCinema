document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

function signIn(form)
{

  // Below is the code for pinging the DB and checking a sign in
  
  
  var ajax=new XMLHttpRequest();
  var name;
  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {
      //alert(this.responseText);
      var creds=JSON.parse(this.responseText);
      var message = creds.message;
      if((message)!="Successfully login!")
      {
          //alert("The email or password you have entered does not match any account.");
          document.getElementById("user-form").reset();
      }
      else 
      { 
          name = creds.fullname;
          var sessionChange = new XMLHttpRequest(); 
          sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
          sessionChange.setRequestHeader("Content-type", "application/json");
          sessionChange.send(JSON.stringify({"name":name, "id":creds.user_id })); 
          window.location.pathname = '/~aa2296/iCinema/';
      }
    }
  };
 
  var email = form.email.value;
  var pass = form.password.value;
  if(email == "" || pass == "")
  { 
    //alert("Make sure enter values for both");
    document.getElementById("user-form").reset();
  }
  else
  {
  
    ajax.open("POST", "https://web.njit.edu/~la92/api/User/login.php", true);
    ajax.setRequestHeader("Content-type", "application/json");
    var userInfo = JSON.stringify({"email":form.email.value, "password":form.password.value}); 
    ajax.send(userInfo);
  }

  
}

function register(form)
{
  
  //  This code will ping the server for getting information from the DB
  var ajax=new XMLHttpRequest();
  var name;
  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {
      var creds=JSON.parse(this.responseText);
      var message = creds.message;
      if((message)=="User already exists!")
      {
          //alert("Unable to register the user due to user already in Database");
          document.getElementById("register-form").reset();
      }
      else if((message)=="Invalid information!")
      {
          //alert("Unable to register the user due to invalid information");
          document.getElementById("register-form").reset();
      }
      else 
      { 
          ///alert(this.responseText);
          var sessionChange = new XMLHttpRequest(); 
          sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
          sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          sessionChange.send(JSON.stringify({"name":creds.fullnaame, "id":creds.user_id})); 
          window.location.pathname = '/~aa2296/iCinema/';
      }
    }
  }
 
  var email = form.email.value;
  var pass = form.password.value;
  var pass2 = form.password2.value;
  name = form.name.value;
  if(email == "" || pass == "" || pass2=='' || name=="" || pass!=pass2)
  { 
    alert("Make sure to enter values for all and your passwords  match.");
    document.getElementById("register-form").reset();
  }
  else
  {
    ajax.open("POST", "https://web.njit.edu/~la92/api/User/register.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var userInfo = JSON.stringify({'email': email,'password':pass,'full_name':name}); 
    ajax.send(userInfo);
  }
  
  

  
}