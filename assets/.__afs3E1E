<?php

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

session_start();
header("Content-Type: application/json; charset=UTF-8");
if(isset($_POST['name']))
{
  $_SESSION['userName'] = $_POST['name'];
  
}
else
{
  echo $_SESSION['userName'];
}
?>
