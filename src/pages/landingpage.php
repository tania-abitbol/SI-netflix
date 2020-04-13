<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GOFILMAX</title>
  <link rel="stylesheet" href="../styles/css/style.css"/>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="js/index.js" defer></script>
</head>

  <body>
<header class="head">
    <nav class="head__nav">
      <div class="head__nav__left">
        <img src="../assets/images/logo.png" alt="" />
        <ul class="head__nav__left__links">
          <a><li>Home</li></a>
          <a><li>Engagement</li></a>
        </ul>
      </div>

      <div class="head__nav__right">

      <button class="head__nav__right__up" type="submit">
            <a href="pages/create-account.php"> Sign up </a>
      </button> 
      <button class="head__nav_right__in" type="submit">
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
