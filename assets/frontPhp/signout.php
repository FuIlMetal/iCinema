<?php

session_start();

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if(isset($_POST["signout"]))
{

  echo "got here";
  unset($_SESSION['userName']);
  
}

?>
