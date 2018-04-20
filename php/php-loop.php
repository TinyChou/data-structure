<?php

  $x = 10;
  while ($x > 0) {
    echo 'Loop with: ' . $x . '</br>';
    $x--;
  }

  echo '</br>';
  $x = 10;
  do {
    echo 'Loop with: ' . $x . '</br>';
    $x--;
  } while($x > 0);

  echo '</br>';
  $x = 10;
  for ($x = 10; $x > 0; $x--) {
    echo 'Loop with: ' . $x . '</br>';
  }

  echo '</br>';
  $x = array('a', 'b', 'c', 'd');
  $y = array(
    'a' => 'a',
    'b' => 'b',
  );
  foreach ($x as $key) {
    # code...
    echo $key . '</br>';
  }
  echo '</br>';
  foreach ($y as $key => $value) {
    # code...
    echo $key . ' => ' . $value . '</br>';
  }
 ?>
