<?php
class ControllerSignin
{
  private $_articleManager;
  
  public function __construct($url)
  {
    if(isset($url)&& count($url)>1){
      throw new Exception("Page introuvable");
    }
    elseif (isset($_POST["name"]) && isset($_POST["password"])&& isset($_POST["email"])){
     
      var_dump(isset($_POST["name"]) && isset($_POST["password"])&& isset($_POST["email"]));
    $this->signin();

    }
    else {
      throw new Exception("Mauvaise Inscription");
    }
  }

  private function signin()
  {
<<<<<<< HEAD
 
<<<<<<< HEAD
=======
  var_dump("f");

>>>>>>> parent of c9326a9... end
=======

>>>>>>> parent of 09bf9da... bug
    $this->_signinManager = new SigninManager;
    $signin = $this->_signinManager->checkEmail($_POST["email"]);
    header("Location: views/viewLogin.php");
  }
}