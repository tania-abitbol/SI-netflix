<?php
class ControllerSignin
{
  private $_signinManager;
  
  public function __construct($url)
  {
    if(isset($url)&& count($url)>1){
      throw new Exception("Page introuvable");
    }
    elseif (isset($_POST["name"]) && isset($_POST["password"])){
      $this->signin();
    }
    else {
      throw new Exception("Mauvaise Inscription");
    }
  }

  private function signin()
  {
    $this->_signinManager = new SigninManager;
    $signin = $this->_signinManager->createUser($_POST["name"],$_POST["password"]);
    header("Location: views/viewLogin.php");
  }
}