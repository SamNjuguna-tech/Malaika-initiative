<?php 
$message_sent = false;

if(isset($_POST['submit'])){

	if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

		$fname = $_POST['firstname'];
		$lname = $_POST['lastname'];
		$phone = $_POST['phone'];
		$emailFrom = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		$email = $emailFrom;
		$tailresult = substr($email, -10);
		$headresults =substr($email, 0,8);

		if($headresults !== 'no-reply'){
			if($tailresult == '@yahoo.com' || $tailresult == '@gmail.com' ) {
				$headers ="From:".$emailFrom;
				$To = "contact@malaikaipd.com";
				$txt = "You have received an email from ".$fname."\t".$lname."\n email: ".$emailFrom."\n Phone Number: ".$phone."\n\n".$message;
    
    
				mail($To, $subject, $txt, $headers);
				$message_sent = true;

				if ($message_sent ==true) {
					header("Location: contact.html?mailsend");
				
					
				}
			}else{
			
			echo (' sorry domain email is not alowed');
			header("Location: contact.html?mailfailed")
			
		  }
		}else{
		  echo (' access denied your email is not allowed.');
		  header("Location: contact.html?mailFailed");
		}


		
		
	}
	
	
	

}







 ?>





 ?>
