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
    <p>Thank you <?php echo $_POST["fname"]; ?> for your message.</p>

    <?php

    class data {
        public $name;
        public $email;
        public $message;
    }
    
    $data = new data();
    $data->name = $_POST["fname"];
    $data->email = $_POST["email"];
    $data->message = $_POST["message"];

    $myJSON = json_encode($data);
    echo "<p>Your message has been saved as:</p>";
    echo $myJSON;

    $myfile = fopen("messages.txt", "a") or die("Unable to open file!");

    fwrite($myfile, $myJSON.", \n");
    fclose($myfile);

    ?>
    <br>
    <br>
    <br>
    <a href="contact.html"><< Back to Form</a>
  </div>

  </body>
</html>