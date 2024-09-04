<?php

$servername = "localhost";
$username = "root";
$password = "";
$dataserve="DB_2IPI";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dataserve);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
else {
 //echo "Connected successfully";
}

?>