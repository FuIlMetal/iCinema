<?php

session_start();
header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");

$url = "https://icin.herokuapp.com/";
$c = "imdb_id" => array("tt0114894");
$content = json_encode($c);
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER,
        array("Content-type: application/x-www-form-urlencoded"));
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
$result = curl_exec($curl);
print_r(json_encode($result, JSON_PRETTY_PRINT));

?>
