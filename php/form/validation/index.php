<!DOCTYPE html>
<html>
  <body>
    <!--when -->
    <?php

      $name = $email = $gender = $comment = $website = '';

      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = test_input($_POST['name']);
        $email = test_input($_POST['email']);
        $gender = test_input($_POST['gender']);
        $comment = test_input($_POST['comment']);
        $website = test_input($_POST['website']);
      }

      function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
     ?>

    <!-- fields for typein -->
    <h1>PHP Form Validation Example</h1>
    <section style="color: red;">* required field</section>
    <section>
      <form action="<?php echo htmlspecialchars($_SEVER['PHP_SELF']); ?>" method="post">
        Name:<input type="text" name="name" value="<?php echo $name;?>"/><span style="color: red;">*</span></br>
        E-mail:<input type="text" name="email" value="<?php echo $email;?>"/><span style="color: red;">*</span></br>
        Website:<input type="text" name="website" value="<?php echo $website;?>"/></br>
        Comments:<textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea></br>
        Gender:</br>
        <input type="radio" name="gender" value="female" <?php echo ($gender == 'female') ? 'checked' : null;?>>Female</input>
        <input type="radio" name="gender" value="male" <?php echo ($gender == 'male') ? 'checked' : null;?>>Male</input>
        <input type="radio" name="gender" value="other" <?php echo ($gender == 'other') ? 'checked' : null;?>>Other</input>
        <span style="color: red;">*</span></br>
        <input type="submit" />
      <form>
    </section>

    <!-- post results -->
    <section>
      <?php
        echo $name . '</br>';
        echo $email . '</br>';
        echo $website . '</br>';
        echo $comment . '</br>';
        echo $gender . '</br>';
      ?>
    </section>
  </body>
</html>
