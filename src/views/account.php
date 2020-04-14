<?php include("../components/header.php")?>

    <div class="profil">
      <ul class="profil__nav">
        <li><img src="../assets/images/profil/edit_green.svg" /> My list</li>
        <li>View</li>
      </ul>
      <div class="profil__status">
        <p>Pseudo</p>
        <img src="../assets/images/user.svg" />
      </div>
    </div>
    <h1 class="container--second--title">My List - Favoris</h1>
    <div class="container">
      <div class="slider__icon--s">
        <div class="slider__icon--container">
          <img class="prev" src="./../assets/images/arow--prev.svg" />
        </div>
        <div class="slider__icon--second">
          <img class="next" src="./../assets/images/arrow--next.svg" />
        </div>
      </div>
      <div class="sliders sliders--large">
        <div class="sliders__inner">
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__ite--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
          <div class="sliders__item">
            <div class="sliders__item--media">
              <div class="sliders__item--img"></div>
            </div>
            <div class="sliders__item--details">
              <div class="sliders__item--title">
                Arrow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="account-client">
      <div class="account-client__jauge">
        <h3 class="account-client__titleOne">Time to watch</h3>
        <div class="account-client__jauge__body">
          <div class="account-client__jauge__body__fill"></div>
          <div class="account-client__jauge__body__cover"><strong>14H</strong>/day</div>
        </div>
        <p class="account-client__jauge__txt">See all view</p>
      </div>
      <form class="account-client__form">
        <div class="account-client__title">
          <h3>Change Email</h3>
        </div>
        <div class="account-client__form__items">
          <div class="account-client__form__items__item">
            <label for="email">Email :</label>
            <input
              class="account-client__form__items__item__input"
              name="email"
              type="text"
              placeholder="exemple@gmail.com"
            />
          </div>
          <div class="account-client__form__items__item">
            <label for="password">Password :</label>
            <input
              class="account-client__form__items__item__input"
              name="password"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="account-client__form__submit">
          <button class="account-client__form__submit__button" type="submit">
            <a href="../index.html">START</a>
          </button>
        </div>
      </form>
      <form
        class="account-client__form"
        action="upload.php"
        method="post"
        enctype="multipart/form-data"
      >
        <div class="account-client__title">
          <h3>Change Icone</h3>
        </div>
        <input type="file" name="fileToUpload" id="fileToUpload" />
        <div class="account-client__form__submit">
          <button class="account-client__form__submit__button" type="submit">
            <a href="../index.html">START</a>
          </button>
        </div>
      </form>
      <form class="account-client__form">
        <div class="account-client__title">
          <h3>Change Password</h3>
        </div>
        <div class="account-client__form__items">
          <div class="account-client__form__items__item">
            <label for="email">New Password :</label>
            <input
              class="account-client__form__items__item__input"
              name="email"
              type="text"
              placeholder="Password"
            />
          </div>
          <div class="account-client__form__items__item">
            <label for="password"> Confirm Password :</label>
            <input
              class="account-client__form__items__item__input"
              name="password"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="account-client__form__submit">
          <button class="account-client__form__submit__button" type="submit">
            <a href="../index.html">START</a>
          </button>
        </div>
      </form>
    </div>
    <?php include("./components/footer.php")?>