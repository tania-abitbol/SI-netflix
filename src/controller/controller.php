<?php
require ("model/model.php");
function addUser($name) {
$user = insertUser($name);


if ($user === false) {
    die("Impossible d'ajouter cet utilisateur !");
}
else {
    header('Location: index.php?action=login');
}
};
function getConnexion($name, $password){
  $check_account = checkAccount($name, $password);

  if ($check_account == true){
      header("Location: index.php?action=home");
  } else {
      header("Location: index.php?action=login&error=badinf");
  }
}
