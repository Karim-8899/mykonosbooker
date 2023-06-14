<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\PHPMailerAutoload;

//require 'vendor/autoload.php';

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/PHPMailerAutoload.php';

// Retrieve form data

$email = $_POST['email'];
//$sender_email = $_POST['sender_email'];
//$subject = $_POST['subject'];
//$message = $_POST['message'];

// Create a new PHPMailer instance
$mail = new PHPMailer(true);


    // Server settings
    $mail = new PHPMailer();
   $mail->isSMTP();
   $mail->Host = 'smtp.hostinger.com';
   $mail->Port = 465;
   $mail->SMTPAuth = true;
   $mail->Username = 'no-reply@mykonosbooker.com';
   $mail->Password = 'Nomykonos11!';
   $mail->SMTPSecure = 'ssl';                                 // TCP port to connect to

    // Recipients
    $mail->setFrom('no-reply@mykonosbooker.com', 'Mykonos Booker');
    $mail->addAddress($email);     // Add a recipient

    $mail->Subject = 'Welcome to MykonosBooker';
    $mail->Body = 'Thank you For Contacting MykonosBooker';
     $mail->msgHTML(file_get_contents('message.html'), __DIR__);



    // Content
   // $mail->isHTML(true);                                  // Set email format to HTML
   // $mail->Subject = $subject;
   // $mail->Body    = $message;


   if(!$mail->send()) {
    echo 'Email could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo '<center><h1>Email has been sent.</h1></center>';
}



?>
