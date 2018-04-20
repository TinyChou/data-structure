<?php
  $servername = '127.0.0.1';
  $username = 'root';
  $password = '';

  // create connection
  $conn = mysqli_connect($servername, $username, $password);

  // check conneciton
  if (!$conn) {
    die('connection failed: ' . mysqli_connect_error());
  }
  echo 'connected successfully!';

  mysqli_close($conn);
 ?>
