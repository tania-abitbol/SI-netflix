<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GOFILMAX</title>
    <link rel="stylesheet" href="../styles/css/style.css" />
  </head>

  <body>
    <div class="client-space">
      <div class="client-space__logo">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="client-space__title">
        <h3>Login</h3>
      </div>

      <form class="client-space__form">
        <div class="client-space__form__items">
          <div class="client-space__form__items__item">
            <label for="email">Email :</label>
            <input
              class="client-space__form__items__item__input"
              name="email"
              type="text"
              placeholder="exemple@gmail.com"
            />
          </div>
          <div class="client-space__form__items__item">
            <label for="password">Password :</label>
            <input
              class="client-space__form__items__item__input"
              name="password"
              type="text"
              placeholder="Password"
            />
            <a class="client-space__form__link" href="./create-account.php"
              >Do not have an account yet?</a
            >
          </div>
        </div>

        <div class="client-space__form__submit">
          <button class="client-space__form__submit__button" type="submit">
            <a href="../index.php">START</a>
          </button>
        </div>
      </form>
    </div>
  </body>
</html>
