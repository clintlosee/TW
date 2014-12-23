<?php

$County = Trim(stripslashes($_POST['county']));
$Output = Trim(stripslashes($_POST['output']));
$Name = Trim(stripslashes($_POST['name']));  
$Address = Trim(stripslashes($_POST['address']));
$City = Trim(stripslashes($_POST['city']));
$State = Trim(stripslashes($_POST['state']));
$Zip = Trim(stripslashes($_POST['zip']));
$OfficeNumber = Trim(stripslashes($_POST['office']));
$Phone = Trim(stripslashes($_POST['phone']));
$Fax = Trim(stripslashes($_POST['fax']));
$Email = Trim(stripslashes($_POST['email'])); 
$Quadrant = Trim(stripslashes($_POST['quadrant']));
$NS1 = Trim(stripslashes($_POST['ns1']));
$NS2 = Trim(stripslashes($_POST['ns2']));
$EW1 = Trim(stripslashes($_POST['ew1']));
$EW2 = Trim(stripslashes($_POST['ew2']));
$PropertyAmount = Trim(stripslashes($_POST['propertyamount']));
$Instructions = Trim(stripslashes($_POST['instructions'])); 

$EmailFrom = $Email;
$EmailTo = "closee@titlewest.com";
$Subject = "Title West Farm Kit Request";


// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text complete
$Body = "";
$Body .= "County: ";
$Body .= $County;
$Body .= "\n";
$Body .= "Preferred Output: ";
$Body .= $Output;
$Body .= "\n";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Address: ";
$Body .= $Address;
$Body .= "\n";
$Body .= "City: ";
$Body .= $City;
$Body .= "\n";
$Body .= "State: ";
$Body .= $State;
$Body .= "\n";
$Body .= "Zip: ";
$Body .= $Zip;
$Body .= "\n";
$Body .= "Office Number: ";
$Body .= $OfficeNumber;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";
$Body .= "Fax: ";
$Body .= $Fax;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Quadrant: ";
$Body .= $Quadrant;
$Body .= "\n";
$Body .= "Coordinates: North-South: ";
$Body .= "\n";
$Body .= $NS1;
$Body .= "\n";
$Body .= $NS2;
$Body .= "\n";
$Body .= "Coordinates: East-West: ";
$Body .= "\n";
$Body .= $EW1;
$Body .= "\n";
$Body .= $EW2;
$Body .= "\n";
$Body .= "How many properties included in search: ";
$Body .= $PropertyAmount;
$Body .= "\n";
$Body .= "Special Instructions: ";
$Body .= $Instructions;
$Body .= "\n";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://clintlosee.com/clients/tw/services/order_title_work/farm_kit.html\">";
	//echo "<script type='text/javascript'>alert('Really annoying pop-up!');</script>";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>