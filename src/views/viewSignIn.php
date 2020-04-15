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
        <h3>Create Account</h3>
      </div>

      <form class="client-space__form" action="../index.php?url=signin" method="post">
        <div class="client-space__form__items">
          <div class="client-space__form__items__item">
            <label for="name">Name :</label>
            <input
              name="name"
              class="client-space__form__items__item__input"
              type="text"
              placeholder="Name"
            />
          </div>

          <div class="input-wrapper">
            <div class="client-space__form__items__item">
              <label for="birthday">Date of birth :</label>
              <input
                name="birthday"
                class="client-space__form__items__item__input"
                type="text"
                placeholder="Date of birth"
              />
            </div>

            <div class="client-space__form__items__item">
              <label for="country">Country :</label>
              <input
                name="country"
                class="client-space__form__items__item__input"
                type="text"
                placeholder="Country"
              />
            </div>
          </div>

          <div class="client-space__form__items__item">
            <label for="email">Email :</label>
            <input
              name="email"
              class="client-space__form__items__item__input"
              type="text"
              placeholder="exemple@gmail.com"
            />
          </div>

          <div class="client-space__form__items__item">
            <label for="pass">Password :</label>
            <input
              name="password"
              class="client-space__form__items__item__input"
              type="text"
              placeholder="Password"
            />
          </div>

          <div class="client-space__form__items__item">
            <label for="confirm-password">Confirm password :</label>
            <input
              name="confirm-password"
              class="client-space__form__items__item__input"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="client-space__form__submit">
          <input type="submit" value="start">
          <!-- <button type="submit" class="client-space__form__submit__button">
            START
          </button> -->
          <a href="../views/login.html">login</a>
        </div>
      </form>
    </div>
  </body>
</html>
