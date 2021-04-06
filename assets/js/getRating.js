function getUserRating(user_id, imdb_id)
{
  var sessionChange = new XMLHttpRequest(); 
  sessionChange.onreadystatechange = function()
  {
    if(sessionChange.readyState == 4 && sessionChange.status == 200)
    {
      alert(this.responseText);
    }
  }
  sessionChange.open("POST","https://web.njit.edu/~aa2296/iCinema/assets/frontPhp/signout.php" , true); 
  sessionChange.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  sessionChange.send(JSON.stringify({"user_id":user_id, "imdb_id": imdb_id}));
}