<?php

  $t = date('H');

  if ($t < '12') {
    echo 'Have a good day!' . $t;
  } elseif ($t < '18') {
    echo 'Good afternoon!';
  } else {
    echo 'Good night!';
  }
 ?>
