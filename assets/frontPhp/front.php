<?php

session_start();
header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


header("Content-Type: application/json; charset=UTF-8");

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST['id']))
{
  $_SESSION['userName'] = $_POST['name'];
  $_SESSION['user_id'] = $_POST['id'];
  
}
else
{
  if(isset($_POST['getId']))
  {
    echo $_SESSION['user_id'];
  }
  else if (isset($_POST['full']))
  {
    $user_arr = array("user_id" => $_SESSION['user_id'], "name" => $_SESSION['userName']);
    print_r(json_encode($user_arr, JSON_PRETTY_PRINT));
  }
  else
  {
    echo $_SESSION['userName'];
  }
}
?>
