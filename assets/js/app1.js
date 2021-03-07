document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

function signIn(form)
{

  // Below is the code for pinging the DB and checking a sign in
  
  /*
  var ajax=new XMLHttpRequest();
  
  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {
      var creds=JSON.parse(this.responseText);
      var message = creds.message;
      var name;
      if((message)=="Login Failed.")
      {
          alert("The email or password you’ve entered doesn’t match any account.");
          document.location.reload(true); 
      }
      else 
      { 
          var sessionChange = new XMLHttpRequest(); 
          sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
          sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          sessionChange.send("name="+name);
          window.location.pathname = '/~aa2296/iCinema/';
      }
    }
  }
 
  var email = form.email.value;
  var pass = form.password.value;
  name=email;
  if(email == "" || pass == "")
  { 
    alert("Make sure enter values for both");
    document.location.reload(true)
  }
  else
  {
    ajax.open("POST", "https://web.njit.edu/~la92/registration-api/login.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var userInfo = JSON.stringify({"email":form.email.value, "password":form.password.value}); 
    ajax.send(userInfo);
  }
  */
  
  
  // This code will test a correct log in or incorrect
  
  var email = form.email.value;
  var pass = form.password.value;
  if(email == "" || pass == "")
  { 
    alert("Make sure enter values for both");
    document.location.reload(true)
  }
  
  else{
    //this is the incorrect login
    var userInfo = JSON.stringify({"email":"anthony@google.com", "password":"password"});
    //lets pretend we send this and get a proper response
    //var response = JSON.stringify({"message":"Login Failed.", "full_name":"NULL"});
    var response = JSON.stringify({"message":"Successful Login", "full_name":"Anthony Anderson"});
    
    
    var creds=JSON.parse(response);
    var message = creds.message;
    if((message)=="Login Failed.")
    {
      alert("The email or password you have entered does not match any account.");
      document.getElementById("user-form").reset();
    }
    else 
    { 
      var sessionChange = new XMLHttpRequest(); 
      sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/front.php" , true); 
      sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      sessionChange.send("name="+creds.full_name);
      window.location.pathname = '/~aa2296/iCinema/';
    }
  }
  
  // This code will test an incorrect log in
  
  
}

function register(form)
{

  /*  This code will ping the server for getting information from the DB
  var ajax=new XMLHttpRequest();
  var name;
  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {
      var creds=JSON.parse(this.responseText);
      var message = creds.message;
      if((message)=="Unable to register the user.")
      {
          alert("Unable to register the user.");
          document.location.reload(true); 
      }
      else 
      { 
          var sessionChange = new XMLHttpRequest(); 
          sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/front.php" , true); 
          sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          sessionChange.send("name="+name);
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
    document.location.reload(true)
  }
  else
  {
    ajax.open("POST", "https://web.njit.edu/~la92/registration-api/register.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var userInfo = JSON.stringify({"email": email,"password":pass,"full_name":name}); 
    ajax.send(userInfo);
  }
  */
  
  //This is the current testing code
  var email = form.email.value;
  var pass = form.password.value;
  var pass2 = form.password2.value;
  var name = form.name.value;
  if(email == "" || pass == "" || pass2=='' || name=="" || pass!=pass2)
  { 
    alert("Make sure to enter values for all and your passwords  match.");
    document.location.reload(true)
  }
  else
  {
    //This is the code for a valid registration
    var userInfo = JSON.stringify({"email": email,"password":pass,"full_name":name});
    
    //Lets pretend it was a success
    var response = JSON.stringify({"message":"User was successfully regitered", "full_name":"Anthony A"});
    
    //This is to test if it was a bad registration
    //var response = JSON.stringify({"message":"Unable to register the user.", "full_name":"NULL"});
    var creds=JSON.parse(response);
    var message = creds.message;
    if((message)=="Unable to register the user.")
    {
          alert("Unable to register the user.");
          document.getElementById("register-form").reset(); 
    }
    else 
    { 
      var sessionChange = new XMLHttpRequest(); 
      sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/front.php" , true); 
      sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      sessionChange.send("name="+creds.full_name);
      window.location.pathname = '/~aa2296/iCinema/';
    }
  
  }
  
}