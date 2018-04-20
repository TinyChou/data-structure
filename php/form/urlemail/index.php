<?php

  $name = 'abcs';
  if (!preg_match('/^[a-zA-Z]*$/', $name)) {

  }

  $email = 'kingfo@ch.com';
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

  }

  $website = 'http://www.baidu.com';
  if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $website)) {

  }
 ?>
