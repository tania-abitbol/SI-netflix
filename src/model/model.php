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
  $pass_hash =  password_hash($_POST['password'], PASSWORD_DEFAULT);
  $req = $bdd->prepare("INSERT INTO users(name , password) VALUES(:name, :password)");

  $user = $req->execute(array(
      "name" => $name,
      "password" => $pass_hash
  ));
  return $user;
}

function checkAccount($name, $password){
  $bdd = dbConnect();
  $user = $bdd->prepare("SELECT id, name, password FROM users WHERE name = :name");
  $user->execute([
      'name' => $name,
  ]);

  $user_data = $user->fetch();
  if (!$user_data){
      return false;
  }

  $ispasscorrect = password_verify($password, $user_data['password']);

  if ($ispasscorrect) {
      session_start();
      $_SESSION['id'] = $user_data['id'];
      $_SESSION['name'] = $user_data['name'];

      return true;
  } else {
      return false;
  }

}