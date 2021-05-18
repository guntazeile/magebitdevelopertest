<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "magebit";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
echo "Connected successfully";

$email= $_POST['email'];

$sql = "INSERT into `email` (email) values ('$email')";
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
   } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
   }
?>