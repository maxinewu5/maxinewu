<html>
  <head>
    <title>Contact</title>

    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" href="styles.css">
        
    <script src="scripts.js" async></script>
  </head>
  <body>

  <div id="nav" class="stroke" class="sticky">
        <ul id="menu">
            <li><a href="index.html">Maxine Wu</a></li>
            <li><a style="background-color: black;">|</a></li>
            <li><a href="aboutme.html">About</a></li>
            <li><a href="music.html">Music</a></li>
            <li><a href="games.html">Games</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
        
    <div id="header" style="background-color: black;">
        <h1 id="hi">Form Response</h1>
    </div>

  <div class="content">
    <p>Thank you <?php echo $_POST["fname"]; ?> for your message. I'll read it eventually, I promise!</p>

    <?php
      $data = file_get_contents('messages.json');
      $data_array = json_decode($data);
      $input = array(
          'name' => $_POST['fname'],
          'message' => $_POST['message'],
      );

      $data_array[] = $input;
      $data_array = json_encode($data_array, JSON_PRETTY_PRINT);
      file_put_contents('messages.json', $data_array);

    ?>
    <br>

    <a href="contact.html"><< Back to Form</a>
  </div>

  </body>
</html>