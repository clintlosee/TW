<?php

$EmailFrom = "GeneralContact@titlewest.com";
$EmailTo = "closee@titlewest.com";
$Subject = "Title West General Contact Request";
$Name = Trim(stripslashes($_POST['name']));  
//$Email = Trim(stripslashes($_POST['Email'])); 
$Address = Trim(stripslashes($_POST['address']));
$CityStateZip = Trim(stripslashes($_POST['citystatezip']));
$Phone = Trim(stripslashes($_POST['phone']));
$Reason = Trim(stripslashes($_POST['reason']));
$Comments = Trim(stripslashes($_POST['comments'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error1.htm\">";
  exit;
}

// prepare email body text complete
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Address: ";
$Body .= $Address;
$Body .= "\n";
$Body .= "City, State, Zip: ";
$Body .= $CityStateZip;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";
$Body .= "Reason for Request: ";
$Body .= $Reason;
$Body .= "\n";
$Body .= "Comments: ";
$Body .= $Comments;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  //print "<meta http-equiv=\"refresh\" content=\"0;URL=http://titlewest.com/contacts/contact_form.html\">";
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact_form.htm\">";
	//echo "<script type='text/javascript'>alert('Really annoying pop-up!');</script>";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>