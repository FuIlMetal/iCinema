function testName(newName)
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      //alert("Given name was " newName". Database returned name after SignIn/Register is "+this.responseText);
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send();
}

function testName(newName)
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      //alert("Given name was " newName". PHP name set as "+this.responseText);
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send();
}

function testID(newID)
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      alert("Given id was " newID". PHP session ID set as "+this.responseText);
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send(JSON.stringify({"getId":"please"}));
}