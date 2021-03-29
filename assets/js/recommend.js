window.onload = function()
{
  var ajax=new XMLHttpRequest();
  var name;
  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {
      //alert(this.responseText);
    }
  }
  ajax.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax.send();
}

function signout()
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      window.location.pathname = '/~aa2296/iCinema/';
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/signout.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send("signout");
  
}