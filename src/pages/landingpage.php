<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GOFILMAX</title>
  <link rel="stylesheet" href="#" />
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="js/index.js" defer></script>
</head>

  <body>
<header class="header">
    <nav class="header__nav">
      <div class="header__nav__left">
        <img src="../assets/images/logo.png" alt="" />
        <ul class="header__nav__left__links">
          <a><li>Home</li></a>
          <a><li></li></a>
          <a><li>Engagement</li></a>
        </ul>
      </div>

      <div class="header__nav__boutton">

      <button class="signup__input" type="submit">
            <a href="pages/create-account.php"> Sign up </a>
      </button>
      </div>
      <div class="header__nav__boutton">
      <button class="signin__input" type="submit">
            <a href="pages/login.php"> Sign in </a>
      </button>
      </div>
    </nav>
  </header>
  <div class="">
  <img src="../assets/images/macbook-pro.jpg"/>
  </div>
  <div class="poster">
    <div class="poster__firstrow">
  <img src="../assets/poster/marmageddon.jpg"/>
  <img src="../assets/poster/austin_power2.jpg"/>
  <img src="../assets/poster/babydriver.jpg"/>
  <img src="../assets/poster/batman.jpg"/>
  <img src="../assets/poster/braveheart.jpg"/>
    </div>
    <div class="poster__secondrow">
  <img src="../assets/poster/ironman2.jpg"/>
  <img src="../assets/poster/red.jpg"/>
  <img src="../assets/poster/salt.jpg"/>
  <img src="../assets/poster/the-accountant.jpg"/>
  <img src="../assets/poster/the-conjuring.jpg"/>
    </div>
  </div>
  <?php include("./components/footer.php")?>
