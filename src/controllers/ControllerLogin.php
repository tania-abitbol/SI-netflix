<?php
class ControllerLogin
{
  public function __construct($url)
  {
    if(isset($url)&& count($url)>1){
      throw new Exception("Page introuvable");
    } elseif (isset($_POST["email"]) && isset($_POST["password"])){
        $this->login();
    }
    else{
      throw new Exception("Utilisateur introuvable");
    }
  }

  private function login()
  {
    $this->_loginManager = new LoginManager;
    $login = $this->_loginManager->loginUser($_POST["email"],$_POST["password"]);
    if(!$login){
       throw new Exception("email or Password Incorrect");
    }

    header("Location:views/viewhome.php");
  }
}