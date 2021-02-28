<?php
session_start();
header("Content-Type: application/json; charset=UTF-8");
if(isset($_POST['email']))
{
  $email = $_POST['email'];
  $pass = $_POST['pass'];
  $_SESSION['userName'] = $email;
  $creds = [
      'email'=>$email,
      'pass'=>$pass,
  ];
  /*
  //sending to mid
  $url = 'https://web.njit.edu/...';
  $opts = [
      CURLOPT_URL => $url,
      CURLOPT_POST => true,
      CURLOPT_POSTFIELDS => $creds,
       CURLOPT_FOLLOWLOCATION => true,
  ];
  $ch = curl_init();
  curl_setopt_array($ch,$opts);
  $local = json_decode(curl_exec($ch));
  if($local->email !="NULL"){
    $_SESSION['userName'] = $local->email;
  echo $local;
  */
  
  if($creds['email'] != "NULL"){
    $_SESSION['userName'] = "anthony";
  }
  $local = '{ "email": "aa@google.com", "pass": "aaa"}';
  echo $local;
}
else
{
  echo $_SESSION['userName'];
}
?>
