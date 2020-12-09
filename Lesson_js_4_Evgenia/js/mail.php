<?php
$name = filter_var($_POST["u_name"], FILTER_SANITIZE_STRING);
$surname = filter_var($_POST["u_surname"], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST["u_phone"], FILTER_SANITIZE_EMAIL);
$email = filter_var($_POST["u_email"], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST["u_message"], FILTER_SANITIZE_EMAIL);
$errors;

if(empty($name)){
    $errors .= "Please fill in the correct field";
} else{
    $u_name = $name;
}

if(empty($phone)){
    $errors .="Please fill in the correct field";
} else{
    $u_phone = $phone
};

//! специально указала с "?" т.к. не уверенна, можно ли было использовать Вашу эту инфу
$to = "?info@atereshchuk.space";
$emailBody = "New application on the site\n";
$emailBody .= "\n";
$emailBody .= "Name:" .$name . "\n";
$emailBody .= "Surname:" .$surname . "\n";
$emailBody .= "Email:" .$email . "\n";
$emailBody .= "Phone number:" .$phone . "\n";
$emailBody .= "User message:" .$message . "\n";

if (mail($to, "New application on the site", $mailBody)){
    $output = "ok";
    die($output);
} else{
    $output = $errors;
    die($output);
}
?>