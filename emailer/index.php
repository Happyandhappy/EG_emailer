<?php
/*
	***** set $mainEmail address  *****
*/


require 'vendor/autoload.php';

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Headers:*');

// set config
$mainEmail = "MAIN_EMAIL";  // Receiver Email address
$subject = "Subject";

function sendEmail($to, $from , $content)
{
	$email = new \SendGrid\Mail\Mail(); 
	$email->setFrom( $from, "Sender");
	$email->setSubject($subject);
	$email->addTo( $to, "Receiver");
	$email->addContent("text/plain", $content);
	$sendgrid = new \SendGrid("");	
	try 
	{
	    $response = $sendgrid->send($email);   
	} catch (Exception $e) {}
}


if (isset($_POST['from']) && isset($_POST['content']))
{
    $to = $mainEmail;
    $from = $_POST['from'];    
    $content = $_POST['content'];
    sendEmail($mainEmail, $from, $content);
    sendEmail($from, $mainEmail, " Hey! \n thank you for filling out our form");
    echo json_encode(array("result"=>"Message sent!"));    
}

