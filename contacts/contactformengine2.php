<?php
$Name = $_POST['name'];   
$Address = $_POST['address'];
$CityStateZip = $_POST['citystatezip'];
$Phone = $_POST['phone'];
$Email = $_POST['email'];
$Reason = $_POST['reason'];
$Comments = $_POST['comments'];

//$EmailFrom = 'GeneralContact@titlewest.com';
$EmailTo = 'titlewestcontact@gmail.com';
$Subject = 'Title West General Contact Request';

$msg = "Name: $Name\n\n" . 
		"Address: $Address\n\n" . 
		"City, State, Zip: $CityStateZip\n\n" . 
		"Phone: $Phone\n\n" .
		"E-mail: $Email\n\n" .  
		"Reason for Request: $Reason\n\n" . 
		"Comments: $Comments";
		
mail($EmailTo, $Subject, $msg, 'FROM:'.$Email);


print "<meta http-equiv=\"refresh\" content=\"0;URL=contact_form.html\">";

?>