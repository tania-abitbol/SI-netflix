<?php

abstract class Model
{
  private static $_bdd;

  private static function setBdd()
  {
    self::$_bdd = new PDO('mysql:host=localhost; dbname=gfx;charset=utf8', 'root2', '');
    self::$_bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
  }

  protected function getBdd()
  {
    if(self::$_bdd == null){
      self::setBdd();
    }
    return self::$_bdd;
  }
  
  
  
  protected function postOne($table, $obj, $name,$email, $password) //TODO change custom param in one array who will construct a string of params
  {
    $req = $this->getBdd()->prepare("INSERT INTO " .$table. "(name,email,password,) VALUES(:name,:email, :password)");

    $req->execute(array(
      "name" => $name,
      "email" => $email,
      "password" => $password,
      
  ));
<<<<<<< HEAD
  
=======
 
>>>>>>> parent of 09bf9da... bug
    $req->closeCursor();
  }

  protected function getOne($table, $obj, $email, $password)

  {
    $req = $this->getBdd()->prepare("SELECT email, password FROM " .$table. " WHERE email = :email");
    $req->execute(array(
         email=>$email,
    ));
    $user = $req->FETCH();
    if(!$user){
      return false;
    }
    $ispasscorrect=password_verify($password,$user["password"]);
    if($ispasscorrect=true){
      return true;
    }
    else{
      return false;
    }
  }

   protected function getAll($table)
{
  $req = $this->getBdd()->prepare("SELECT *  FROM " .$table );
return $req->fetch();
}
 
}