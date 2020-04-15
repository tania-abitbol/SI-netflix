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
  
  protected function getAll($table, $obj)
  {
    $var =  [];
    $req = $this->getBdd()->prepare("SELECT * FROM " .$table. " ORDER BY id desc");
    $req->execute();
    while ($data = $req->fetch(PDO::FETCH_ASSOC)) 
    {
      $var[] = new $obj($data);
    }
    return $var;
    $req->closeCursor();
  }
  
  protected function postOne($table, $obj, $name, $password) //TODO change custom param in one array who will construct a string of params
  {
    $req = $this->getBdd()->prepare("INSERT INTO " .$table. "(name,password) VALUES(:name, :password)");

    $req->execute(array(
      "name" => $name,
<<<<<<< HEAD
      "email" => $email,
      "password" => $password,
      
=======
      "password" => $password
>>>>>>> parent of c7c026a... email login
  ));
<<<<<<< HEAD
  
=======
 
>>>>>>> parent of 09bf9da... bug
    $req->closeCursor();
  }

  protected function getOne($table, $obj, $name, $password)

  {
    $req = $this->getBdd()->prepare("SELECT name, password FROM " .$table. " WHERE name = :name");
    $req->execute(array(
         name =>$name,
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

 
}