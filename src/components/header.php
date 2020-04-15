<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GOFILMAX</title>
  <link rel="stylesheet" href="../styles/css/style.css" />

  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  

  <script src="../js/index.js" defer type="module"></script>

</head>

  <body>
<header class="header">
    <nav class="header__nav">
      <div class="header__nav__left">
        <img src="../assets/images/logo.png" alt="" />
        <ul class="header__nav__left__links">
        <a href="../views/home.php"><li>Home</li></a>
          <a href="../views/film.php"><li>Films</li></a>
          <a href="../views/series.php"><li>Series</li></a>
        </ul>
      </div>

      <div class="header__nav__right">

        <img src="../assets/images/search-icon.png" alt="search bar" />
        <a href="../views/account.php"><img src="../assets/images/user.svg" alt="user menu" /></a>
          <div class="header__nav__right__menu">
          <img class="header__nav__right__menu--img" src="../assets/images/bottom-arrow.png" alt="slider user menu" />
          <ul class="header__nav__right__menu--open">
          <a href="../views/account.php"><img src="../assets/images/user.svg" alt="user menu" /></a>
            <a href="../views/account.php"><li>Settings</li></a>
            <a href="../index.php?url=logout" ><li>Logout</li></a>          </ul>
          </div>

      </div>
    </nav>
  </header>

