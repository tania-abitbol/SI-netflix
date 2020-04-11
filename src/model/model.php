<?php 

function dbConnect() {
    try { $bdd = new PDO('mysql:host=localhost; dbname=gfx;charset=utf8', 'root2', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
    catch (Exception  $e) {
    die('Error : ' .  $e->getMessage());
    }
    return $bdd;
}
function insertUser($name) {
  $bdd = dbConnect();
  $pass_hache =  password_hash($_POST['pass'], PASSWORD_DEFAULT);
  $req = $bdd->prepare("INSERT INTO users(name , pass) VALUES(:name, :pass)");

  $user = $req->execute(array(
      "name" => $name,
      
      "pass" => $pass_hache
  ));
  return $user;
}