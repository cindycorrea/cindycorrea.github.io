<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Cindy Correa">
    <meta name="description" content="A website for scooter rentals">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/small.css">
    <link rel="stylesheet" href="css/medium.css">
    <link rel="stylesheet" href="css/large.css">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <title>Ridin' Retro</title>
</head>

<body>
    <div id="weather-alerts"></div>
    <header>
        <a href="home.html">
            <img src="./images/logo.png" alt="Ridin' Retro Logo"></a>
        <section>
            <h1>Ridin'Retro</h1>
        </section>
    </header>
    <nav>
        <ul class="navigation drop-down-contents">
            <li><a class="compress">&#9776; Menu</a></li>
            <li class="active"><a href="home.html">Home</a></li>
            <li><a href="rentals.html">Rentals</a></li>
            <li><a href="reserve.html">Reserve</a></li>
            <li><a href="tours.html">Tours</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>

    <main>
      <h1>Thank You</h1>
      <>Below is a summary of the information you provided.
      <?php
      echo'Full Name:'.$_POST["fullname"].'<br>';
      echo'Email:'.$_POST["email"];
      ?>
    </main>

    <footer>
        <div class="social">
            <a href="http://www.facebook.com" target="_blank"><img src="./images/facebook75.png" alt="facebook"></a>
            <a href="http://www.instagram.com" target="_blank"><img src="./images/instagram75.png" alt="instagram"></a>
            <a href="http://www.youtube.com" target="_blank"><img src="./images/youtube75.png" alt="youtube"></a>
            <a href="http://www.twitter.com" target="_blank"><img src="./images/twitter75.png" alt="twitter"></a>
        </div>
        <section>&copy; Ridin' Retro | Cindy Correa | <a href="attributions.html"
                target="_blank">Attributions</a><br><span id="currentdate"></span><br>Last Modified: <span
                id="lastUpdated"></span></section>
    </footer>
    <script src="javascript/index.js"></script>


</body>

</html>