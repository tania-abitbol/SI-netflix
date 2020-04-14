<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GOFILMAX</title>
    <link rel="stylesheet" href="../styles/css/style.css" />
  <script src="../js/index.js" defer type="module"></script>

  </head>

  <body>
    <div class="client-space">
      <div class="client-space__logo">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="client-space__title">
        <h3>Login</h3>
      </div>

      <form class="client-space__form" action="../index.php?action=login" method="post">
        <div class="client-space__form__items">
          <div class="client-space__form__items__item">
            <label for="name">Name:</label>
            <input
              class="client-space__form__items__item__input"
              name="name"
              type="text"
              placeholder="ID"
            />
          </div>
          <div class="client-space__form__items__item">
            <label for="password">Password :</label>
            <input
            
              class="client-space__form__items__item__input"
              name="password"
             
              placeholder="Password"
              
            />
       
            <a class="client-space__form__link" href="./create-account.php"
              >Do not have an account yet?</a
            >
          </div>
        </div>

        <div class="client-space__form__submit">
          <input class="client-space__form__submit__button" type="submit" value="Start"/>
        
        </div>
      </form>
    </div>
  </body>
</html>
