<?php

  // String
  // Integer
  // Float/Double
  // Boolean
  // Array
  // Object
  // NULL
  // Resource


  // 1.String
  $str_x = 'Hello world!';
  $str_y = 'Hello world!';

  echo $str_x;
  echo '</br>';
  echo $str_y;

  // 2.Integer
  $int_x = 655368888;

  echo var_dump($int_x);

  // 3.Float
  $float_x = 10.123090312301312830183210;

  echo var_dump($float_x);

  // 4.Boolean
  $bool_t = !true;

  echo var_dump($bool_t);

  // 5.Array
  $arr_cars = array('Volvo', 'BMW', 'Toyota');
  echo var_dump($arr_cars);

  // 6.Object
  class Car {
    function Car() {
      $this->model = 'VM';
    }
  }
  $myCar = new Car();
  echo $myCar->model;

  // 7.NULL
  $noop = 'Hello world';
  $noop = null;
  echo var_dump($noop);

  // 8.Resource
  /*
  The special resource type is not an actual data type. It is the storing of a reference to functions and resources external to PHP.

  A common example of using the resource data type is a database call.
  */
 ?>
