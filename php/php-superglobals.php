<?php

  // $GLOBALS
  // $_SERVER
  // $_REQUEST
  // $_POST
  // $_GET
  // $_FILES
  // $_ENV
  // $_COOKIE
  // $_SESSION

  $x = 75;
  $y = 25;

  function addition() {
      $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
  }

  addition();
  echo $z;
  ?>
