<?php

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$text = $_POST['text'];

//echo isset($name), isset($tel, isset($email), isset($text);


if(isset($name) && isset($tel) && isset($email) && isset($text)){
  $to = "contact@ulibkaprofi.ru"; // Stacox
  $subject = "Заказать консультацию"; // TITLE
  $headers = "From: ".$email."\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "Content-type: text/html\r\n";
  $message = "<html><body>";
  $message .= "<h3>Обратная связь</h3>";
  $message .= "<p><b>Номер телефона:</b>".$tel."</p>";
  $message .= "<p><b>Email:</b>".$email."</p>";
  $message .= "<p><b>Тип сообщения:</b>".$text."</p>";
  $message .= "</body></html>";

  if (mail($to, $subject, $message, $headers)) {
      echo 1;
  } else {
      echo 0;
  }

} else{
  echo 2;
}

?>