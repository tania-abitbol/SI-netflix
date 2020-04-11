<?php
require "model/model.php";
function addUser($name) {
$user = insertUser($name);


if ($user === false) {
    die("Impossible d'ajouter cet utilisateur !");
}
else {
    header('Location: src/index.php?action=login');
}
};
function getConnexion($name, $pass){
  $check_account = checkAccount($name, $pass);

  if ($check_account == true){
      header("Location: index.php?action=home");
  } else {
      header("Location: index.php?action=login&error=badinf");
  }
}
