<?php
class ControllerSignin
{
    private $_signinManager;
  
    public function __construct($url)
    {
        if (isset($url)&& count($url)>1) {
            throw new Exception("Page introuvable");
        } elseif (!empty($_POST["name"]) && !empty($_POST["password"])) {
            $this->signin();
        } else {
            require_once("views/viewSignin.php");
        }
    }

    private function signin()
    {
        $this->_signinManager = new SigninManager;
        $this->_signinManager->createUser($_POST["name"], $_POST["password"]);
        require_once("views/viewLogin.php");
    }
}
