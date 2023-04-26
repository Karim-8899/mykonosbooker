<?php


$servername = "localhost";
$username = "u157487157_contactmyk";
$password = "Mykonos1234";
$dbname = "u157487157_mykonoscontact";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];

// Insert data into database
$sql = "INSERT INTO users (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";
if ($conn->query($sql) === TRUE) {
  echo "<center>
  <h1>Thank You! For Contacting MykonosBooker. We Will Contact you Shortly.</h1>
  </center>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close database connection
$conn->close();


?>