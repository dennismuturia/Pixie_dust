<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


//This is the new using phpmailer
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    //// Enable verbose debug output
    $mail->SMTPDebug = 1;
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'dmuturia2922@gmail.com';                 // SMTP username
    $mail->Password = 'DontAsk12';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;// TCP port to connect to
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    //Recipients
    $mail->setFrom($email,$name);
    $mail -> addAddress('dmuturia2922@gmail.com');     // Add a recipient


    //Removed the attachments part

    //Content
    //Include the body content
    $body = '<strong>Hello,</strong> You have received an inquiry from '.$name.'The message is'.$message;
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'I want a quote';
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
        echo 'Message has been sent';

} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

?>