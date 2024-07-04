<?php
if(!isset($_POST['submit'])){
    echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitor_idea = $_POST['idea'];

if(empty($name)||empty($visitor_email)||empty($visitor_idea)){
    echo "Need to fill all the necessary fields!";
    exit;
}

$email_from = 'kshitijmahajan.ngp@gmail.com';
$email_subject = "New Form Submission";
$email_body = "You have received a new message from $name.\n".
              "email address: $visitor_email\n".
              "Here is the message: \n $visitor_idea".

$to = "kshitijmahajan.ngp@gmail.com";
$headers = "From: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);
header("refresh");
echo date('H:i:s Y-m-d');
?>