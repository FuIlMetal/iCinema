document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

function signIn(form)
{
  var ajax=new XMLHttpRequest();

  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {
      var creds=JSON.parse(this.responseText);
      creds = creds.email;
      if((creds)=="NULL")
      {
          alert("The email or password you’ve entered doesn’t match any account.");
          document.location.reload(true); 
      }
      else 
      {
          window.location.pathname = '/~aa2296/iCinema/';
      }
    }
  }
 
  var email = form.email.value;
  var pass = form.password.value;
  if(email == "" || pass == "")
  {
    alert("Make sure enter values for both");
    document.location.reload(true)
  }
  else
  {
    ajax.open("POST", "/~aa2296/iCinema/assets/front.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var userInfo = "email="+form.email.value+"&pass="+form.password.value; 
    ajax.send(userInfo);
  }
}