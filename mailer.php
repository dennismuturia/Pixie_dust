<?php
//Only process server Requests
if ($_SERVER["REQUEST_METHOD"] =="POST") {
  # code...
  $name = strip_tags(trim($_POST["name"]));
  $name = str_replace(array("\r","\n"),array(" ", ""),$name);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  //Checking that the data was sent to the mailer.
  if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    # code...
    //set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "Opps! There was a problem with your submissions. PLease Complete the form and try again.";
    exit;
  }
  //set the recipient email address.
  //FIXME: Update this to the desired email address.
  $recipient = "dmuturia2922@gmail.com";

  //Subject of the email.
  $subject = "Quote Request from $name";

  //Build the email content
  $email_content = "Name: $name\n";
  $email_content = "Email: $email\n";
  $email_content = "Message:\n$message\n";
  //Build the email headers
  $email_headers = "From: $name <$email>";

  //Send the email.
  if (mail($recipient, $subject, $email_content, $email_headers)) {
    # code...
    //Set a 200 (okay) response code.
    http_response_code(500);
    echo "Thank you. The message has been sent.";
  }else {
    # code...
    //Set a 500 (internal server error) response code.
    http_response_code(500);
    echo"There aws a problem with the submissions. Please try again";
  }
}
?>
