window.onload = function()
{
  var ajax=new XMLHttpRequest();
  
  ajax.onreadystatechange = function()
  {
    if(ajax.readyState == 4 && ajax.status == 200)
    {  
      var creds=JSON.parse(this.responseText);
      document.getElementById("userID").dataset.id = creds.user_id;
      document.getElementById("userID").dataset.name = creds.name;
      testID(document.getElementById("userID").dataset.id);
      testName(document.getElementById("userID").dataset.name);
      //getRecommend();
    }
  }
  ajax.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax.send(JSON.stringify({"full":"please"}));
}

function signout()
{
  var sessionChange = new XMLHttpRequest(); 
  
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      testSignOut(document.getElementById("userID").dataset.id);
      window.location.pathname = '/~aa2296/iCinema/';
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/signout.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send("signout");
  
}

function testName(newName)
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      //alert("Given name was " +newName+". PHP name set as "+this.responseText);
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send();
}

function testSignOut(oldID)
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      //alert("ID set to " +this.responseText+". ID was set as "+oldID);
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send(JSON.stringify({"getId":"please"}));
}

function testID(newID)
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      //alert("Given id was "+newID+". PHP session ID set as "+this.responseText);
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/front.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send(JSON.stringify({"getId":"please"}));
}


function getRecommend()
{

  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      alert(this.responseText);
    }
  }
  sessionChange.open("POST","https://icin.herokuapp.com/" , true); 
  sessionChange.setRequestHeader("Content-type", "application/json");
  sessionChange.send(JSON.stringify({"imdb_ids": ["tt0114894"]}));

 
 
  
}