<?php
  $servername = '127.0.0.1';
  $username = 'root';
  $password = '';

  try {
    $conn = new PDO('mysql:host=127.0.0.1;dbname=xiuno4', $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo 'connected successfully!';
    $conn = null;
  } catch (PDOException $e) {
    echo 'connection failed: ' . $e->getMessage();
  }
 ?>
